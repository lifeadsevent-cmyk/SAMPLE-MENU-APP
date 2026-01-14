
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // ENTRÉES
  {
    id: 'e1',
    category: 'Entrées',
    name: 'Soupe de céleri-rave',
    description: 'Une soupe onctueuse et délicate, parfumée aux herbes de saison.',
    price: '70 DH',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'e2',
    category: 'Entrées',
    name: 'Salade variée aux pommes et raisins',
    description: 'Fraîcheur croquante mêlant douceur fruitée et saveurs maraîchères.',
    price: '70 DH',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'e3',
    category: 'Entrées',
    name: 'Suprême d\'avocat aux crevettes',
    description: 'Avocat fondant surmonté de crevettes finement assaisonnées.',
    price: '85 DH',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'e4',
    category: 'Entrées',
    name: 'Crevettes pil pil du sud provençal',
    description: 'Crevettes sautées à l\'ail, piment doux et huile d\'olive vierge.',
    price: '85 DH',
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'e5',
    category: 'Entrées',
    name: 'Salade de boeuf Thaï',
    description: 'Fines lamelles de bœuf saisies, herbes asiatiques et sauce relevée.',
    price: '90 DH',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'e6',
    category: 'Entrées',
    name: 'Salade de printemps aux calmars',
    description: 'Calmars tendres sur un lit de jeunes pousses printanières.',
    price: '90 DH',
    image: 'https://images.unsplash.com/photo-1535473897929-bc3fa7448e08?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'e7',
    category: 'Entrées',
    name: 'Salade césar au poulet pané',
    description: 'L\'incontournable classique avec un poulet croustillant et sauce maison.',
    price: '90 DH',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=1200'
  },

  // PÂTES
  {
    id: 'pa1',
    category: 'Pâtes',
    name: 'Spaguetti bolognaise',
    description: 'Longues pâtes servies avec notre sauce bolognaise traditionnelle mijotée.',
    price: '75 DH',
    image: 'https://images.unsplash.com/photo-1598866539624-9930b201083b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'pa2',
    category: 'Pâtes',
    name: 'Lasagne al forno',
    description: 'Couches de pâtes fraîches, viande savoureuse et béchamel onctueuse.',
    price: '80 DH',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'pa3',
    category: 'Pâtes',
    name: 'Tagliatelle poulet curry',
    description: 'Pâtes rubans enrobées d\'une sauce crémeuse au curry et morceaux de poulet.',
    price: '80 DH',
    image: 'https://images.unsplash.com/photo-1621996346565-e10c1481528f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'pa4',
    category: 'Pâtes',
    name: 'Risotto aux fruits de mer',
    description: 'Riz arborio crémeux marié aux trésors de l\'océan.',
    price: '110 DH',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db0a?auto=format&fit=crop&q=80&w=1200'
  },

  // PIZZAS
  {
    id: 'pi1',
    category: 'Pizzas',
    name: 'Pizza Margarita',
    description: 'L\'essentiel : tomate, mozzarella et basilic frais.',
    price: '60 DH',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'pi2',
    category: 'Pizzas',
    name: 'Pizza Végétarienne',
    description: 'Un jardin sur une pâte fine : légumes de saison grillés.',
    price: '65 DH',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'pi3',
    category: 'Pizzas',
    name: 'Pizza Vesivio',
    description: 'Tomate, fromage, jambon et viande hachée savoureuse.',
    price: '70 DH',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'pi4',
    category: 'Pizzas',
    name: 'Pizza Maxwell',
    description: 'Tomate, fromage, champignons, poulet et jambon.',
    price: '70 DH',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'pi5',
    category: 'Pizzas',
    name: 'Pizza Marina',
    description: 'Tomates, fromage, calamars, thon, crevettes et olives.',
    price: '75 DH',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1200'
  },

  // VIANDES
  {
    id: 'v1',
    category: 'Viandes',
    name: 'Croustillant émincé de boeuf Mongol',
    description: 'Bœuf finement émincé, croustillant et glacé d\'une sauce parfumée.',
    price: '100 DH',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c73f49ec?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'v2',
    category: 'Viandes',
    name: 'Côte de boeuf sauce vierge',
    description: 'Belle pièce de bœuf grillée accompagnée d\'une sauce vierge aux herbes.',
    price: '110 DH',
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'v3',
    category: 'Viandes',
    name: 'Filet de boeuf au beurre cajun',
    description: 'Tendre filet de bœuf relevé par un beurre aux épices cajun.',
    price: '130 DH',
    image: 'https://images.unsplash.com/photo-1546241072-48010ad28abb?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'v4',
    category: 'Viandes',
    name: 'Souris d\'agneau confite aux fruits secs',
    description: 'Mijotée de longues heures avec une sélection de fruits secs.',
    price: '170 DH',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=1200'
  },

  // POULET
  {
    id: 'po1',
    category: 'Poulet',
    name: 'Suprême de volaille laqué moutarde et sauce à l’orange',
    description: 'Volaille tendre, glaçage moutarde et réduction d\'orange.',
    price: '98 DH',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'po2',
    category: 'Poulet',
    name: 'Poulet peri peri au houmous',
    description: 'Poulet épicé grillé servi sur un lit de houmous onctueux.',
    price: '98 DH',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'po3',
    category: 'Poulet',
    name: 'Poulet kung pao',
    description: 'Dés de poulet sautés, cacahuètes et piments pour une saveur authentique.',
    price: '98 DH',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=1200'
  },

  // POISSON
  {
    id: 'f1',
    category: 'Poissons',
    name: 'Moules marinières à la provençale',
    description: 'Moules fraîches infusées aux senteurs de Provence.',
    price: '120 DH',
    image: 'https://images.unsplash.com/photo-1534080564672-680945c73282?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'f2',
    category: 'Poissons',
    name: 'Calmar à la plancha, jus à l\'ail et au persil',
    description: 'Calmars saisis vivement, rehaussés d\'une persillade.',
    price: '120 DH',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'f3',
    category: 'Poissons',
    name: 'Filet de saint pierre au beurre blanc',
    description: 'Noblesse du Saint Pierre et douceur d\'une sauce au beurre blanc.',
    price: '140 DH',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'f4',
    category: 'Poissons',
    name: 'Roulades de Sole pochée',
    description: 'Sole délicate, purée d\'épinards et sauce safranée.',
    price: '140 DH',
    image: 'https://images.unsplash.com/photo-1534604973900-c41ab4c5e638?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'f5',
    category: 'Poissons',
    name: 'Médaillons de lotte croustillant',
    description: 'Lotte ferme en croûte légère, sauce à l\'orange.',
    price: '140 DH',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'f6',
    category: 'Poissons',
    name: 'Langouste au gingembre',
    description: 'Prestige de la langouste relevé par la vivacité du gingembre.',
    price: '300 DH',
    image: 'https://images.unsplash.com/photo-1553163147-622820be2931?auto=format&fit=crop&q=80&w=1200'
  },

  // SANDWICHES
  {
    id: 's1',
    category: 'Sandwiches',
    name: 'Hamburger',
    description: 'Bœuf grillé, pain artisanal et garniture classique.',
    price: '55 DH',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 's2',
    category: 'Sandwiches',
    name: 'Cheeseburger',
    description: 'Notre hamburger agrémenté d\'un fromage fondant de qualité.',
    price: '60 DH',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 's3',
    category: 'Sandwiches',
    name: 'Club sandwich',
    description: 'Le classique à trois étages, frais et généreux.',
    price: '55 DH',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=1200'
  },

  // DESSERTS
  {
    id: 'd1',
    category: 'Desserts',
    name: 'Omelette norvégienne',
    description: 'Spectacle glacé sous une meringue dorée.',
    price: '70 DH',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'd2',
    category: 'Desserts',
    name: 'Moelleux au chocolat',
    description: 'Cœur fondant intense et boule de glace vanille.',
    price: '70 DH',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'd3',
    category: 'Desserts',
    name: 'Crumble aux pommes',
    description: 'Pommes caramélisées sous un biscuit croquant.',
    price: '70 DH',
    image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'd4',
    category: 'Desserts',
    name: 'Cheese cake à la vanille',
    description: 'Coulis de framboise et crumble craquant.',
    price: '70 DH',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=1200'
  }
];
