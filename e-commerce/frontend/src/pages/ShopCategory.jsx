import Item from "../components/items/Item";
import { ShopContext } from "../context/ShopContext";
import React from "react";
import { useContext } from "react";
import dropdown_icon from '../components/assets/dropdown_icon.png'
import './CSS/ShopCategory.css'




function ShopCategory({category,banner}){ 
    
    const {all_product} = useContext(ShopContext);

    return(
        <div className="shop-category">
            <img className="shopcategory-banner" src={banner} alt="" />
            <div className='shopcategory-indexSort'>
                <p>
                   <span>Mostrar 1-12</span> dos 36 products
                </p>
                <div className="shopcategory-sort">
                    ordenado por <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    if(item.category===category) {
                        return <Item  
                                    key={i} 
                                    id={item.id} 
                                    name={item.name} 
                                    image={item.image}
                                    new_price={item.new_price}
                                    old_price={item.old_price} /> 
                    }else {return null;}
                })}
            </div>
            <div className="shopcategory-loadmore">Explore mais</div>
        </div>
    )
}

export default ShopCategory;