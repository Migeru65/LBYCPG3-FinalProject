import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max: number;
  label: string;
  colorClass?: string;
  showValues?: boolean;
  unit?: string;
}

export function ProgressBar({ 
  value, 
  max, 
  label, 
  colorClass = "bg-primary-500",
  showValues = true,
  unit = "g"
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const isOver = value > max;

  return (
    <div className="w-full">
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700">{label}</span>
        {showValues && (
          <span className="text-gray-500">
            <span className={cn("font-medium", isOver ? "text-red-500" : "text-gray-900")}>
              {Math.round(value)}
            </span>
            <span className="mx-0.5">/</span>
            {max}{unit}
          </span>
        )}
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "h-full rounded-full transition-colors duration-300",
            isOver ? "bg-red-500" : colorClass
          )}
        />
      </div>
    </div>
  );
}
