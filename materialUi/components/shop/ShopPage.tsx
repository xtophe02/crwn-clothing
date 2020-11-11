import React from 'react';
import { ShopCollection } from './ShopCollection';

export const ShopPage = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <ShopCollection
          key={item.id}
          title={item.title}
          items={item.items.slice(0, 4)}
        />
      ))}
    </div>
  );
};
