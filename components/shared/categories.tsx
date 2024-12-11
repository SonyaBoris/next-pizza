'use client'

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { FC } from "react";

interface Props {
  className?: string;
}

const cats = [
  {
    id: 1,
    name: "Пиццы",
  },
  {
    id: 2,
    name: "Комбо",
  }
]


export const Categories: FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        cats.map(({ name, id }, index) =>
          <a className={cn('flex items-center font-bold rounded-2xl h-11 px-5',
            categoryActiveId === id && "bg-white shadow-md shadow-gray-200 text-primary"
          )}
            href={`/#${name}`}
            key={index}>
            <button>{name}</button>
          </a>
        )
      }
    </div>
  );
}
