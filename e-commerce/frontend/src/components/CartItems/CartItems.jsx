import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import '../CartItems/CartItems.css';
import remove_icon from '../assets/cart_cross_icon.png'

function CartItems(){ 

    const {all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);


    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Produtos</p>
                <p>Titulo</p>
                <p>Preço</p>
                <p>Quantidade</p>
                <p>Total</p>
                <p>Remover</p>
            </div>
            <hr />

            {all_product.map((e)=>{
                if(cartItems[e.id] > 0 ) {
                    return <div> 
                                 <div className='cartitems-format cartitems-format-main'>
                                        <img src={e.image} alt="" className='carticon-product-icon' />
                                        <p>{e.name} </p>
                                        <p>${e.new_price} </p>
                                        <button className='cartitems-quantity' >{cartItems[e.id]}</button>
                                        <p>${e.new_price*cartItems[e.id]}</p>
                                        <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                                 </div>
                                <hr />
                        </div>
                }

                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Carrinho:</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Frete</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                           <h3>Total</h3>
                           <h3>${getTotalCartAmount()}</h3> 
                        </div>
                    </div>
                    <button>PAGAMENTO</button>
                </div> 
                <div className="cartitems-promocode">
                        <p>Se possui Cupom de desconto, digite aqui:</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems; 


