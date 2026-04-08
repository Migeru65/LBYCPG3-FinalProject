export interface FoodItem {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  category: 'Fast Food' | 'Supermarket' | 'Common PH';
  serving: string;
}

export const foodDatabase: FoodItem[] = [
  // Fast Food - Jollibee
  { name: 'Jollibee Chickenjoy (1 pc)', calories: 320, protein: 18, carbs: 15, fat: 21, category: 'Fast Food', serving: '1 piece' },
  { name: 'Jollibee Jolly Spaghetti', calories: 400, protein: 12, carbs: 60, fat: 12, category: 'Fast Food', serving: '1 serving' },
  { name: 'Jollibee Yumburger', calories: 250, protein: 10, carbs: 30, fat: 10, category: 'Fast Food', serving: '1 burger' },
  { name: 'Jollibee Burger Steak (1 pc w/ Rice)', calories: 350, protein: 12, carbs: 45, fat: 14, category: 'Fast Food', serving: '1 serving' },
  
  // Fast Food - McDonald's PH
  { name: 'McDonald\'s Fried Chicken (1 pc)', calories: 300, protein: 17, carbs: 14, fat: 20, category: 'Fast Food', serving: '1 piece' },
  { name: 'McDonald\'s McSpaghetti', calories: 380, protein: 11, carbs: 55, fat: 10, category: 'Fast Food', serving: '1 serving' },
  { name: 'McDonald\'s Cheeseburger', calories: 300, protein: 15, carbs: 33, fat: 12, category: 'Fast Food', serving: '1 burger' },
  
  // Fast Food - Others
  { name: 'Chowking Chao Fan', calories: 600, protein: 15, carbs: 85, fat: 22, category: 'Fast Food', serving: '1 serving' },
  { name: 'Mang Inasal Pecho (Chicken Only)', calories: 450, protein: 45, carbs: 10, fat: 25, category: 'Fast Food', serving: '1 piece' },
  
  // Common PH Meals & Staples
  { name: 'White Rice (Cooked)', calories: 200, protein: 4, carbs: 45, fat: 0, category: 'Common PH', serving: '1 cup (150g)' },
  { name: 'Garlic Rice (Sinangag)', calories: 250, protein: 5, carbs: 45, fat: 5, category: 'Common PH', serving: '1 cup' },
  { name: 'Pandesal', calories: 85, protein: 2, carbs: 15, fat: 2, category: 'Common PH', serving: '1 piece (30g)' },
  { name: 'Taho (with sago & arnibal)', calories: 150, protein: 5, carbs: 30, fat: 2, category: 'Common PH', serving: '1 cup' },
  { name: 'Pork Adobo', calories: 350, protein: 20, carbs: 10, fat: 25, category: 'Common PH', serving: '1 serving (150g)' },
  { name: 'Sinigang na Baboy', calories: 280, protein: 18, carbs: 12, fat: 18, category: 'Common PH', serving: '1 bowl' },
  
  // Supermarket / Raw Ingredients
  { name: 'Chicken Breast (Raw)', calories: 120, protein: 22, carbs: 0, fat: 3, category: 'Supermarket', serving: '100g' },
  { name: 'Chicken Thigh (Raw)', calories: 177, protein: 17, carbs: 0, fat: 12, category: 'Supermarket', serving: '100g' },
  { name: 'Egg (Large, Boiled/Raw)', calories: 70, protein: 6, carbs: 0, fat: 5, category: 'Supermarket', serving: '1 piece (50g)' },
  { name: 'Egg (Fried in Oil)', calories: 90, protein: 6, carbs: 0, fat: 7, category: 'Supermarket', serving: '1 piece' },
  { name: 'Pork Belly / Liempo (Raw)', calories: 518, protein: 9, carbs: 0, fat: 53, category: 'Supermarket', serving: '100g' },
  { name: 'Beef Sirloin (Raw)', calories: 244, protein: 26, carbs: 0, fat: 15, category: 'Supermarket', serving: '100g' },
  { name: 'Canned Tuna in Water', calories: 90, protein: 20, carbs: 0, fat: 1, category: 'Supermarket', serving: '100g' },
  { name: 'Century Tuna Flakes in Oil', calories: 180, protein: 14, carbs: 2, fat: 13, category: 'Supermarket', serving: '1 can (155g)' },
  { name: 'Oats (Rolled/Quick, Dry)', calories: 150, protein: 5, carbs: 27, fat: 3, category: 'Supermarket', serving: '1/2 cup (40g)' },
  { name: 'Banana (Lacatan/Latundan)', calories: 90, protein: 1, carbs: 23, fat: 0, category: 'Supermarket', serving: '1 medium' },
];
