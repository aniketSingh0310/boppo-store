import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice';


const Cart = () => {

    const products= useSelector(state=>state.cart)
    const dispatch=useDispatch();
    
    const removeFromCart=(id)=>{
        dispatch(remove(id))
    } 

    const cards= products.map(product=>(
        <div className='col-md-3' style={{marginBottom:'10px'}}>
            <Card key={product.id} style={{ width: '18rem' }} className='h-100'>
          <div className='text-center'><Card.Img variant="top" src={product.image} style={{width:'100px' ,height:'130px'}} /></div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
    
            <Button variant="danger" onClick={()=>{removeFromCart(product.id)}}>Remove item</Button>
          </Card.Footer>
        </Card>
    
        </div>
       ) )
  return (
    <div>
        <h1>Products in your cart</h1>
        <div className='row'>{cards}</div>
    </div>
  )
}
export default Cart;