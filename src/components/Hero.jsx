import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100svh]">
      <motion.h1
        className="text-primary font-secondary text-6xl mb-2 font-thin"
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        Hello
      </motion.h1>
      <motion.p
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="font-secondary font-thin text-primary text-lg"
      >
        My name is
      </motion.p>
      <motion.p
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="font-quad text-[#928c92] text-4xl "
      >
        CHRISTIAN ALEXANDER
      </motion.p>
      <div className="h-[200px] w-[200px] m-2">
        <motion.img
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="rounded-xl shadow-lg shadow-secondary"
          src="/hero.png"
          alt=""
        />
      </div>
      <motion.p
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mr-4 text-primary font-secondary font-thin text-lg"
      >
        I am a
      </motion.p>
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
          wrapper="p"
          repeat={Infinity}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
