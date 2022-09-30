import React, { useState, useEffect } from 'react'
import "./styles.css";
import OneProductCard from './OneProductCard';
import { useParams, useLocation } from 'react-router-dom';


export default function Home() {
    const { pathname } = useLocation();
    //console.log(pathname);

    const [isLoading, setIsLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);

    var url = "https://fakestoreapi.com/products";

    let { catName } = useParams();

    if (catName == undefined) {
        var url = "https://fakestoreapi.com/products";
    }
    else {
        var url = "https://fakestoreapi.com/products/category/" + catName;
    }

    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(
                (result) => {
                    //console.log(result);
                    setAllProducts(result);
                    setIsLoading(false);
                }
            )
    }, [isLoading, pathname]);


    if (isLoading) {
        return (
            <div className='loadingContainer'>
                <div>Is Loading</div>
                <div>
                    <img src={require('./loading.gif')} />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='allProductsContainer'>
                {
                    allProducts.map(product => (
                        <OneProductCard
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            id={product.id}
                            key={product.id}
                        />
                    ))
                }
            </div>
        );
    }

}
