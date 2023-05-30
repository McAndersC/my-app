'use client'

import Image from 'next/image';
import {useEffect, useState} from 'react'

async function getProducts() {

    const res = await fetch('https://gastropub.webmcdm.dk/menus');
    return res.json();

}

const Dish = ({dishData}) => {

    return (<div>{dishData.name}</div>)

}

const Product = ({productData}) => {

    return (
        <div>
            <h1>{productData.name}</h1>
         
            <Image src={productData.image} alt={productData.name} width={80} height={80}></Image>

            {productData.dishes.map(dish => <Dish key={dish.name} dishData={dish}></Dish>)}
        </div>
    )
}

const Gastropub = () => {

    const [products, setProducts] = useState([]);
    
    useEffect( () => {

        getProducts().then(allProducts => setProducts(allProducts))


    })
    
    return (
        <div>
            GASTRO {products.map( (product, index) => <Product key={index} productData={product}></Product>)}
        </div>
    )

}

export default Gastropub;