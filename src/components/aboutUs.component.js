import React, { Component } from "react";
import image  from './image.jfif';
export default class AboutUs extends Component {
    render() {
        return (
            <form>
                <h8>
                    Thank you for visiting E-commerce.com , where you will find products offered at incredible prices.
                    We serve customers all over the world , and we’re still growing . But our vision won’t change : One world , one price .
                    Whoever you are , E-commerce.com offers the same price to all : the lowest possible .
                    Whether you’re a retailer who refuses to pay the high prices  , or shopper looking to get hold of the latest products , E-commerce.com provides light-speed service and best prices possible.
                    
                </h8>
                
                <img className="center" src={image}/>
            </form>
        )
    }
}
