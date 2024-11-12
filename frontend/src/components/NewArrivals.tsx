import t_with_tape from "../assets/images/products/t-with-tape.png";
import skinny_jeans from "../assets/images/products/skinny_jeans.png";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  return (
    <section className=" container centered flex-col mt-12">
      <h1 className="font-integral font-bold text-[48px] text-center">
        New Arrivals
      </h1>
      <div className="!px-0 container">
        <ProductCard
          image={t_with_tape}
          title="T-Shirt With Detailed-tape"
          rating={2}
          price={232}
        />
        <ProductCard image={skinny_jeans} title="sdad" rating={2} price={232} />
        <ProductCard image={t_with_tape} title="sdad" rating={2} price={232} />
        <ProductCard image={t_with_tape} title="sdad" rating={2} price={232} />
      </div>
    </section>
  );
};

export default NewArrivals;
