import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Save } from 'lucide-react';

export function Profile() {
  const { goals, updateGoals } = useAppStore();
  const [formData, setFormData] = useState({
    calories: goals.calories.toString(),
    protein: goals.protein.toString(),
    carbs: goals.carbs.toString(),
    fat: goals.fat.toString(),
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateGoals({
      calories: Number(formData.calories) || 2000,
      protein: Number(formData.protein) || 150,
      carbs: Number(formData.carbs) || 200,
      fat: Number(formData.fat) || 65,
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Profile & Goals</h1>
        <p className="text-gray-500">Set your daily macro targets.</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Daily Targets</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Daily Calories (kcal)"
              name="calories"
              type="number"
              value={formData.calories}
              onChange={handleChange}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Protein Goal (g)"
                name="protein"
                type="number"
                value={formData.protein}
                onChange={handleChange}
              />
              <Input
                label="Carbs Goal (g)"
                name="carbs"
                type="number"
                value={formData.carbs}
                onChange={handleChange}
              />
              <Input
                label="Fat Goal (g)"
                name="fat"
                type="number"
                value={formData.fat}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-4">
              <Button type="submit">
                <Save className="mr-2 h-4 w-4" /> Save Goals
              </Button>
              {isSaved && (
                <span className="text-sm text-green-600 font-medium">Goals saved successfully!</span>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
