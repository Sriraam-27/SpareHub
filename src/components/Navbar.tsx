import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { state } = useCart();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">SpareHub</span>
          </Link>

          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search spare parts..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/admin" className="text-gray-600 hover:text-blue-600">
              <User size={24} />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-blue-600 relative">
              <ShoppingCart size={24} />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {state.items.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};