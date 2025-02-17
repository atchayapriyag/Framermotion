import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { SlideLeft } from "../Animationcomponent/Animation";

const Navbar = () => {
  return (
    <header className="mt-1">
      <div className="container flex items-center justify-between py-5">
        {/* logo */}
        <motion.div
          variants={SlideLeft(0.4)}
          initial="initial"
          whileInView="animate"
        >
          <img src={Logo} alt="medico" className="w-36 " />
        </motion.div>
        {/* Navlink */}

        <ul className="hidden md:flex items-center gap-8">
          <motion.li
            variants={SlideLeft(0.4)}
            initial="initial"
            whileInView="animate"
          >
            <a href="#">Products</a>
          </motion.li>

          <motion.li
            variants={SlideLeft(0.4)}
            initial="initial"
            whileInView="animate"
          >
            <a href="#">Customer Stories</a>
          </motion.li>

          <motion.li
            variants={SlideLeft(0.4)}
            initial="initial"
            whileInView="animate"
          >
            <a href="#">About</a>
          </motion.li>

          <motion.li
            variants={SlideLeft(0.4)}
            initial="initial"
            whileInView="animate"
          >
            <a href="#">Blog</a>
          </motion.li>
        </ul>

        {/* button */}
        <div>
          <motion.button
            variants={SlideLeft(0.4)}
            initial="initial"
            whileInView="animate"
            className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
