import { useContext} from 'react';
import { AppContext } from './AppContextProvider';
import Product from './Product';
import styles from './ShopPage.module.css';
import ShoppingCart from './ShoppingCart';


export default function ShopPage() {

    const {products, addItemToCart} = useContext(AppContext)

    // Hold the user's shopping cart as state

    return (
        <>
            <h1>🚀Rocket Game Corner 🚀 - Prize Shop</h1>
            <div className={styles.mainGrid}>
                <div className={styles.productContainer}>
                    {products.map((product, index) => (
                        <Product key={index} item={product} onAddToCart={addItemToCart} />
                    ))}
                </div>
                <div>
                    <ShoppingCart/>
                </div>
            </div>
        </>
    );
}