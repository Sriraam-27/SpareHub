import { Category } from '../types';
import brake from '../pages/assets/brakee.jpg'
import trans from '../pages/assets/trans.jpg'
import engine from '../pages/assets/fuel_injector.jpg'
export const categories: Category[] = [
  {
    id: 'engine',
    name: 'Engine Parts',
    description: 'Essential components for your bike\'s heart',
    imageUrl: engine ,
  },
  {
    id: 'brakes',
    name: 'Brakes',
    description: 'Safety first with quality brake parts',
    imageUrl: brake,
  },
  {
    id: 'transmission',
    name: 'Transmission',
    description: 'Smooth shifting with our transmission parts',
    imageUrl: trans,
  },
];