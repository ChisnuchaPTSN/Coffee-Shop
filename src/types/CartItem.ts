import Menu from "./Menu";

interface CartItem extends Menu {
  sweetness: string;
  quantity: number;
}

export default CartItem;
