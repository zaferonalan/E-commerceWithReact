import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {

  return (
    <div className="pt-4 bg-white top-0 sticky">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className='text-4xl font-bold cursor-pointer'>Shopping</h1>
          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex items-center gap-3 hidden ">
              <div className="rounded-full border-2 border-gray-300 text-gray-500 text-3xl w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all duration-200">
                <AiOutlineUser/>
              </div>

              <div>
                <a href="" className='text-gray-500'>Sign in</a>
              </div>
              <div className="text-gray-500 text-3xl relative cursor-pointer">
                <FiShoppingCart/>
                <div className="absolute -top-3 -right-2 bg-red-500 w-5 h-5 rounded-full text-white text-base flex items-center justify-center">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 pt-4"></div>
    </div>
  )
}

export default Navbar