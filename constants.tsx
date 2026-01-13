
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // ENTRÉES
  {
    id: 'e1',
    category: 'Entrées',
    name: 'Harira Marrakchia',
    description: 'La célèbre soupe veloutée aux senteurs de l\'Atlas : pois chiches, lentilles, céleri et bouquet d\'herbes fraîches.',
    price: '85 DH',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Pois chiches', 'Lentilles', 'Coriandre', 'Persil', 'Tomate', 'Épices']
  },
  {
    id: 'e2',
    category: 'Entrées',
    name: 'Zaalouk d\'Aubergines',
    description: 'Fines aubergines fumées et compotées à la tomate, parfumées au cumin et à l\'ail rouge.',
    price: '95 DH',
    image: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Aubergine', 'Tomate', 'Ail', 'Cumin', 'Huile d\'olive']
  },
  // VIANDES
  {
    id: 'v1',
    category: 'Viandes',
    name: 'Tajine de Bœuf aux Pruneaux',
    description: 'Jarret de bœuf de premier choix, pruneaux caramélisés, amandes frites et graines de sésame dorées.',
    price: '240 DH',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Bœuf', 'Pruneaux', 'Amandes', 'Cannelle', 'Safran']
  },
  {
    id: 'v2',
    category: 'Viandes',
    name: 'Couscous Royal "Éclat d\'Or"',
    description: 'Graines de semoule à la vapeur, agneau fondant, sept légumes de saison et oignons confits (Tfaya).',
    price: '280 DH',
    image: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Agneau', 'Semoule', 'Courgettes', 'Carottes', 'Tfaya']
  },
  // POISSONS
  {
    id: 'p1',
    category: 'Poissons',
    name: 'Tajine de Loup à la Charmoula',
    description: 'Filet de loup de mer mariné aux herbes fraîches, olives de Meslalla et citrons confits maison.',
    price: '310 DH',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Loup de mer', 'Coriandre', 'Citron confit', 'Olives', 'Piment doux']
  },
  {
    id: 'p2',
    category: 'Poissons',
    name: 'Pastilla aux Fruits de Mer',
    description: 'Feuilletage croustillant abritant un trésor de crevettes royales, calamars et poisson blanc épicé.',
    price: '290 DH',
    image: 'https://images.unsplash.com/photo-1534604973900-c41ab4c5e638?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Crevettes', 'Calamar', 'Poisson', 'Feuilles de brik', 'Champignons']
  },
  // PIZZAS (Spécialités de Pâtes)
  {
    id: 'pi1',
    category: 'Pizzas',
    name: 'Madfouna du Tafilalet',
    description: 'La célèbre "pizza berbère" farcie de viande hachée, œufs durs et amandes, cuite à l\'étouffée.',
    price: '180 DH',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Viande hachée', 'Amandes', 'Œufs', 'Oignons', 'Épices Sahariennes']
  },
  {
    id: 'pi2',
    category: 'Pizzas',
    name: 'Kefta & Mozzarella',
    description: 'Mariage entre l\'Orient et l\'Occident : kefta grillée, olives noires et fromage fondu.',
    price: '160 DH',
    image: 'https://images.unsplash.com/photo-1574129624551-06c049f6b5f3?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Kefta', 'Mozzarella', 'Tomate', 'Olives', 'Coriandre']
  },
  // DESSERTS
  {
    id: 'd1',
    category: 'Desserts',
    name: 'Jawhara (Pastilla au Lait)',
    description: 'Feuilles de pastilla croustillantes, crème légère à la fleur d\'oranger et pluie d\'amandes concassées.',
    price: '120 DH',
    image: 'https://images.unsplash.com/photo-1579372781878-670586bd75e3?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Lait', 'Fleur d\'oranger', 'Amandes', 'Sucre glace']
  },
  {
    id: 'd2',
    category: 'Desserts',
    name: 'Finesse de Pâtisseries',
    description: 'Sélection des meilleures créations : Cornes de gazelle, Briouates au miel et Chebakia.',
    price: '140 DH',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Amandes', 'Miel', 'Gomme arabique', 'Sésame']
  },
  // BOISSONS
  {
    id: 'b1',
    category: 'Boissons',
    name: 'Thé à la Menthe Royal',
    description: 'Thé vert infusé à la menthe fraîche, servi selon le rituel ancestral.',
    price: '45 DH',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Thé vert', 'Menthe fraîche', 'Sucre']
  },
  {
    id: 'b2',
    category: 'Boissons',
    name: 'Jus d\'Avocat Deluxe',
    description: 'Onctueux mélange d\'avocat, lait d\'amande et une touche de fleur d\'oranger.',
    price: '65 DH',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Avocat', 'Lait d\'amande', 'Miel']
  }
];
