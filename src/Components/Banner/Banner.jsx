import bannarImg from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="mx-auto w-11/12">
      <div className="bg-[#9538E2] pt-12 rounded-b-3xl">
        <h3 className="text-6xl max-w-6xl mx-auto text-center font-bold text-[#FFFFFF] mb-6">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h3>
        <p className="text-[#FFFFFF] max-w-3xl mx-auto text-center mb-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex items-center justify-center pb-72">
          <button className="btn rounded-full font-bold bg-[#FFFFFF] text-[#9538E2]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="absolute top-[350px] left-[600px] border-2 p-4 rounded-2xl bg-[rgba(255,255,255,0.3)]">
        <img className="mx-w-[1110px] max-h-[450px] rounded-2xl" src={bannarImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;