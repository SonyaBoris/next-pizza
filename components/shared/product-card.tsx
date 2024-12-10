import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
  id: number;
  name: string;

  imageUrl: string;
  className?: string;
}

export const ProductCard: FC<Props> = ({ className, id, name,  imageUrl }) => {
  return (
    <div className={cn('', className)}>
      <Link href="/product/1">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <Image src={imageUrl} alt="Logo" width={35} height={35} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          сыр
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>7 ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  )
};