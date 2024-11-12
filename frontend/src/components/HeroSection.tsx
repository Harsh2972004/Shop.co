import hero_img from "../assets/images/hero_img.png";
import star from "../assets/images/star.png";

const HeroSection = () => {
  return (
    <section className="h-[655px] bg-[#f2f0f1]">
      <div className="container py-0">
        <div className=" basis-[45%]">
          <h1 className="text-left font-extrabold text-[68px] leading-none font-integral mb-8">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="opacity-[60%] mb-8">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white rounded-full w-[210px] h-[52px] mb-12">
            Shop Now
          </button>
          <div className="flex justify-between items-center">
            <div className="border-r-[2.5px] pr-10">
              <h3 className="text-[40px] font-bold">200+</h3>
              <p className="opacity-[60%]">International Brands</p>
            </div>
            <div className="border-r-[2.5px] pr-10">
              <h3 className="text-[40px] font-bold">2,000+</h3>
              <p className="opacity-[60%]">Products</p>
            </div>
            <div>
              <h3 className="text-[40px] font-bold">30,000+</h3>
              <p className="opacity-[60%]">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="absolute w-[104px] -right-3 top-16"
            src={star}
            alt="star"
          />
          <img
            className="absolute w-[56px] -left-3 top-[300px]"
            src={star}
            alt="star"
          />
          <img className="mt-2" src={hero_img} alt="hero_image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
