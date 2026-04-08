import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { Plus, CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { foodDatabase, FoodItem } from '@/lib/foodDatabase';

export function LogFood() {
  const { addEntry } = useAppStore();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Food name is required';
    if (!formData.calories || isNaN(Number(formData.calories))) newErrors.calories = 'Valid calories required';
    if (!formData.protein || isNaN(Number(formData.protein))) newErrors.protein = 'Valid protein required';
    if (!formData.carbs || isNaN(Number(formData.carbs))) newErrors.carbs = 'Valid carbs required';
    if (!formData.fat || isNaN(Number(formData.fat))) newErrors.fat = 'Valid fat required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      addEntry({
        name: formData.name,
        calories: Number(formData.calories),
        protein: Number(formData.protein),
        carbs: Number(formData.carbs),
        fat: Number(formData.fat),
        date: new Date().toISOString(),
      });
      setIsModalOpen(true);
      setFormData({ name: '', calories: '', protein: '', carbs: '', fat: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleQuickAdd = (food: FoodItem) => {
    setFormData({
      name: food.name,
      calories: food.calories.toString(),
      protein: food.protein.toString(),
      carbs: food.carbs.toString(),
      fat: food.fat.toString(),
    });
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredFoods = foodDatabase.filter(food => 
    food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    food.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Log Food</h1>
        <p className="text-gray-500">Add a new meal to your daily tracker.</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Manual Entry Form */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Food Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Food Name"
                name="name"
                placeholder="e.g., Grilled Chicken Breast"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Calories (kcal)"
                  name="calories"
                  type="number"
                  placeholder="0"
                  value={formData.calories}
                  onChange={handleChange}
                  error={errors.calories}
                />
                <Input
                  label="Protein (g)"
                  name="protein"
                  type="number"
                  placeholder="0"
                  value={formData.protein}
                  onChange={handleChange}
                  error={errors.protein}
                />
                <Input
                  label="Carbs (g)"
                  name="carbs"
                  type="number"
                  placeholder="0"
                  value={formData.carbs}
                  onChange={handleChange}
                  error={errors.carbs}
                />
                <Input
                  label="Fat (g)"
                  name="fat"
                  type="number"
                  placeholder="0"
                  value={formData.fat}
                  onChange={handleChange}
                  error={errors.fat}
                />
              </div>

              <Button type="submit" className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Food
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Food Database / Quick Add */}
        <Card className="flex flex-col h-[600px]">
          <CardHeader className="pb-4 border-b border-gray-100">
            <CardTitle>Food Database</CardTitle>
            <p className="text-sm text-gray-500 mt-1">Search common PH fast food and ingredients.</p>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search foods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-0">
            <div className="divide-y divide-gray-100">
              {filteredFoods.length > 0 ? (
                filteredFoods.map((food, index) => (
                  <div 
                    key={index} 
                    className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-pointer"
                    onClick={() => handleQuickAdd(food)}
                  >
                    <div>
                      <p className="font-medium text-gray-900">{food.name}</p>
                      <p className="text-xs text-gray-500 mb-1">{food.serving} • {food.category}</p>
                      <div className="flex gap-2 text-xs font-medium text-gray-600">
                        <span className="text-orange-600">{food.calories} kcal</span>
                        <span>|</span>
                        <span className="text-red-600">{food.protein}g P</span>
                        <span>|</span>
                        <span className="text-amber-600">{food.carbs}g C</span>
                        <span>|</span>
                        <span className="text-yellow-600">{food.fat}g F</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-4 w-4 text-primary-600" />
                    </Button>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500">
                  No foods found matching "{searchQuery}"
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Success!"
      >
        <div className="text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900">Food Logged Successfully</h4>
            <p className="text-sm text-gray-500 mt-1">Your macros have been updated.</p>
          </div>
          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1" onClick={() => setIsModalOpen(false)}>
              Log Another
            </Button>
            <Button className="flex-1" onClick={() => navigate('/')}>
              View Dashboard
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
