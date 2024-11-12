import CloseIcon from "@mui/icons-material/Close";

const DiscountPrompt = () => {
  return (
    <div className="bg-black w-full h-[38px] text-white flex centered">
      <div className="text-[14px] w-full centered relative">
        <span>
          Sign up and get 20% off to your first order.{" "}
          <a href="" className=" underline">
            Sign Up Now{" "}
          </a>
        </span>
        <CloseIcon
          style={{ position: "absolute", right: "100px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default DiscountPrompt;
