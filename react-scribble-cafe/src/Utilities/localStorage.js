
const getCartFromLocalStorage = ()=>{
    const getStringCart = localStorage.getItem("cart")

    if(getStringCart){
        const getParseCart = JSON.parse(getStringCart)
        return(getParseCart)
    }
    return [];
}

const addItemToLocalStorage = (id) =>{
    const cart = getCartFromLocalStorage();
    const newCart = [...cart , id]
    saveCartToLocalStorage(newCart)
}

const saveCartToLocalStorage = (cart)=>{
       const cartString = JSON.stringify(cart)
       localStorage.setItem("cart" , cartString)
}

export {
    getCartFromLocalStorage,
    addItemToLocalStorage 
}