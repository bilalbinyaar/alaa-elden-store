import React, { useState } from 'react';
import dummy from '../assets/products/dummy.svg';
import p_1 from '../assets/products/p-1.png';
import p_2 from '../assets/products/p-2.png';
import p_3 from '../assets/products/p-3.png';
import p_4 from '../assets/products/p-4.png';
import p_5 from '../assets/products/p-5.png';
import p_6 from '../assets/products/p-6.png';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return `${value}°C`;
}
const ShopComp = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const galleryItems = [
    { id: 1, src: p_1, category: 'categories' },
    { id: 2, src: dummy, category: 'manufacturer' },

    { id: 3, src: p_2, category: 'categories' },
    { id: 4, src: dummy, category: 'manufacturer' },

    { id: 5, src: p_3, category: 'categories' },
    { id: 6, src: dummy, category: 'manufacturer' },

    { id: 7, src: p_4, category: 'categories' },
    { id: 8, src: dummy, category: 'manufacturer' },

    { id: 9, src: p_5, category: 'categories' },
    { id: 10, src: dummy, category: 'manufacturer' },

    { id: 11, src: p_6, category: 'categories' },
    { id: 12, src: dummy, category: 'manufacturer' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="shop">
      <div className="container">
        <div className="shop-wrapper">
          <div className="search-fiters">
            <form className='filters-form'>
              <h2>Categories</h2>
                <input type="checkbox" id="cat1" name="cat1" value="Tools"/>
                <label for="cat1"> Tools</label><br/>
                <input type="checkbox" id="cat2" name="cat2" value="Parts"/>
                <label for="cat2"> Parts</label><br/>
                <input type="checkbox" id="cat3" name="cat3" value="Hardware"/>
                <label for="cat3"> Hardware</label><br/><br/>
              <h2>Manufacturer</h2>
                <input type="checkbox" id="manu1" name="manu1" value="Apple"/>
                <label for="manu1"> Apple</label><br/>
                <input type="checkbox" id="manu2" name="manu2" value="Samsung"/>
                <label for="manu2"> Samsung</label><br/>
                <input type="checkbox" id="manu3" name="manu3" value="Techno"/>
                <label for="manu3"> Techno</label><br/>
                <input type="checkbox" id="manu4" name="manu4" value="Realme"/>
                
                
                <label for="manu4"> Realme</label><br/><br/>
              <h2>Select Price</h2>
                
                <Box sx={{ width: 200 }}>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={110}
                  />
                </Box>
                <input type="submit" value="Search"/>
                
                        </form>
          </div>
          <div className="fiterable-shop">
            <div className="categories">
              <button
                className={selectedCategory === 'all' ? 'active' : ''}
                onClick={() => handleCategoryChange('all')}
              >
                All
              </button>
              <button
                className={selectedCategory === 'categories' ? 'active' : ''}
                onClick={() => handleCategoryChange('categories')}
              >
                Categories
              </button>
              <button
                className={selectedCategory === 'manufacturer' ? 'active' : ''}
                onClick={() => handleCategoryChange('manufacturer')}
              >
                Manufacturer
              </button>
            </div>
            <div className="gallery">
              {filteredItems.map((item) => (
                <div key={item.id} className="our-products-item mr-products">
                  <Link to="/product">
                    <img src={item.src} alt="product" />
                  </Link>
                  <button>Add to cart</button>
                  <h3>
                    <Link to="/product">Lorem ipsum dolor</Link>
                  </h3>
                  <div className="price-rating">
                    <div className="product-price">
                      <p>$100</p>
                    </div>
                    <div className="ratings">
                      <span>
                        <AiFillStar className="rating-stars" />
                      </span>
                      <span>
                        <AiFillStar className="rating-stars" />
                      </span>
                      <span>
                        <AiFillStar className="rating-stars" />
                      </span>
                      <span>
                        <AiFillStar className="rating-stars" />
                      </span>
                      <span>
                        <AiFillStar className="rating-stars" />
                      </span>
                    </div>
                    <div className="number-of-ratings">
                      <p>(1000)</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopComp;
