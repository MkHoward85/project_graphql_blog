import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">類別</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          {/* <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}> */}
          <span
            class={`flex flex-wrap ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded-xl cursor-pointer bg-purple-500 text-gray-200 hover:bg-purple-600 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100`}>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
