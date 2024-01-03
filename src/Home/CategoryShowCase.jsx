/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react';
import pic from "../assets/images/shape-img/icon/circle.png";
import pic2 from "../assets/images/shape-img/icon/box.png";
import Nike from "../assets/images/categoryTab/01.jpg";
import phones from "../assets/images/categoryTab/03.jpg";
import bags from "../assets/images/categoryTab/04.jpg";
import shoes from "../assets/images/categoryTab/05.jpg";
import beauty from "../assets/images/categoryTab/06.jpg";
import shoes1 from "../assets/images/categoryTab/07.jpg";
import phones2 from "../assets/images/categoryTab/08.jpg";
import phones3 from "../assets/images/categoryTab/09.jpg";
import Ratting from '../Components/Ratting';
import { Link } from 'react-router-dom';

const title = "Our Products";

const ProductData = [
{
imgUrl: Nike,
cate: 'Shoes',
title: 'Nike Premier X',
author: 'assets/images/course/author/01.jpg',
brand: 'Nike',
price: '$199.00',
id: 1,
},
{
imgUrl:bags ,
cate: 'Bags',
title: 'Asthetic Bags',
author: 'assets/images/course/author/02.jpg',
brand: 'D&J Bags',
price: '$199.00',
id: 2,
},
{
imgUrl: phones3,
cate: 'Phones',
title: 'iPhone 12',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Apple',
price: '$199.00',
id: 3,
},
{
imgUrl:bags ,
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: 'assets/images/course/author/04.jpg',
brand: 'Gucci',
price: '$199.00',
id: 4,
},
{
imgUrl: shoes1,
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
price: '$199.00',
id: 5,
},
{
imgUrl:beauty,
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
price: '$199.00',
id: 6,
},
{
imgUrl: bags,
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: 'assets/images/course/author/01.jpg',
brand: 'Gucci',
price: '$199.00',
id: 7,
},
{
imgUrl:shoes ,
cate: 'Shoes',
title: 'Casual Sneakers',
author: 'assets/images/course/author/02.jpg',
brand: 'Bata',
price: '$199.00',
id: 8,
},
]

const CategoryShowCase = () => {
  const[items ,setItems]= useState(ProductData);
    const filterItem =(categItem)=>{
   const updateItem = ProductData.filter((curElem)=>{
    return curElem.cate === categItem;
   
});
setItems(updateItem)
};


  
  return (
    <div className='course-section style-3 padding-tb'> 
    <div className='course-shape one'><img src={pic} alt="" /></div>
    <div className='course-shape two'><img src={pic2} alt="" /></div>
    <div className="container">
      <div className="section-header">
        <h2 className='title'>{title}</h2>
        <div className='course-filter-group'>
          <ul className='lab-ul'>
            <li onClick={() => setItems(ProductData)}>All</li>
            <li onClick={() => filterItem("Shoes")}>Shoes</li>
            <li onClick={() => filterItem("Bags")}>Bags</li>
            <li onClick={() => filterItem("Phones")}>Phones</li>
            <li onClick={() => filterItem("Beauty")}>Beauty</li>
          </ul>
        </div>
      </div>
      <div className='section-wrapper row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
  {items.map((product) => (
    <div key={product.id} className='col'>
      <div className="course-item style-4">
        <div className='course-inner'>
          <div className='course-thumb'>
            {/* Add your content here based on the product data */}
            <img src={product.imgUrl} alt={product.title} />
            {/* Add more content as needed */}
            <div className='course-category'>
<div className='course-cate'>
<a href='#'>{product.cate}</a>
  </div>
                  <div className='course-review'>
                     <Ratting/>

                    </div>
              </div>
          </div>
           
           <div className="course-content">
            <Link to={'/shop/${product.id}'}>{product.title}</Link>
          <div className="course-footer">
            <div className="course-author">
              <Link to="/" className='ca-name'></Link>
            </div>
          </div>
          <div className="course-content">
            <Link to={'/shop/${product.id}'}><h6>{product.title}</h6></Link>
          <div className="course-footer">
            <div className="course-author">
              <Link to="/" className='ca-name'>{product.brand}</Link>
            </div>
            <div className='course-price'>
              {product.price}
          </div>
          
           </div>

        </div>
           </div>

        </div>
      </div>
    </div>
  ))}
</div>
      
    </div>
  </div>
  


  )
}

export default CategoryShowCase