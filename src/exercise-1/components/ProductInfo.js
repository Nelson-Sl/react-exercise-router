import React, {Component} from 'react';
import Data from '../../exercise-2/mockups/data.json'

class ProductInfo extends Component{
    state = {
        data: Data,
        Id: Number(this.props.match.params.id),
    }

    render() {
        const{data,Id} = this.state;
        const dataKeys = Object.keys(data);
        console.log(Id);
        return(
            <div className='webpage'>
                <h2>Product Details: </h2>                
                {dataKeys.map((product) => {
                    if(data[product].id === Id) {
                        return <div className='productInfo'>
                            <p>Name: {data[product].name}</p>
                            <p>Id: {Id}</p>
                            <p>Price: {data[product].price}</p>
                            <p>Quantity: {data[product].quantity}</p>
                            <p>Desc: {data[product].desc}</p>
                            <p>URL: /products/{Id}</p>  
                        </div>
                    }
                    return '';
                })}                      
            </div>
        );
    }
}

export default ProductInfo;