import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	const [cart, updateCart] = useState([])
	const [activeCategory, setActiveCategory] = useState('')

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} 
				activeCategory={activeCategory}/>
				<ShoppingList cart={cart} updateCart={updateCart} 
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}/>
			</div>
			<Footer />
		</div>
	)
}

export default App