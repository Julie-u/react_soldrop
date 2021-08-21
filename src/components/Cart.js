import React, {useContext} from 'react'
import Image from './img'
import Footer from 'components/Footer'

const CartContents = ({data}) => {

    const {gameTitle, gameGenre, oldPrice, gamePrice, gameRating, gameImage, edition} = data

    const deleteProduct = useContext(ProductContext)
    const deletingFromCart= deleteProduct.deleteFromCart

    return (
        <article>
            <section className="product-container">
                <div className="cart-product">
                    <Image src={gameImage} alt={gameTitle}/>
                </div> 
                <div className="cart-product-info">
                    <h3>{gameTitle}</h3>
                    <h4>by {gameGenre}</h4>
                    <data value={gamePrice}><del>${oldPrice}</del> <ins>${gamePrice}</ins></data>
                </div>
                <div className="cart-quantity">
                    <button type="button" className="cart-bttn" onClick={() => deletingFromCart(gameTitle)}>Remove</button>
                </div>
            </section>
        </article>
        
    )
}

export default CartContents