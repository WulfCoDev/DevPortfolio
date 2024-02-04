import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 w-full h-[100svh]">
      <h1 className="text-primary font-secondary text-4xl mb-2">Hello</h1>
      <p className="font-secondary text-primary text-sm">My name is</p>
      <p className="font-quad text-[#928c92] text-4xl ">CHRISTIAN ALEXANDER</p>
      <div className="h-[200px] w-[200px] m-2">
        <img
          className="rounded-xl shadow-xl shadow-[#292f2b]"
          src="/hero.png"
          alt=""
        />
      </div>
      <span className="mr-4 text-primary font-secondary">I am a</span>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mb-6 text-[36px] lg:text-[60px] uppercase leading-[1] flex flex-col"
      >
        <TypeAnimation
          sequence={[
            "Developer",
            2000,
            "Problem-Solver",
            2000,
            "Critical Thinker",
            2000,
            "Gamer",
            2000,
            "Sim Racer",
            2000,
          ]}
          speed={50}
          className="text-[#928c92] font-quad"
          wrapper="span"
          repeat={Infinity}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
