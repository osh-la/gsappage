

const FeaturedProd = () => {
  return (
    <section className="bg-red-50 h-screen">
        <h1 className="text-5xl pl-4">FEATURED PRODUCTS</h1>

        <marquee behavior="scroll" direction="left" >
           <div className="flex mr-4 will-change-scroll">
             <div className="w-64 h-96 ">
                <img className="absolute object-center" src="/images/image1.jpg" alt="" />
                <div className="relative">
                    <p>Product Name -</p>
                    <p>Price</p>
                </div>
            </div>
            <div className="w-64 h-96 ">
                <img className="absolute" src="/images/image2.jpg" alt="" />
                <div className="relative">
                    <p>Product Name -</p>
                    <p>Price</p>
                </div>
            </div>
            <div className="w-64 h-96 ">
                <img className="absolute" src="/images/image3.jpg" alt="" />
                <div className="relative">
                    <p>Product Name -</p>
                    <p>Price</p>
                </div>
            </div>
           </div>
           
        </marquee>

    </section>
  )
}

export default FeaturedProd