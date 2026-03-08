export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  price: number;
  material: string;
  dimensions: string;
  finish: string;
  image: string;
  gallery: string[];
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: 'monte-travertino',
    name: 'Monte Travertino',
    subtitle: 'Lavabo artesanal para espacios cálidos y sobrios.',
    category: 'Sobreponer',
    price: 2890,
    material: 'Concreto de alto desempeño',
    dimensions: '58 x 38 x 15 cm',
    finish: 'Caliza mate',
    image: '/images/products/monte-travertino-2.jpeg',
    gallery: [
      '/images/products/monte-travertino-1.jpeg',
      '/images/products/monte-travertino-3.jpeg',
      '/images/products/monte-travertino-4.jpeg'
    ],
    description: 'Diseño contemporáneo para proyectos residenciales y Alojamiento.',
    featured: true,
  },
  {
    slug: 'siena-mineral',
    name: 'Siena Mineral',
    subtitle: 'Geometría suave con presencia arquitectónica.',
    category: 'Sobreponer',
    price: 2490,
    material: 'Compuesto mineral premium',
    dimensions: '62 x 40 x 14 cm',
    finish: 'Piedra negra satinada',
    image: '/images/products/siena-mineral-1.jpeg',
    gallery: [
      '/images/products/siena-mineral-2.jpeg',
      '/images/products/siena-mineral-3.jpeg',
      '/images/products/siena-mineral-4.jpeg'
    ],
    description: 'Una pieza diseñada para baños con lenguaje minimalista y acabados clásicos.',
    featured: true,
  },
  {
    slug: 'luna-terra',
    name: 'Luna Terra',
    subtitle: 'Volumen orgánico con carácter atemporal.',
    category: 'Sobreponer',
    price: 5990,
    material: 'Concreto de alta densidad',
    dimensions: '55 x 37 x 16 cm',
    finish: 'Blanco hueso mate',
    image: '/images/products/luna-terra-1.jpeg',
    gallery: [
      '/images/products/luna-terra-2.jpeg',
      '/images/products/luna-terra-3.jpeg',
      '/images/products/luna-terra-4.jpeg'
    ],
    description: 'Ideal para interiores sobrios que buscan equilibrio entre función y diseño.',
  },
  {
    slug: 'bruma-stone',
    name: 'Bruma Stone',
    subtitle: 'Textura sutil y presencia sólida.',
    category: 'Sobreponer',
    price: 8190,
    material: 'Piedra compuesta',
    dimensions: '64 x 42 x 13 cm',
    finish: 'Gris cálido mate',
    image: '/images/products/bruma-stone-1.jpeg',
    gallery: [
      '/images/products/bruma-stone-2.jpeg',
      '/images/products/bruma-stone-3.jpeg',
      '/images/products/bruma-stone-4.jpeg'
    ],
    description: 'Pensado para proyectos que requieren una pieza protagonista con estética refinada.',
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
