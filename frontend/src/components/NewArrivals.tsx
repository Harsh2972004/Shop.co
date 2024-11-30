import t_with_tape from "../assets/images/products/t-with-tape.png";
import skinny_jeans from "../assets/images/products/skinny_jeans.png";
import sleeve_t from "../assets/images/products/sleeve-stripped-t.png";
import checkered_t from "../assets/images/products/checkered-shirt.png";
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
          rating={4.5}
          price={120}
        />
        <ProductCard
          image={skinny_jeans}
          title="Skinny Fit Jeans"
          rating={2}
          price={240}
        />
        <ProductCard
          image={checkered_t}
          title="Checkered Shirt"
          rating={2}
          price={180}
        />
        <ProductCard image={sleeve_t} title="Sleeved" rating={2} price={130} />
      </div>
    </section>
  );
};

export default NewArrivals;
