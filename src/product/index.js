import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios';
import './index.css'

function ProductPage(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    console.log(product)
    useEffect(function(){
        axios.get(`https://b1c1f071-9352-46c9-88d8-5f0cfc3aef0c.mock.pstmn.io/products/${id}`)
        .then(function(result){
            setProduct(result.data)
        }).catch(function (error){
            console.error(error);

        });
    },[]);
    if (product === null){
        return <span>아직..</span>
    }
    return( 
    <div>
        <div id ="product-box">
            <img id="product-img" src={"/"+product.imgUrl}/>
            <div className='product-contents'>
                    
                    <h2 className='product-name'>{product.name}</h2>
                    <hr className="one"></hr>
                    <span className='product-price'>{product.price}원</span>
                    <div id="createdAt">2022년 01월 26일</div>
            <div className='product-seller'>
                <img className='product-avatar' src='/images/banner.jpg'/>
                <span>{product.seller}</span>
                
                </div>
                <div id = "product-description">{product.description}</div>
            </div>
        </div>
    </div>)
}

export default ProductPage;