 
import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../Animationcomponent/Animation.js";
import Heroimage from "../assets/hero (1).png"

const Hero = () => {
  return (
    <section>
      <div className="  bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[500px]">
        {/* text */}
        <div className="flex flex-col justify-center  xl:pr-40 mt-2">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideUp(0.5)}
              initial="initial"
              whileInView="animate"
              className="text-5xl font-bold text-darkBlue"
            >
              Covid-19 Risk Assessment Tool
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className=" tert-lg text-gray-500 mt-3"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda pariatur dicta non optio? Id aut ipsam, alias incidunt
              nihil beatae unde blanditiis deleniti laudantium eveniet
              accusamus, aliquid distinctio dolores possimus.
            </motion.p>
            <div className="mt-3">
              <motion.button
                variants={SlideUp(0.5)}
                initial="initial"
                whileInView="animate"
                className="border border-gray-400 px-6 py-4 rounded-lg w-fit  mx-auto md:mx-0  text-white bg-primary font-bold hover:shadow-lg transform duration-200"
              >
                See How to use it
              </motion.button>
            </div>
          </div>
        </div>
        {/* img */}
        <div>
          <motion.img
            variants={SlideRight(0.6)}
            initial="initial"
            whileInView="animate"
            src={Heroimage}
            alt="Layout"
            className="w-25"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero