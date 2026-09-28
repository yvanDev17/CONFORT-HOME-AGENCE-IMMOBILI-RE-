// Configuration globale de l'agence CONFORT HOME
const AGENCY_DETAILS = {
    name: "CONFORT HOME",
    manager: "Mme TEBILE épouse GNANKOU PELAGIE",
    phones: ["+225 07 09 08 52 68", "+225 05 86 58 36 26", "+225 07 07 48 61 66"],
    whatsapp: "2250709085268",
    email: "Homeconfort2020@mail.com",
    address: "M’badon, non loin de l’Ambassade de Chine, Immeuble Stratégique, 2e étage Apt B3, Abidjan",
    hours: "Du lundi au vendredi : 08h00 - 17h00",
    zones: ["Tout Abidjan", "Grand-Bassam", "Bingerville", "Bouaké"]
};

// Catalogue réél des biens
const properties = [
    {
        id: "CH-001",
        title: "Villa Basse 4 Pièces avec Jardin",
        type: "villa",
        typeLabel: "Villa / Maison",
        status: "vente",
        statusLabel: "À Vendre",
        price: 85000000,
        city: "Abidjan",
        commune: "Bingerville",
        address: "Bingerville, Quartier Fehi Kessé",
        surface: 300,
        bedrooms: 3,
        bathrooms: 3,
        parking: true,
        pool: false,
        furnished: false,
        isAvailable: true,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        description: "Superbe villa basse de 4 pièces comprenant 3 chambres autonomes, un grand séjour lumineux, une cuisine équipée et un jardin privé. Titre foncier disponible.",
        features: ["ACD disponible", "Jardin privé", "Parking 2 voitures", "Sécurité 24/7", "Zone paisible"]
    },
    {
        id: "CH-002",
        title: "Appartement Meublé Haut Standing 3 Pièces",
        type: "appartement",
        typeLabel: "Appartement",
        status: "location",
        statusLabel: "À Louer",
        price: 65000, // prix par jour (courte durée)
        city: "Abidjan",
        commune: "Cocody",
        address: "Cocody M'badon, Proche Ambassade de Chine",
        surface: 110,
        bedrooms: 2,
        bathrooms: 2,
        parking: true,
        pool: false,
        furnished: true,
        isAvailable: true,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
        description: "Appartement 3 pièces entièrement meublé et équipé pour séjours de courte ou longue durée à M'badon. Connexion Wi-Fi haut débit, Canal+ et service de ménage inclus.",
        features: ["Meublé", "Wi-Fi Haut Débit", "Canal+", "Climatisation intégrale", "Groupe électrogène"]
    },
    {
        id: "CH-003",
        title: "Terrain Viabilisé avec ACD",
        type: "terrain",
        typeLabel: "Terrain",
        status: "vente",
        statusLabel: "À Vendre",
        price: 35000000,
        city: "Grand-Bassam",
        commune: "Grand-Bassam",
        address: "Grand-Bassam, Zone Résidentielle",
        surface: 500,
        bedrooms: 0,
        bathrooms: 0,
        parking: false,
        pool: false,
        furnished: false,
        isAvailable: true,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
        description: "Parcelle de 500 m² idealement située à Grand-Bassam. Terrain plat, prêt pour construction immédiate de villa avec document ACD approuvé.",
        features: ["Document ACD", "Eau & Électricité disponibles", "Voie d'accès bitumée"]
    },
    {
        id: "CH-004",
        title: "Espace de Bureaux Professionnels 150 m²",
        type: "bureau",
        typeLabel: "Bureau",
        status: "location",
        statusLabel: "À Louer",
        price: 800000, // loyer mensuel
        city: "Abidjan",
        commune: "Cocody",
        address: "Cocody Immeuble Stratégique, M'badon",
        surface: 150,
        bedrooms: 0,
        bathrooms: 2,
        parking: true,
        pool: false,
        furnished: false,
        isAvailable: true,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        description: "Plateau de bureaux à louer situé au 2ème étage d'un immeuble commercial moderne. Comprend un grand open-space, 2 bureaux fermés et des sanitaires privatifs.",
        features: ["Ascenseur", "Sécurité h24", "Fibre optique", "Parking sous-sol"]
    }
    
];

