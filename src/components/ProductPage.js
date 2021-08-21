import React, {useContext} from 'react'
import ProductContext from 'contexts/oneproduct'
import Image from './img'

const OneProduct = ({data}) => {

    const {gameTitle, gameGenre, oldPrice, gamePrice, gameRating, gameImage, edition} = data

    const cartProduct = useContext(ProductContext)
    const addingToCart= cartProduct.addToCart

    const favProduct = useContext(ProductContext)
    const addingToFav= favProduct.addToFav

    return (
        <div class="product-page-container">
            <div id="gallery" className="gallery">
                <Image src={gameImage} alt={`{gameTitle}`} className="product-img" />
            </div>

            <div className="product-info">
                <h3>{gameTitle}</h3>
                <h4>{gameGenre}</h4>
                <data><ins>${gamePrice}</ins><del>${oldPrice}</del></data>
                <dl>
                <dt>Rating</dt>
                <dd>4.5 <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span><span className="material-icons">star_border</span></dd>
                <a href="#">see reviews</a>
                </dl>
                <form>
                    <fieldset>
                    <legend>Type</legend>
                    <div className="product-info-1">
                        <ul>
                        <li>
                            <label className="my-checkbox">
                            <input type="checkbox"/> 
                            <span>Multigaming</span>
                            </label>
                        </li>
                        <li>
                            <label className="my-checkbox">
                            <input type="checkbox"/> 
                            <span>Adventure</span>
                            </label>
                        </li>
                        <li>
                            <label className="my-checkbox">
                            <input type="checkbox"/> 
                            <span>Open World</span>
                            </label>
                        </li>
                        </ul>
                    </div>
                    </fieldset>
                </form>
                <footer className="product-footer">
                    <button type="button" className="add-cart" onClick={() => addingToCart(gameTitle)}><span className="material-icons"></span>Add to Cart</button><br></br>
                    <button className="favourites" type="button" onClick={() => addingToFav(gameTitle)}><span className="material-icons"></span>Add to Fav</button>
                </footer>
            </div>
        </div> 
    )
}

export default OneProduct

