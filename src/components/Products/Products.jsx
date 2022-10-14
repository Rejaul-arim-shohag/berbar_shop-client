import React, { useState } from 'react';
import "./products.css"
import { AiFillStar } from "react-icons/ai";
const Products = () => {

    const defaultData = [
        { id: 1, name: "Hair solution Product", image: "https://photos.topgear.com.bd/images/2022/04/16/Product-Card-15.png", price: "200" },
        { id: 2, name: "Hair solution Product", image: "https://photos.topgear.com.bd/images/2022/04/16/Product-Card-15.png", price: "200" },
        { id: 3, name: "Hair solution Product", image: "https://photos.topgear.com.bd/images/2022/04/16/Product-Card-15.png", price: "200" },
        { id: 4, name: "Hair solution Product", image: "https://photos.topgear.com.bd/images/2022/04/16/Product-Card-15.png", price: "200" },
        { id: 5, name: "Hair solution Product", image: "https://photos.topgear.com.bd/images/2022/04/16/Product-Card-15.png", price: "200" },
        { id: 6, name: "Hair solution Product", image: "https://photos.topgear.com.bd/images/2022/04/16/Product-Card-15.png", price: "200" },
        { id: 7, name: "Hair solution Product", image: "https://photos.topgear.com.bd/images/2022/04/16/Product-Card-15.png", price: "200" },
        { id: 8, name: "Hair solution Product", image: "https://photos.topgear.com.bd/images/2022/04/16/Product-Card-15.png", price: "200" },

    ];
    const [product, setProduct] = useState(defaultData)
    console.log(product)
    return (
        <div style={{ backgroundColor: "#F8F9FA" }}>
            <div className="container">
                <h5 className="text-center text-uppercase" style={{ fontWeight: "700" }}>Products </h5>
                <h1 className="text-center text-uppercase" style={{ fontWeight: "700" }}>Our Trending Products </h1>

                <div className="row">
                    {
                        product.map((pd, index) => {
                            return (
                                <div className="col-md-3 col-lg-3 col-sm-6 col-6 py-2 px-2">
                                    <div>
                                        <div className="card" style={{border:"1px solid #dadce3"}}>
                                            <div className="">
                                                <img classNmae="card-img-top" style={{ width: "100%" }} src={pd.image} alt="Card image cap" />
                                            </div>
                                            <div className="card-body">
                                                <h5 style={{ fontWeight: "700" }}>TK :{pd.price}.00</h5>
                                                <p>Flamingo Octane Booster (300ml)</p>
                                                <p style={{color:"#D9165F"}}>
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                </p>
                                                <button className="addToCartBtn">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;