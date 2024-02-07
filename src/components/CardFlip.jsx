const CardFlip = () => {
  return (
    <section className="h-[250px] w-[250px] flex justify-center items-center text-white overflow-auto rounded-xl">
      <div className="w-[250px] h-[250px] cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 border-primary shadow-primary shadow-lg w-full h-full rounded-xl">
            <img src="/hero.png" className="w-full h-full rounded-xl" />
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-fit h-fit bg-tertiary rounded-xl">
            <div className="flex flex-col items-center h-full p-2">
              <h1 className="text-2xl font-thin text-primary font-secondary underline">
                About Me
              </h1>
              <p className="font-secondary font-light text-primary text-xs p-2">
                I am a Fullstack Developer (front-end focused) with a background
                in IT/Tech repair along with over a decade of graphic design
                experience. I am seeking remote opportunities as a Web Developer
                or Software Engineer. What drew me to web development is the
                ability to express my creativity whilst leveraging my design
                skills from my graphic design experience. On the other hand, web
                development succumbs my need for problem-solving and constant
                self-evolution; growth. In my free time, you can find me
                sim-racing or just hanging out with friends on Discord. I also
                enjoy making 3D prints and other things such as custom stickers,
                clothes, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardFlip;
