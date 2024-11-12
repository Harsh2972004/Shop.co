import versace from "../assets/images/versace.png";
import zara_logo from "../assets/images/zara_logo.png";
import gucci_logo from "../assets/images/gucci_logo.png";
import prada_logo from "../assets/images/prada_logo.png";
import ck_logo from "../assets/images/ck_logo.png";

const Brands = () => {
  return (
    <section className="bg-black relative z-10">
      <div className="h-[122px] container">
        <img src={versace} alt="versace-logo" />
        <img src={zara_logo} alt="zara-logo" />
        <img src={gucci_logo} alt="gucci_logo" />
        <img src={prada_logo} alt="prada_logo" />
        <img src={ck_logo} alt="ck_logo" />
      </div>
    </section>
  );
};

export default Brands;
