import banner2 from "../assets/banner2.jpg";

const BannerContent = () => {
  return (
    <div className="container mt-32 w-full  mb-32">
      <div className="flex items-center justify-center w-full">
        <div style={{ backgroundImage: `url(${banner2})`, objectFit:"fill" }} className="h-[200px] md:h-[260px] bg-cover bg-center w-full rounded-xl p-8 md:p-16">
            <p className='text-white text-xl font-medium'>Smartphone Pro 2024</p>
            <a href="#" className='mt-6 bg-sky-500 text-white w-[120px] h-[40px] flex items-center justify-center rounded-md hover:text-sky-500 hover:bg-white transition-all duration-200 font-medium'>Shop Now</a>
        </div>
      </div>
    </div>
  )
}

export default BannerContent