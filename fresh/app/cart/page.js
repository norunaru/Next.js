import age from "./data.js";
import Hello from "./hello.js";

export default function Cart() {
  let cartItems = ["tomatoes", "pasta"];
  return (
    <div>
      <h4 className="title">Cart </h4>
      <CartItem item={cartItems[0]} price={30} />
      <CartItem item={cartItems[1]} price={40} />
      <Banner />
    </div>
  );
}

const Banner = () => {
  return <h5>행사중</h5>;
};

const CartItem = ({ item, price }) => {
  return (
    <div className="cart-item">
      <p>{item}</p>
      <p>${price}</p>
      <p>1개</p>
    </div>
  );
};
