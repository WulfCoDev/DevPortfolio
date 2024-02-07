import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CardFlip from "./CardFlip";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-evenly items-center w-full h-screen"
    >
      <motion.h1
        className="text-primary font-secondary text-6xl font-thin mt-10"
        variants={fadeIn("down", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        Hello
      </motion.h1>
      <div className="flex justify-center items-center flex-col">
        <motion.p
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="font-secondary font-thin text-primary text-lg"
        >
          My name is
        </motion.p>
        <motion.p
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="font-quad text-[#928c92] text-4xl "
        >
          CHRISTIAN ALEXANDER
        </motion.p>
      </div>

      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0.25 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        viewport={{ once: false, amount: 0.7 }}
      >
        <CardFlip />
      </motion.div>
      <div className="flex justify-center items-center flex-col">
        <motion.p
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mr-4 text-primary font-secondary font-thin text-lg"
        >
          I am a
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.8)}
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
    </div>
  );
};

export default Hero;
