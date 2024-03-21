import {
  SiVite,
  SiHtml5,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiReactrouter,
  SiNodedotjs,
  SiFramer,
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = () => {
  return (
    <div id="projects" className="h-fit w-full py-4np">
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="font-secondary font-thin text-primary text-4xl m-4"
      >
        Projects
      </motion.h1>
      <div className="flex flex-col justify-center items-center space-y-8 py-4">
        <a
          href="https://wulfcorealty.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            variants={fadeIn("center", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-[80vw] h-fit bg-slate-500 flex flex-col justify-center items-center rounded-lg shadow-lg shadow-primary border-primary border-2"
          >
            <div className="h-[25vh] w-[75vw] bg-realty bg-cover bg-no-repeat flex justify-center items-center border-primary border-2 mt-2 rounded-lg">
              <p className="text-white backdrop-blur-sm bg-black/10 font-semibold text-2xl text-center ml-4 mr-4 p-2 rounded-lg">
                WulfCo Realty
              </p>
            </div>
            <p className="p-2 font-primary text-white indent-4">
              A website built to allow users to search for properties for sale
              in a given city and state. The data provided is from Zillow's
              database.
            </p>
            <p className="p-2 font-primary text-white">Tech Stack:</p>
            <div className="flex space-x-4 p-4 text-white">
              <SiVite /> <SiHtml5 /> <SiTailwindcss /> <SiReact />{" "}
              <SiTypescript /> <SiNodedotjs /> <SiReactrouter />
            </div>
          </motion.div>
        </a>

        <a
          href="https://wulfco-tetris.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            variants={fadeIn("center", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-[80vw] h-fit bg-slate-500 flex flex-col justify-center items-center rounded-lg shadow-lg shadow-primary border-primary border-2"
          >
            <div className="h-[25vh] w-[75vw] bg-tetris bg-center bg-cover bg-no-repeat flex justify-center items-center border-primary border-2 mt-2 rounded-lg">
              <p className="text-white backdrop-blur-sm bg-black/10 font-semibold text-2xl text-center ml-4 mr-4 p-2 rounded-lg">
                WulfCo Tetris
              </p>
            </div>
            <p className="p-2 font-primary text-white indent-4">
              A tetris game built while learning logic and state principles.
              Will add an arcade style leaderboard feature soon.
            </p>
            <p className="p-2 font-primary text-white">Tech Stack:</p>
            <div className="flex space-x-4 p-4 text-white">
              <SiVite /> <SiHtml5 /> <SiTailwindcss /> <SiReact />{" "}
              <SiNodedotjs /> <SiReactrouter />
            </div>
          </motion.div>
        </a>

        <a
          href="https://prettienpink.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            variants={fadeIn("center", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-[80vw] h-fit bg-slate-500 flex flex-col justify-center items-center rounded-lg shadow-lg shadow-primary border-primary border-2"
          >
            <div className="h-[25vh] w-[75vw] bg-pip bg-cover bg-no-repeat flex justify-center items-center border-primary border-2 mt-2 rounded-lg">
              <p className="text-white backdrop-blur-sm bg-black/10 font-semibold text-2xl text-center ml-4 mr-4 p-2 rounded-lg">
                Prettie in Pink
              </p>
            </div>
            <p className="p-2 font-primary text-white indent-4">
              A menu/scheduling website built for a client for their
              estheticians business.
            </p>
            <p className="p-2 font-primary text-white">Tech Stack:</p>
            <div className="flex space-x-4 p-4 text-white">
              <SiVite /> <SiHtml5 /> <SiTailwindcss /> <SiReact />{" "}
              <SiNodedotjs /> <SiReactrouter />
            </div>
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
