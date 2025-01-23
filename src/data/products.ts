import { Product } from '../types';
import piston from '../pages/assets/piston kit.jpg' 
import oilfilter from '../pages/assets/oil filter.jpg'
import clutchplate from '../pages/assets/clutch plate.jpg'
import lever from '../pages/assets/lever.jpg'
import brakerotor from '../pages/assets/brake rotor.jpg'
export const products: Product[] = [
  {
    id: '1',
    name: 'High-Performance Piston Kit',
    description: 'Complete piston kit with rings and pin for enhanced engine performance',
    price: 3499.99,
    category: 'engine',
    imageUrl: piston,
    stock: 15,
  },
  {
    id: '2',
    name: 'Premium Engine Oil Filter',
    description: 'High-quality oil filter for optimal engine protection',
    price: 299.99,
    category: 'engine',
    imageUrl: oilfilter,
    stock: 50,
  },
  {
    id: '3',
    name: 'Ceramic Brake Pads Set',
    description: 'High-performance ceramic brake pads for superior stopping power',
    price: 1299.99,
    category: 'brakes',
    imageUrl: clutchplate,
    stock: 30,
  },
  {
    id: '4',
    name: 'Brake Disc Rotor',
    description: 'Premium quality brake rotor for smooth and reliable braking',
    price: 1899.99,
    category: 'brakes',
    imageUrl: brakerotor,
    stock: 20,
  },
  {
    id: '5',
    name: 'Clutch Plate Kit',
    description: 'Complete clutch plate set for smooth gear transitions',
    price: 2499.99,
    category: 'transmission',
    imageUrl: clutchplate,
    stock: 25,
  },
  {
    id: '6',
    name: 'Gear Shift Lever',
    description: 'Durable gear shift lever for precise gear changes',
    price: 799.99,
    category: 'transmission',
    imageUrl: lever,
    stock: 40,
  },
];