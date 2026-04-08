import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import { Activity } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <header className="text-center py-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-500 text-white mb-4 shadow-lg shadow-primary-500/30">
          <Activity size={32} />
        </div>
        <h1 className="text-4xl font-display font-bold tracking-tight text-gray-900 mb-2">Lakas</h1>
        <p className="text-xl text-gray-500">The Local Macro Tracker</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>About the Project</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Lakas is a modern, responsive web application designed to help you track your daily nutritional intake with ease.
            </p>
            <p>
              Built with React, Tailwind CSS, and Framer Motion, it features a clean interface, interactive components, and local data persistence.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                Responsive Grid System
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                Interactive Modals
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                Custom Form Controls
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                Dynamic Progress Bars
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                Sticky Navbar
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}