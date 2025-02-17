
import Card  from "../Howithelpscomponent/Card";
import Icon1 from "../assets/1 (1).png";
import Icon2 from "../assets/2 (1).png";
import Icon3 from "../assets/3 (1).png";
import { motion } from "framer-motion";
import { SlideLeft ,SlideRight} from "../Animationcomponent/Animation";

const Howit = () => {
  return (
    <section>
      <div className="container py-15 my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
              <motion.div
                variants={SlideLeft(0.4)}
                initial="initial"
                whileInView="animate"
              >
                <Card
                  icon={Icon1}
                  heading="Symptoms"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                />
              </motion.div>

              <motion.div
                variants={SlideLeft(0.5)}
                initial="initial"
                whileInView="animate"
              >
                <Card
                  icon={Icon2}
                  heading="Recommendations"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                />
              </motion.div>

              <motion.div
                variants={SlideLeft(0.6)}
                initial="initial"
                whileInView="animate"
              >
                <Card
                  icon={Icon3}
                  heading="Local information"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={SlideRight(0.6)}
            initial="initial"
            whileInView="animate"
          >
            <h1 className="text-3xl font-bold text-darkBlue">
              How it Helps people
            </h1>
            <motion.p
              variants={SlideRight(0.4)}
              initial="initial"
              whileInView="animate"
              className=" text-gray-600 mt-4"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              magni, sed deleniti voluptate alias optio architecto quaerat,
              consequuntur qui accusamus, doloremque laboriosam animiem.
            </motion.p>
            <motion.p
              variants={SlideRight(0.5)}
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
              variants={SlideRight(0.6)}
              initial="initial"
              whileInView="animate"
              className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Howit