import React, {Component} from 'react';
import Data from '../../exercise-2/mockups/data.json'
import {Link} from 'react-router-dom';

class Product extends Component {
    state = {
        productData: Data,
    }
    render() {
        const {productData} = this.state;
        const productKeys = Object.keys(productData);
        return(
            <div className='webpage'>
                <p>All Products:</p>
                {productKeys.map((product) => (
                    <p className='productLink'>
                        <Link key={productData[product].id} to={`/products/${productData[product].id}`}>{product} </Link>
                    </p>
                ))}
            </div>

        );
    }
}

export default Product;