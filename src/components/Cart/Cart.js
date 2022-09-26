import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[{
        id: 4,
        name: 'avocado',
        description: 'has got a rich, creamy texture and mild flavour',
        price: 2,
        facts: 'an excellent source of monounsaturated fat and vitamin E, and good source of folate, also rich in iron, copper and potassium'
    }].map(product => <li>{product.name}</li>)}</ul>

    return <Modal onClose={props.onClose}>
        <div className={classes.total }>
            {cartItems}
            <span>Total amount</span>
            <span>2</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Buy</button>

        </div>
    </Modal>
};


export default Cart;