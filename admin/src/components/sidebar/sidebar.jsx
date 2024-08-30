import { Link } from 'react-router-dom'
import './sidebar.css'
import add_to_cart from '../../assets/add_to_cart.png'
import list_product_icon from '../../assets/product_list_icon.png' 

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <Link to={'/addproduct'} style={{textDecoration:'none'}}>
    <div className='sidebar-item'>
    <img src={add_to_cart} alt='' />
    <p>Add Product</p>
    </div>
  </Link>
    <Link to={'/listproduct'} style={{textDecoration:'none'}}>
    <div className='sidebar-item'>
    <img src={list_product_icon} alt='' />
    <p>Product list</p>
    </div>
  </Link>
    </div>

  )
}

export default Sidebar
