import React from 'react';
import ProductCard from "./ProductCard";

const Card1=()=>{
    return(
        <div style={{padding:40}}>
            <ProductCard 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIIuJ9nbBa1vmhWK_znzfzxKUl-u1Yb2OKw&s"
            title="Cool Headphones"
            price="$59.99"/>
        </div>
    );

};
export default Card1;