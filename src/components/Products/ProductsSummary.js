import classes from './ProductsSummary.module.css';

const ProductsSummary = () => {

    return <section className={classes.summary}>
        <h2>Look great and feel great!!!</h2>
        <h3>Strong body, strong mind.</h3>
        <p>Most of what you know about healthy eating is completely untrue. You should do the opposite of most health advice.</p>
        <span><ol><b className={classes.subtitle}>Untrue facts:</b>
            <li>Everything in moderation</li>
            <li>Don't skip a meal</li>
            <li>Eat fewer calories</li>
            <li>Consume less fat</li>
            <li>Avoid salt</li>
            <li>The brain prefers glucose</li>
            <li>Vegetable oil over saturated fat</li>
            <li>Get your carbs from whole grain</li>
            <li>You do not need vitamins</li>
        </ol></span>
    </section>
};

export default ProductsSummary;