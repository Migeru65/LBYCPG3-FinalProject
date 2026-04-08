import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, Utensils, History, User, Info, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { to: '/', label: 'Dashboard', icon: Activity },
    { to: '/log', label: 'Log Food', icon: Utensils },
    { to: '/history', label: 'History', icon: History },
    { to: '/profile', label: 'Profile', icon: User },
    { to: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-white">
              <Activity size={20} />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-gray-900">
              Lakas
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    )
                  }
                >
                  <link.icon size={16} />
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-gray-200"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-colors',
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    )
                  }
                >
                  <link.icon size={20} />
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
