import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { format, parseISO } from 'date-fns';
import { Trash2, Search } from 'lucide-react';

export function History() {
  const { entries, deleteEntry } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEntries = entries.filter(entry => 
    entry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group by date
  const groupedEntries = filteredEntries.reduce((acc, entry) => {
    const date = entry.date.split('T')[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(entry);
    return acc;
  }, {} as Record<string, typeof entries>);

  const sortedDates = Object.keys(groupedEntries).sort((a, b) => b.localeCompare(a));

  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">History</h1>
          <p className="text-gray-500">View and manage your past meals.</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search meals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </header>

      {sortedDates.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-gray-500">No meals found.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {sortedDates.map(date => (
            <Card key={date}>
              <CardHeader className="bg-gray-50/50 border-b border-gray-100">
                <CardTitle className="text-base">
                  {format(parseISO(date), 'EEEE, MMMM do, yyyy')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {groupedEntries[date].map(entry => (
                    <div key={entry.id} className="flex items-center justify-between p-4 hover:bg-gray-50/50 transition-colors">
                      <div>
                        <p className="font-medium text-gray-900">{entry.name}</p>
                        <div className="flex gap-3 text-sm text-gray-500 mt-1">
                          <span>{entry.calories} kcal</span>
                          <span>•</span>
                          <span>{entry.protein}g P</span>
                          <span>•</span>
                          <span>{entry.carbs}g C</span>
                          <span>•</span>
                          <span>{entry.fat}g F</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={() => deleteEntry(entry.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
