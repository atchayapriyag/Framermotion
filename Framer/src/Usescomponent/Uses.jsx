
import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";
import { motion } from "framer-motion";
import { SlideLeft } from "../Animationcomponent/Animation";

const Uses = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="order-last md:order-first flex  flex-col justify-center items-center xl:pr-14">
            <motion.h1
              variants={SlideLeft(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-3xl font-bold text-darkBlue"
            >
              How it Helps people
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className=" text-gray-600 mt-4"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              magni, sed deleniti voluptate alias optio architecto quaerat,
              consequuntur qui accusamus, doloremque laboriosam animiem.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-sm text-gray-600 mt-4"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <a href="#" className="text-primary">
                Learn More
              </a>
            </motion.p>
            <motion.button
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300"
            >
              Get in Touch
            </motion.button>
          </div>

          <motion.div
            variants={SlideLeft(0.4)}
            initial="initial"
            whileInView="animate"
          >
            <img src={Img1} alt="" className="w-full rounded-3xl " />
            <p className="text-gray-400 mt-4">Coronavirus</p>
          </motion.div>

          <motion.div
            variants={SlideLeft(0.5)}
            initial="initial"
            whileInView="animate"
          >
            <img src={Img2} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">Diagnostic</p>
          </motion.div>

          <motion.div
            variants={SlideLeft(0.6)}
            initial="initial"
            whileInView="animate"
          >
            <img src={Img3} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">Symptoms</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Uses