import React from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import { ProgressBar } from '@/components/ProgressBar';
import { format } from 'date-fns';
import { Flame, Beef, Wheat, Droplet } from 'lucide-react';

export function Dashboard() {
  const { entries, goals } = useAppStore();
  
  const today = new Date().toISOString().split('T')[0];
  const todayEntries = entries.filter(e => e.date.startsWith(today));

  const totals = todayEntries.reduce(
    (acc, entry) => ({
      calories: acc.calories + entry.calories,
      protein: acc.protein + entry.protein,
      carbs: acc.carbs + entry.carbs,
      fat: acc.fat + entry.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Today's Overview</h1>
        <p className="text-gray-500">{format(new Date(), 'EEEE, MMMM do, yyyy')}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calories</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(totals.calories)} kcal</div>
            <p className="text-xs text-gray-500 mb-4">of {goals.calories} kcal goal</p>
            <ProgressBar value={totals.calories} max={goals.calories} label="" showValues={false} colorClass="bg-orange-500" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Protein</CardTitle>
            <Beef className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(totals.protein)}g</div>
            <p className="text-xs text-gray-500 mb-4">of {goals.protein}g goal</p>
            <ProgressBar value={totals.protein} max={goals.protein} label="" showValues={false} colorClass="bg-red-500" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carbs</CardTitle>
            <Wheat className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(totals.carbs)}g</div>
            <p className="text-xs text-gray-500 mb-4">of {goals.carbs}g goal</p>
            <ProgressBar value={totals.carbs} max={goals.carbs} label="" showValues={false} colorClass="bg-amber-500" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fat</CardTitle>
            <Droplet className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(totals.fat)}g</div>
            <p className="text-xs text-gray-500 mb-4">of {goals.fat}g goal</p>
            <ProgressBar value={totals.fat} max={goals.fat} label="" showValues={false} colorClass="bg-yellow-500" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Meals</CardTitle>
        </CardHeader>
        <CardContent>
          {todayEntries.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No meals logged today yet.</p>
          ) : (
            <div className="space-y-4">
              {todayEntries.map((entry) => (
                <div key={entry.id} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-gray-900">{entry.name}</p>
                    <p className="text-sm text-gray-500">
                      {entry.protein}g P • {entry.carbs}g C • {entry.fat}g F
                    </p>
                  </div>
                  <div className="font-semibold text-gray-900">
                    {entry.calories} kcal
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
