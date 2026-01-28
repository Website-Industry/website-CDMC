import type { APIRoute } from 'astro';
import { createInscriptionPage } from '../../lib/notion';

// Cette route doit être rendue côté serveur, pas pré-rendue
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Récupérer les données selon le Content-Type
    const contentType = request.headers.get('content-type') || '';
    
    let name: string | undefined;
    let email: string | undefined;
    let modules: string[] = [];
    let comment: string | undefined;

    // Parser selon le Content-Type (on ne peut lire le body qu'une seule fois)
    if (contentType.includes('application/json')) {
      const body = await request.json();
      name = body.name;
      email = body.email;
      modules = Array.isArray(body.modules) ? body.modules : [];
      comment = body.comment;
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      name = formData.get('name')?.toString();
      email = formData.get('email')?.toString();
      modules = formData.getAll('modules') as string[];
      comment = formData.get('comment')?.toString();
    } else {
      // Si le Content-Type n'est pas défini ou inconnu, essayer JSON par défaut
      try {
        const body = await request.json();
        name = body.name;
        email = body.email;
        modules = Array.isArray(body.modules) ? body.modules : [];
        comment = body.comment;
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
    if (!name || !email) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Le nom et l\'email sont requis.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    if (modules.length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Tu dois sélectionner au moins un module.',
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
    await createInscriptionPage({
      name,
      email,
      modules,
      comment: comment || undefined,
      type: 'inscription',
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Ta demande d\'informations a été enregistrée avec succès ! Je te contacterai bientôt pour répondre à tes questions.',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Erreur API inscription:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Une erreur est survenue lors de l\'envoi de ta demande d\'informations.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

