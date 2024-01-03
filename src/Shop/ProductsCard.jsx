/* eslint-disable array-callback-return */
import {Link}from 'react';
import React from 'react';
import DSLRCameraImage from '../assets/images/category/01.jpg';
import ShoesImage from '../assets/images/category/02.jpg';
import PhotographyImage from '../assets/images/category/03.jpg';
import FormalDressImage from '../assets/images/category/04.jpg';
import ColorfulBagsImage from '../assets/images/category/05.jpg';
import HomeDecorImage from '../assets/images/category/06.jpg';
import Nike from "../assets/images/categoryTab/01.jpg";
import phones from "../assets/images/categoryTab/03.jpg";
import bags from "../assets/images/categoryTab/04.jpg";
import shoes from "../assets/images/categoryTab/05.jpg";
import beauty from "../assets/images/categoryTab/06.jpg";
import shoes1 from "../assets/images/categoryTab/07.jpg";
import phones2 from "../assets/images/categoryTab/08.jpg";
import phones3 from "../assets/images/categoryTab/09.jpg";
import Ratting from '../Components/Ratting';
 const arslan = [
  {
    imgUrl: DSLRCameraImage,
    imgAlt: 'DSLR Camera',
    iconName: 'icofont-brand-windows',
    title: 'DSLR Camera',
  },
  {
    imgUrl: ShoesImage,
    imgAlt: 'Shoes',
    iconName: 'icofont-brand-windows',
    title: 'Shoes',
  },
  {
    imgUrl: PhotographyImage,
    imgAlt: 'Photography',
    iconName: 'icofont-brand-windows',
    title: 'Photography',
  },
  {
    imgUrl: FormalDressImage,
    imgAlt: 'Formal Dress',
    iconName: 'icofont-brand-windows',
    title: 'Formal Dress',
  },
  {
    imgUrl: ColorfulBagsImage,
    imgAlt: 'Colorful Bags',
    iconName: 'icofont-brand-windows',
    title: 'Colorful Bags',
  },
  {
    imgUrl: phones,
    imgAlt: 'Colorful Bags',
    iconName: 'icofont-brand-windows',
    title: 'Colorful Bags',
  },
  {
    imgUrl: phones2,
    imgAlt: 'Colorful Bags',
    iconName: 'icofont-brand-windows',
    title: 'Colorful Bags',
  },
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
  {
    imgUrl: HomeDecorImage,
    imgAlt: 'Home Decor',
    iconName: 'icofont-brand-windows',
    title: 'Home Decor',
  },];

  
 const ProductsCard = () => {
   return (
    <div className='shop-product-wrap row justify-content-center'>
    <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
      {arslan.map((val, i) => (
        <div key={i} className='col-lg-4 col-md-6 col-12'>
             <div className='product-item'>
              <div className='product-thumb'>
              <div className='pro-thumb'>
                <img src={val.imgUrl} alt={val.imgAlt} />
             {/* <div className='product-action-link'>
              <i className='icofont-eye'></i>
              <i className='icofont-heart'></i>
            
             </div> */}
              </div>
              </div>
              {/* content likho ga yaha */}
             </div>
              <Ratting/>
              <p>{val.title}</p>
              <a href='#'>{val.cate}</a>
           
         </div>
      ))}
    </div>
  </div>   )
 }
 
 export default ProductsCard
