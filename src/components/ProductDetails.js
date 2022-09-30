import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);

    var url = "https://fakestoreapi.com/products/" + id;

    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(
                (result) => {
                    console.log(result);
                    setAllProducts(result);
                    setIsLoading(false);
                }
            )
    }, [isLoading]);


    return (
        
        <section className='main'>
           {/*  write new component here for display product details */}

           <div className='dav1'>
                <img className='emage' src={allProducts.image} style={{width : "100px"}} />
            </div>

        <div className='dav2'>
            <h1>Details of product {id}</h1>
            <div>title : {allProducts.title}</div>
            <div>description : {allProducts.description}</div>
            <div>price : {allProducts.price}</div>
            <div>category : {allProducts.category}</div>
        </div>
        
        </section>
    )
}
