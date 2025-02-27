import Menu from "../types/Menu";
import MenuDetail from "../components/Menu/MenuDetail";
import CartItem from "../types/CartItem";
import CartDetail from "../components/Menu/CartDetail";
import { useState } from "react";

interface CartProps {
  cartItems: CartItem[];
  updateQuantity: (menuId: number, change: number) => void;
  removeFromCart: (id: number, sweetness: string) => void;
  totalPrice: number;
}

interface MenuListProps {
  menus: Menu[];
  addToCart: (cart: CartItem) => void;
}

interface HomeProps extends CartProps, MenuListProps { }

function Home({
  menus,
}: HomeProps) {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (cartItem: CartItem) => {
    const existingItem = cartItems.find(
      (item) => item.id === cartItem.id && item.sweetness === cartItem.sweetness
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === cartItem.id && item.sweetness === cartItem.sweetness
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...cartItem, quantity: 1 },
      ]);
    }
  };
  
  const updateQuantity = (id: number, sweetness: string, change: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id && item.sweetness === sweetness) {
          const newQuantity = item.quantity + change;
          return newQuantity >= 1 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      })
    );
  };
  

  const removeFromCart = (id: number, sweetness: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id || item.sweetness !== sweetness));
  };  

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col lg:flex-row container mx-auto px-4 py-8 gap-3">
      <div className="w-full lg:w-1/3 p-6">
        <h1 className="text-md font-medium text-center mb-4 bg-amber-900 text-white p-1 rounded-lg">
          รายการสินค้าในตะกร้า
        </h1>
        <div className="mt-4">
          {cartItems.length === 0
            ? EmptyCart()
            : MenuInCart(cartItems, updateQuantity, removeFromCart, totalPrice)}
        </div>
      </div>

      <div className="w-full lg:w-2/3 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {menus.map((menu) => (
            <MenuDetail key={menu.id} menu={menu} addToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center text-center justify-center">
      <p className="text-red-500 text-md font-semibold">ไม่มีสินค้าในตะกร้า</p>
    </div>
  );
}

function MenuInCart(
  cartItems: CartItem[],
  updateQuantity: (id: number, sweetness: string, change: number) => void,
  removeFromCart: (id: number, sweetness: string) => void,
  totalPrice: number
) {
  return (
    <>
      {cartItems.map((item) => (
        <CartDetail
          key={item.id + item.sweetness}
          cartItem={item}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      ))}

      <div className="mt-4 text-right">
        <p className="text-lg font-bold text-amber-700">
          รวมทั้งหมด: {new Intl.NumberFormat("en-US").format(totalPrice)} บาท
        </p>
      </div>
    </>
  );
}



export default Home;
