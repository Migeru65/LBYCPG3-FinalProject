import React, { createContext, useContext, useState, useEffect } from 'react';

export interface FoodEntry {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  date: string; // ISO string
}

export interface UserGoals {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface AppState {
  entries: FoodEntry[];
  goals: UserGoals;
  addEntry: (entry: Omit<FoodEntry, 'id'>) => void;
  deleteEntry: (id: string) => void;
  updateGoals: (goals: UserGoals) => void;
}

const defaultGoals: UserGoals = {
  calories: 2000,
  protein: 150,
  carbs: 200,
  fat: 65,
};

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [entries, setEntries] = useState<FoodEntry[]>(() => {
    const saved = localStorage.getItem('lakas_entries');
    return saved ? JSON.parse(saved) : [];
  });

  const [goals, setGoals] = useState<UserGoals>(() => {
    const saved = localStorage.getItem('lakas_goals');
    return saved ? JSON.parse(saved) : defaultGoals;
  });

  useEffect(() => {
    localStorage.setItem('lakas_entries', JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    localStorage.setItem('lakas_goals', JSON.stringify(goals));
  }, [goals]);

  const addEntry = (entry: Omit<FoodEntry, 'id'>) => {
    const newEntry = { ...entry, id: crypto.randomUUID() };
    setEntries((prev) => [newEntry, ...prev]);
  };

  const deleteEntry = (id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  };

  const updateGoals = (newGoals: UserGoals) => {
    setGoals(newGoals);
  };

  return (
    <AppContext.Provider value={{ entries, goals, addEntry, deleteEntry, updateGoals }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppStore() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppStore must be used within an AppProvider');
  }
  return context;
}
