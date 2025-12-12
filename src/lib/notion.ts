import { Client } from '@notionhq/client';

// Initialisation du client Notion
export function getNotionClient() {
  const notionToken = import.meta.env.NOTION_TOKEN;
  const notionDatabaseId = import.meta.env.NOTION_DATABASE_ID;

  if (!notionToken) {
    throw new Error('NOTION_TOKEN n\'est pas défini dans les variables d\'environnement');
  }
  if (!notionDatabaseId) {
    throw new Error('NOTION_DATABASE_ID n\'est pas défini dans les variables d\'environnement');
  }

  return new Client({
    auth: notionToken,
  });
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
  type: 'contact';
}

export interface InscriptionData {
  name: string;
  email: string;
  modules: string[];
  comment?: string;
  type: 'inscription';
}

// Fonction pour créer une page dans Notion (Contact)
export async function createContactPage(data: ContactData) {
  const notion = getNotionClient();
  const databaseId = import.meta.env.NOTION_DATABASE_ID;

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        // Assure-toi que ces noms correspondent aux propriétés de ta base Notion
        'Nom': {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        'Email': {
          email: data.email,
        },
        'Type': {
          select: {
            name: 'Contact',
          },
        },
        'Message': {
          rich_text: [
            {
              text: {
                content: data.message,
              },
            },
          ],
        },
        'Date': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });
    console.log('Page Notion (Contact) créée:', response);
    return response;
  } catch (error: any) {
    console.error('Erreur lors de la création de la page Notion:', error);
    throw new Error(`Erreur Notion: ${error.message || 'Erreur inconnue'}`);
  }
}

// Fonction pour créer une page dans Notion (Inscription)
export async function createInscriptionPage(data: InscriptionData) {
  const notion = getNotionClient();
  const databaseId = import.meta.env.NOTION_DATABASE_ID;

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        'Nom': {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        'Email': {
          email: data.email,
        },
        'Type': {
          select: {
            name: 'Inscription',
          },
        },
        'Modules': {
          multi_select: data.modules.map(module => ({ name: module })),
        },
        'Commentaire': {
          rich_text: [
            {
              text: {
                content: data.comment || '',
              },
            },
          ],
        },
        'Date': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });
    console.log('Page Notion (Inscription) créée:', response);
    return response;
  } catch (error: any) {
    console.error('Erreur lors de la création de la page Notion:', error);
    throw new Error(`Erreur Notion: ${error.message || 'Erreur inconnue'}`);
  }
}

