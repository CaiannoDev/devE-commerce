import '../ProductDisplay/ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';





function ProductDisplay(props){

    const {product} = props;
    const {addToCart} = useContext(ShopContext);



    return (
        <div className="productdisplay">
            <div className='productdisplay-left'>
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>

            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-stars'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className="productdisplay-right-prices-old">${product.old_price}</div>
                    <div className="productdisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae accusantium mollitia sapiente, laudantium error.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Tamanho:</h1>
                    <div className='productdisplay-right-sizes'>
                        <div>P</div>
                        <div>M</div>
                        <div>G</div>
                        <div>GG</div>
                        <div>XG</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} >COMPRAR</button>
                <p className='productdisplay-right-category'> <span>Categoria:</span> Women, T-shirt, Crop Top </p>
                <p className='productdisplay-right-category'> <span>Tags:</span> Modern, Latest </p>
            </div>

        </div>
    )
}


export default ProductDisplay;