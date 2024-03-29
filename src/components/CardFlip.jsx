import React, { useRef } from "react";

const CardFlip = () => {
  const aboutMeRef = useRef(null);

  const flipCard = () => {
    // Reset the scroll position of the about me side when flipping the card
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollTop = 0;
    }
  };

  return (
    <section className="h-[250px] md:h-[400px] w-[250px] md:w-[400px] flex flex-col justify-center items-center text-white overflow-hidden rounded-xl bg-tertiary shadow-lg shadow-primary">
      <div className="w-[250px] md:h-[400px] h-[250px] md:w-[400px] cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 border-primary shadow-primary shadow-lg w-full h-full rounded-xl">
            <img
              src="/hero.png"
              className="w-full h-full rounded-xl"
              alt="Hero"
            />
          </div>
          <div
            ref={aboutMeRef}
            className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-auto bg-tertiary rounded-xl scrollbar-hide border-primary border-solid border-2"
          >
            <div className="flex flex-col items-center h-full p-2">
              <h1 className="text-2xl md:text-4xl font-thin text-primary font-secondary underline">
                About Me
              </h1>
              <p className="font-secondary font-light text-primary text-xs md:text-lg p-2">
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
      <p className="text-center">Click Me!</p>
    </section>
  );
};

export default CardFlip;
