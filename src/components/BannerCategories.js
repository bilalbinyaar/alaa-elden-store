import React, { useState } from 'react';

const BannerCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: 'Tools',
      submenus: ['Submenu 1-1', 'Submenu 1-2', 'Submenu 1-3'],
    },
    {
      id: 2,
      name: 'Parts',
      submenus: ['Submenu 2-1', 'Submenu 2-2', 'Submenu 2-3'],
    },
    {
      id: 3,
      name: 'Hardware',
      submenus: ['Submenu 3-1', 'Submenu 3-2', 'Submenu 3-3'],
    },
  ];

  const handleCategoryMouseEnter = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleCategoryMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className="banner-categories">
      <h2>Categories</h2>
      <div className="sidebar">
        <ul className="category-list">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`category ${
                activeCategory === category.id ? 'active' : ''
              }`}
              onMouseEnter={() => handleCategoryMouseEnter(category.id)}
              onMouseLeave={handleCategoryMouseLeave}
            >
              {category.name}
              {activeCategory === category.id && (
                <ul className="submenu">
                  {category.submenus.map((submenu, index) => (
                    <li key={index}>{submenu}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BannerCategories;
