import React from 'react';
import { Link } from 'react-router-dom';
import DSLRCameraImage from '../assets/images/category/01.jpg';
import ShoesImage from '../assets/images/category/02.jpg';
import PhotographyImage from '../assets/images/category/03.jpg';
import FormalDressImage from '../assets/images/category/04.jpg';
import ColorfulBagsImage from '../assets/images/category/05.jpg';
import HomeDecorImage from '../assets/images/category/06.jpg';

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
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
    imgUrl: HomeDecorImage,
    imgAlt: 'Home Decor',
    iconName: 'icofont-brand-windows',
    title: 'Home Decor',
  },
];

const HomeCategory = () => {
  return (
    <div className='category-section style-4 padding-tb'>
      <div className='container'>
        {/* Section header */}
        <div className='section-header text-center'>
          <span className='subtitle'>{subTitle}</span>
          <h2 className='title'>{title}</h2>
        </div>
        {/* Section card */}
        <div className='section-wrapper'>
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
            {categoryList.map((val, i) => (
              <div key={i} className='col'>
                <Link to="/shop" className='category-item'>
                  <div className='category-inner'>
                    <div>
                      <img src={val.imgUrl} alt={val.imgAlt} />
                    </div>
                    {/* content likho ga yaha */}
                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={val.iconName}></i>
                      </div>
                         <Link to="/shop"><h6>{val.title}</h6></Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className='text-center mt-5'>
          <Link to="/shop" className='btn btn-primary lab-btn'><span>{btnText}</span></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
