import React from 'react';
import ProductCard from "./ProductCard";

const Card2=()=>{
    return(
        <div style={{padding:40}}>
            <ProductCard 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jGwWsGOWEKCNh_UjqrpYyQrronzXJVlvfQ&s"
            title="Cool Headphones"
            price="$59.99"/>
        </div>
    );

};
export default Card2;