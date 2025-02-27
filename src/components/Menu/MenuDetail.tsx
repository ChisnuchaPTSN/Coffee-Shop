import { useState } from "react"
import { ShoppingBasket } from "lucide-react";
import Menu from './../../types/Menu';
import CartItem from "../../types/CartItem";

interface MenuDetailProps {
  menu: Menu;
  addToCart: (cart: CartItem) => void;
}

function MenuDetail({ menu, addToCart }: MenuDetailProps) {
  const [sweetness, setSweetness] = useState<string>("100%");

  const handleAdd = () => {
    addToCart({ ...menu, sweetness, quantity: 1 });
  };

  return (
    <div className="border border-gray-400 rounded-lg p-3 m-2 shadow-md hover:shadow-xl transition-shadow w-52 flex flex-col">
      <img
        src={menu.menuImageUrl}
        alt={menu.title}
        className="w-full h-50 object-cover mb-4"
      />
      <h2 className="font-semibold text-sm text-white text-center bg-amber-900 rounded-full p-[4px] mb-2">
        {menu.title.length > 20
          ? `${menu.title.substring(0, 20)}...`
          : menu.title}
      </h2>
      <p className="text-xs mb-2">{menu.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-amber-700 font-medium text-md">฿{menu.price}</span>
      </div>
      <h3 className="text-sm font-semibold mb-2">ระดับความหวาน</h3>
      <div className="grid grid-cols-4 gap-1 text-xs">
        <button
          onClick={() => setSweetness("0%")}
          className={sweetness === "0%" ? "cursor-default rounded-full px-2 py-1 text-white bg-amber-900" : "text-white bg-gray-400 rounded-full px-2 py-1 cursor-pointer"}
        >
          0%
        </button>
        <button
          onClick={() => setSweetness("50%")}
          className={sweetness === "50%" ? "cursor-default rounded-full px-2 text-white bg-amber-900" : "text-white bg-gray-400 rounded-full px-2 cursor-pointer"}
        >
          50%
        </button>
        <button
          onClick={() => setSweetness("100%")}
          className={sweetness === "100%" ? "cursor-default rounded-full px-2 text-white bg-amber-900" : "text-white bg-gray-400 rounded-full px-2 cursor-pointer"}
        >
          100%
        </button>
        <button
          onClick={() => setSweetness("150%")}
          className={sweetness === "150%" ? "cursor-default rounded-full px-2 text-white bg-amber-900" : "text-white bg-gray-400 rounded-full px-2 cursor-pointer"}
        >
          150%
        </button>
      </div>

      <button
        onClick={handleAdd}
        className="w-full font-semibold text-xs flex items-center justify-center gap-2 bg-amber-900 transition-all hover:bg-[#C89F94] text-white rounded-md py-2 mt-4 cursor-pointer"
      >
        <ShoppingBasket size={20} />
        เพิ่มลงตะกร้า
      </button>
    </div>
  );
}

export default MenuDetail;
