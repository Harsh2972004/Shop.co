interface props {
  image: string;
  title: string;
  rating: number;
  price: number;
}

const ProductCard = ({ image, title, rating, price }: props) => {
  return (
    <div>
      <div className="bg-[#f0eeed] rounded-2xl">
        <img src={image} alt="t-shirt-with-detailed-tape" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{rating}</p>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
