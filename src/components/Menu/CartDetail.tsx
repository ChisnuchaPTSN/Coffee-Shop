import { Plus, Minus, Trash2 } from "lucide-react";
import CartItem from './../../types/CartItem';

type CartDetailProps = {
  cartItem: CartItem;
  updateQuantity: (coffeeId: number, sweetness: string, change: number) => void;
  removeFromCart: (id: number, sweetness: string) => void;
};

function CartDetail({
  cartItem,
  updateQuantity,
  removeFromCart,
}: CartDetailProps) {
  return (
    <div className="flex justify-between items-start py-2 border-b">
      <div className="flex-col md:flex">
        <img
          src={cartItem.menuImageUrl}
          alt={cartItem.title}
          className="h-20 object-cover mb-4 "
        />
      </div>
      <div className="flex-1 px-1">
        <p className="text-lg font-bold">{cartItem.title}</p>
        <p className="text-md text-gray-600">
          ระดับความหวาน : {cartItem.sweetness}
        </p>
        <p className="text-md text-gray-600">
          ราคา : {cartItem.price} บาท
        </p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              className="w-8 h-8 ms-6 border-orange-600 bg-white border-2 text-orange-600 rounded-lg  flex items-center justify-center cursor-pointer"
              onClick={() => updateQuantity(cartItem.id, cartItem.sweetness, -1)}
            >
              <Minus size={20} />
            </button>

            <span className="w-8 text-center">{cartItem.quantity}</span>

            <button
              className="w-8 h-8  border-green-600 bg-white border-2 text-green-600 rounded-lg  flex items-center justify-center cursor-pointer"
              onClick={() => updateQuantity(cartItem.id, cartItem.sweetness, 1)}
            >
              <Plus size={20} />
            </button>
          </div>

          <button
            className="w-8 h-8  border-red-900 bg-red-900 border-2 text-white rounded-lg  flex items-center justify-center cursor-pointer"
            onClick={() => removeFromCart(cartItem.id, cartItem.sweetness)}
          >
            <Trash2 size={20} />
          </button>
        </div>
        <p className="text-sm font-bold">{}</p>
      </div>
    </div>
  );
}

export default CartDetail;
