import classes from './AvailableProducts.module.css';
import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';

const PRODUCTS = [
    {id: 1,
     name:'kale',
     description: 'bitter, removes fat from the liver, decongests the gallbladder, helps make more bile',
     price: 1,
     facts: 'source of vitamin C, vitamin K, vitamin A, cleanse and detoxify liver, anti-estrogenic - if excess estrogen',
    },
    {
    id: 2 ,
    name: 'cabbage - sauerkraut',
    description: 'belongs to the most healthiest veggi group - cruciferous veggis, contains biotin, fermented contains highest among all amount of vitamin C',
    price: 1,
    facts: 'contains L-glutamine, substance that supports brain, heart, muscles'},
    {
    id: 3,
    name: 'beetroot',
    description: 'highest potassium content, rich in nitric oxide',
    price: 2,
    facts: 'improving lung functions, treats erectile dysfunction, helps the blood vessels in the body to relax '},
    {
    id: 4,
    name: 'avocado',
    description: 'has got a rich, creamy texture and mild flavour',
    price: 2,
    facts: 'an excellent source of monounsaturated fat and vitamin E, and good source of folate, also rich in iron, copper and potassium'},
    {
    id: 5,
    name: 'Brazilian nuts',
    description: 'are among the richest dietttary sources of selenium',
    price: 4,
    facts: 'a single Brazilian nut contains 68-91 micrograms of selenium, one per day provides daily recommended adult allowance of 55'},
]


const AvailableProducts = () => {
    const productList = PRODUCTS.map(product => <ProductItem
        key={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        facts={product.facts} />);

    return <section className={classes.products}>
        <Card>
            <ul>{productList}</ul>
        </Card>
    </section>
};

export default AvailableProducts;