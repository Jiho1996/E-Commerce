import './index.css'
import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';

function MainPage(){
    const [products, setProducts] = React.useState([]);
    React.useEffect(

        function(){
            axios.get("https://b1c1f071-9352-46c9-88d8-5f0cfc3aef0c.mock.pstmn.io/products")
    .then(function(result){
        const products = result.data.products
        setProducts(products);
    }).catch(function(error){
        console.log("에러 발생: ", error)
    });
        }
    ,[]);
    
    return (
    <div>
        
      <div id="banner">
        <img src="images/banner.jpg" alt="banner" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
          {products.map(function(product, index){
                return(
                    <div className='product-card'>
                        <Link className='product-link' to={`/products/${product.id}`}>
                            <img className='product-img' src={product.imgUrl}/>
                        <div className='product-content'>
                            <span className='product-name'>{product.name}</span>
                            <span className='product-price'>{product.price}원</span>
                <div className='product-seller'>
                    <img className='product-avatar' src='images/banner.jpg'/>
                    <span>{product.seller}</span>
                </div>
            </div>
            </Link>
          </div>
                    );
              })
          }
          
      </div>
    
    </div>
    );
}
export default MainPage;