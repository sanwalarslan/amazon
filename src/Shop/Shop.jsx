/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from 'react';
// import Data from '../products.json';
import PageHeader from '../Components/PageHeader'
import Footer from '../Footer/Footer';
import ProductsCard from './ProductsCard';
const showResult = "showing 01-12 out of 155 Results of products"
const Shop = () => {
    // const [GridList, setGridList] = useState(true);
    // const [products, setproducts] = useState(Data);
    return (
        <div>
            <PageHeader />
            <div className='shop-page padding-tb'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResult}</p>
                                    {/* <div className={'product-view-mode  $ {GridList ? "gridActive" : "listActive}'}>
                                        <a className='grid' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>
                                    </div> */}
                                </div>
                                <div>
                                    <ProductsCard/>
                                    <Footer/>
                                </div>
                            </article>

                        </div>
                        <div className="col-lg-4 col-12">right side</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop