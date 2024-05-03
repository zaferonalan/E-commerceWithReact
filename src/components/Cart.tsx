import { useAppSelector } from "../redux/hook"
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import ProductCard from "./ProductCard";


const Cart = ({setOpenCart}:any) => {
    const products = useAppSelector((store) => store.cart)
    // console.log(useAppSelector((store) => store.cart))

    const getTotal = () => {
      let total = 0;
      products.forEach((item) => total + Math.ceil(item.price * 0.9) * item.quantity)
      return total
    }

  return (
    <div className="fixed left-0 top-0 z-20 overflow-y-scroll bg-[#000007d] w-full min-h-screen">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">  
        <RxCross1 onClick={() => setOpenCart(false)} className="absolute right-0 top-0 m-6 text-2xl cursor-pointer"/>
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">Your Cart</h3>
        <div>
          {
            products?.map((item:any) => (
              <CartProduct
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          }
        </div>
        <div className="flex justify-between items-center font-medium">
          <p>Total</p>
          <p>{getTotal()} TL</p>
        </div>
        <div>
          <button className="bg-sky-500 text-white text-center w-full rounded-md py-2 hover:bg-sky-600 my-4">View Cart</button>
          <button className="bg-sky-500 text-white text-center w-full rounded-md py-2 hover:bg-sky-600 ">Check Product</button>
        </div>
      </div>
    </div>
  )
}

export default Cart