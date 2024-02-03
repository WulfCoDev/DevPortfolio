const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white font-quad text-2xl">Hello</h1>
      <div className="h-[200px] w-[200px]">
        <img
          className="rounded-xl shadow-xl shadow-[#292f2b]"
          src="src/assets/hero.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
