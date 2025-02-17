import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import {  motion } from "framer-motion";
import {SlideUp } from "../Animationcomponent/Animation.js";

const Trust = () => {
  return (
    <section className="bg-brandWhite py-10 mt-20">
      <div className="container">
        <div className=" py-4 flex justify-center items-center">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-bold text-3xl text-darkBlue "
          >
            Why you can trust this tool
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-5">
          <motion.div
            variants={SlideUp(0.5)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-cente md:text-left md:px-32"
          >
            <img src={Icon1} alt="" className="mx-auto md:mx-0" />
            <p className=" text-3xl font-semibold">Based on reliable sources</p>
            <p className="">
              We want our tool to be safe and reliable, so its logic is based on
              the official global information provided by the WHO.
            </p>
            <p className="text-sm text-gray-400">
              Enchance your preliminary diagnosis and triage with pediatric
              content <span className="text-primary"> Learnmore</span>
            </p>
          </motion.div>

          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-cente md:text-left md:px-32"
          >
            <img src={Icon2} alt="" className="mx-auto md:mx-0" />
            <p className="text-3xl font-semibold mt-2">
              Based on reliable sources
            </p>
            <p className="">
              We want our tool to be safe and reliable, so its logic is based on
              the official global information provided by the WHO.
            </p>
            <p className="text-sm text-gray-400">
              Enchance your preliminary diagnosis and triage with pediatric
              content <span className="text-primary"> Learnmore</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
