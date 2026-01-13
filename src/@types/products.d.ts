export interface IProducts {
    data: {
        //titre
        headline: string;
        //marque
        contributor: {
            caption: string;
            isBlurred: boolean;
        };

        // Prix
        adverts: {
            salePrice: number;
        }[];

        //fil d'arianne
        breadcrumbs: {
            label: string;
            url: string;
        }[];

        //note globale
        globalRating: {
            score: number;
            nbReviews: number;
        };

        //avis clients
        reviews: {
            id: number;
            note: number;
            title: string;
            description: string;
            date: number;
            author: {
                firstName: string;
            };
        }[];

        // images du produit
        imagesUrls: string[];

        //description du produit
        description: string;    // Caractéristiques (Editeur, Sortie...)
        edito: string;          // Long texte de présentation / Synopsis
        specifications: {       // Détails techniques (Support, Audio...)
            sections: {
                entry: {
                    title: string;
                    content: { header: string; body: string }[];
                }[];
            };
        };
    };
}