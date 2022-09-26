import { Fragment } from 'react';
import classes from './Header.module.css';
import imageCruciferious from '../../assets/cruciferous1.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                
                <h3 className={classes.headerthree}>BE YOUR OWN</h3><h1 className={classes.headerone}>Nutritionist</h1>
                <div className={classes.cartbutton}>
                    <HeaderCartButton onClick={props.onShowCart}/>
                </div>
            </header>
            <div className={classes['main-image']}>
                <img src={imageCruciferious} alt='the most healthiest cruciferous veggis' />
            </div>)
        </Fragment>
    );
};

export default Header;