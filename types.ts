
import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Entrées' | 'Viandes' | 'Poissons' | 'Pizzas' | 'Desserts' | 'Boissons';
  image: string;
  ingredients?: string[];
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export type PageSide = 'front' | 'back';

export interface FlipPageData {
  id: number;
  title: string;
  content: React.ReactNode;
}