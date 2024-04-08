import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "RD Sharma",
    description: "A maths book",
  },
  {
    id: "p2",
    price: 12,
    title: "RS Aggarwal",
    description: "A Maths Icsc book",
  },
  {
    id: "p3",
    price: 18,
    title: "Physics",
    description: "A physics book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
