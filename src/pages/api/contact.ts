import type { APIRoute } from 'astro';
import { createContactPage } from '../../lib/notion';

// Cette route doit être rendue côté serveur, pas pré-rendue
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Récupérer les données selon le Content-Type
    const contentType = request.headers.get('content-type') || '';
    
    let name: string | undefined;
    let email: string | undefined;
    let message: string | undefined;

    // Parser selon le Content-Type (on ne peut lire le body qu'une seule fois)
    if (contentType.includes('application/json')) {
      const body = await request.json();
      name = body.name;
      email = body.email;
      message = body.message;
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      name = formData.get('name')?.toString();
      email = formData.get('email')?.toString();
      message = formData.get('message')?.toString();
    } else {
      // Si le Content-Type n'est pas défini ou inconnu, essayer JSON par défaut
      try {
        const body = await request.json();
        name = body.name;
        email = body.email;
        message = body.message;
      } catch (error) {
        console.error('Failed to parse request:', error);
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Format de données non supporté. Le Content-Type doit être "application/json".',
          }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }
    }

    // Validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Tous les champs sont requis.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Format d\'email invalide.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Créer la page dans Notion
    await createContactPage({
      name,
      email,
      message,
      type: 'contact',
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Ton message a été envoyé avec succès ! Je te répondrai bientôt.',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Erreur API contact:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Une erreur est survenue lors de l\'envoi du message.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

