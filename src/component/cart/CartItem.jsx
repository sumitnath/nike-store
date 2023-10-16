import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import {setRemoveItemFromCart ,setClearCartItems,setDecreaseItemQyt,setIncreaseItemQyt} from '../../app/CartSlice'

const CartItem = ({
  item: {cartQuantity, color, id, img, price, shadow, text, title },
}) => {
  // console.log(item)
  const dispatch = useDispatch()
const onRemoveItem = ()=>{
dispatch(setRemoveItemFromCart({cartQuantity, color, id, img, price, shadow, text, title }
))
  }
  const onIncreaseItemQyt = ()=>{
  dispatch(setIncreaseItemQyt({id,title,text,img,price,color,shadow}))
 }
 const onDecreaseItemQyt = ()=>{
  dispatch(setDecreaseItemQyt({id,title,text,img,price,color,shadow}))
  }

  return (
     <div className="flex items-center 
     justify-between w-full px-5">
       <div className="flex items-center gap-5">
         <div className={`bg-gradient-to-b
         ${color} ${shadow} relative rounded 
         p-3 duration-75 ease-in-out grid items-center
         `}>
          <img src={img} alt={`img/cart-item/${id}`} 
          className="w-36 h-auto object-fill lg:w-28"
          />
        </div>
         <div className="grid items-center gap-4">
           <div className="grid items-center leading-none">
            <h1 className="font-medium text-lg 
            text-slate-900 lg:text-sm">{title}</h1>
            <p className="text-sm text-slate-800
            lg:text-xs">{text}</p>
          </div>
           <div className="flex items-center 
           justify-around w-full">
           <button type="button" 
           className="bg-theme-cart rounded w-6 
           h-6 lg:h-5 lg:w-5 flex items-center justify-center " onClick={onDecreaseItemQyt}>
              <MinusIcon className="w-5 h-5 
              lg:w-4 lg:h-4 text-white stroke-[2]" />
            </button>
            <div className="bg-theme-cart rounded
            text-white font-medium lg:text-xs w-7 h-6
            lg:h-5 lg:w-6 flex items-center justify-center
            ">{cartQuantity}</div>
            <button type="button"  className="bg-theme-cart rounded w-6 
           h-6 lg:h-5 lg:w-5 flex items-center justify-center " onClick={onIncreaseItemQyt}>
               <PlusIcon className="w-5 h-5 
              lg:w-4 lg:h-4 text-white stroke-[2]" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid items-center gap-5">
        <div className="grid items-center justify-center">
          <h1 className="text-lg lg:text-base
           text-slate-900 font-medium">${price * cartQuantity}</h1>
        </div>
        <div>
          <button type="button" className="bg-theme-cart 
          rounded p-1 lg:p-0.5 grid items-center cursor-pointer"
          onClick={onRemoveItem}
          >
            <TrashIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
