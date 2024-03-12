import { useEffect, useState } from 'react';
import '../ListProduct/ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

function ListProduct(){

    const [allproducts, setAllProducts] = useState([]);

    const fecthInfo = async ()=>{
        await fetch('http://localhost:8080/allproducts')
            .then((res)=>res.json())
            .then((data)=>setAllProducts(data))

    };

    useEffect(()=>{
        fecthInfo();
    }, []);


    const removeProduct = async (id)=>{
        await fetch('http://localhost:8080/remove', {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type':'application/json',
                body: JSON.stringify({_id:id})
            }
        })

        await fecthInfo();
    }

    return (
        <div className="list-product">
            <h1>All Products List</h1>
            <div className='listproduct-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category </p>
                <p>Remove</p>
            </div>
            <div className='listproduct-allproducts'>
            <hr />
                {allproducts.map((product, index)=>{
                    return <> <div key={index} className='listproduct-format-main '>
                                <img  className='listproduct-product-icon' src={product.image} alt="" />
                                <p> {product.name} </p>
                                <p>${product.old_price} </p>
                                <p> ${product.new_price} </p>
                               <p>{product.category} </p>
                               <img onClick={()=>{removeProduct(product._id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
                            </div>
                            <hr /> 
                        </>
                })}
            </div>
        </div>
    )
}

export default ListProduct; 











