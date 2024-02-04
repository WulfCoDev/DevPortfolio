const Hero = () => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-6 w-full h-[100svh]"
      style={{
        background:
          "radial-gradient(circle, rgba(169,213,242,0.75) 0%, rgba(0,0,0,0) 55%)",
      }}
    >
      <h1 className="text-secondary font-quad text-4xl mb-2">Hello</h1>
      <p className="font-tertiary text-primary">My name is</p>
      <p className="font-quad text-secondary text-4xl ">Christian Alexander</p>
      <div className="h-[150px] w-[150px] m-2">
        <img
          className="rounded-xl shadow-xl shadow-[#292f2b]"
          src="/hero.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
