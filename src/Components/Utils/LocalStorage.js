function checkData() {
    let cart =[];
    const getCartData = localStorage.getItem('cart');
    if(getCartData) {
        cart = JSON.parse(getCartData);
    }
    return cart;
}

function addPlayer (player) {
    let cart = checkData(player.id);
    cart.push(player.id);
    localStorage.setItem('cart', JSON.stringify(cart));
}

const removePlayerLocal = id => {
    const cart = checkData();
    // removing Every ID
    const remaining = cart.filter(idx=> idx !== id);
    localStorage.setItem('cart', JSON.stringify(remaining));
}


export {addPlayer, removePlayerLocal}