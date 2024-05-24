//Exercise: Managing a Stack
let bookCart = []

const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'
function viewCart(){
    console.log('Current Car of book ', bookCart);
}
function performCartAction(action,newBook){
    switch (action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook);
            break;
        case REMOVE_FROM_CART_ACTION:
            if(bookCart.length === 0){
                console.log('Cart is empty.No books to remove');
            }else{
                const removeBook = bookCart.pop();
                console.log(`Removed book from the cart: ${removeBook}`);
            }
            
            break;
        case VIEW_CART_ACTION:
           viewCart();
            break;
        default:
            console.log('Invalid action.Please choose a vaid option.');
            break;
    }
}

performCartAction(ADD_TO_CART_ACTION, 'Think like a monk');
performCartAction(VIEW_CART_ACTION);
performCartAction(ADD_TO_CART_ACTION, 'javascript');
performCartAction(VIEW_CART_ACTION);