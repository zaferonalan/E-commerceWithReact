import React from 'react'
import glaxyS24Plus from "../assets/galaxyS24+.png";
import glaxyS24ultra from "../assets/galaxyS24ultra.png";
import iphone13 from "../assets/iphone13.png";
import iphone14 from "../assets/iphone14.png";
import iphone15 from "../assets/iphone15.png";
import iphone15promax from "../assets/iphone15promax.png";
import iphonese from "../assets/iphonese.png";
import ProductCard from './ProductCard';

const Product = () => {
  const products = [
    {
      id:0,
      img: glaxyS24Plus,
      title: "Samsung GlaxyS24 Plus",
      category: "Mobil Phone",
      price: "42999" 
    },
    {
      id:1,
      img: glaxyS24ultra,
      title: "Samsung GlaxyS24 Ultra",
      category: "Mobil Phone",
      price: "71499" 
    },
    {
      id:2,
      img: iphone15promax,
      title: "Iphone 15 Pro Max",
      category: "Mobil Phone",
      price: "91999" 
    },
    {
      id:3,
      img: iphone15promax,
      title: "Iphone 15 Pro",
      category: "Mobil Phone",
      price: "84999" 
    },
    {
      id:4,
      img: iphone15,
      title: "Iphone 15",
      category: "Mobil Phone",
      price: "57.999" 
    },
    {
      id:5,
      img: iphone14,
      title: "Iphone 14",
      category: "Mobil Phone",
      price: "44999" 
    },
    {
      id:6,
      img: iphone13,
      title: "Iphone 13",
      category: "Mobil Phone",
      price: "37699" 
    },
    {
      id:7,
      img: iphonese,
      title: "Iphone SE",
      category: "Mobil Phone",
      price: "35699" 
    },
  ]
  return (
    <div className="container mt-32">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">Products</h2>
        <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
          <div className="text-black">New</div>
          <div>Featured</div>
          <div>Top Sellers</div>
        </div>
      </div>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
        {
          products.map((product) => (
            <ProductCard 
              key={product.id}
              img={product.img}
              category={product.category}
              title={product.title}
              price={product.price}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Product