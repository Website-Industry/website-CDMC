import type { APIRoute } from 'astro';
import { createInscriptionPage } from '../../lib/notion';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString();
    const email = data.get('email')?.toString();
    const modules = data.getAll('modules') as string[];
    const comment = data.get('comment')?.toString();

    // Validation
    if (!name || !email) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Le nom et l\'email sont requis',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (modules.length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Veuillez sélectionner au moins un module',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Format d\'email invalide',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
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
        message: 'Pré-inscription envoyée avec succès !',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error: any) {
    console.error('Erreur API inscription:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Une erreur est survenue lors de l\'envoi de la pré-inscription',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};

