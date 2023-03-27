import React,{useState} from "react";

export const AppContext = React.createContext({});

export function AppContextProvider({children}){
    const products = [
        { name: 'Abra', cost: 180, image: '/images/Abra.png' },
        { name: 'Clefairy', cost: 500, image: '/images/Clefairy.png' },
        { name: 'Nidorina', cost: 1200, image: '/images/Nidorina.png' },
        { name: 'Dratini', cost: 2800, image: '/images/Dratini.png' },
        { name: 'Scyther', cost: 5500, image: '/images/Scyther.png' },
        { name: 'Porygon', cost: 9999, image: '/images/Porygon.png' }
    ];
    const [cart, setCart] = useState([]);
    
    function addItemToCart(item){
        setCart([...cart, item]);
    }

    const context = {
        products, cart, addItemToCart
    }

    return(
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}