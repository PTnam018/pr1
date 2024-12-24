import React, { useState } from 'react'
import img1 from './image/img1.jpeg'
import './product.css'



export default function HomePage () {
    return (
        
        <>
            <section className="product">
                <div className="container" >
                    <div className="row" >                       
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item" >
                                    <div className="card" >
                                        <img src={img1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title"> Card Title </h5>
                                            <p className="card-text"> adfadfwejfsdasdfasdfasfasdfasdfasdfsdfasfshaf</p>
                                        </div>
                                    </div>
                          
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    )
}