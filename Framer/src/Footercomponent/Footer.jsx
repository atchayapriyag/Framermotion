import Logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../Animationcomponent/Animation";

const Footer = () => {
  return (
    <div className="container py-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
      {/* brand info */}
      <div className="space-y-4">
        <img src={Logo} alt="Logo" className="w-40" />
        <motion.p
          variants={SlideLeft(0.5)}
          initial="initial"
          whileInView="animate"
          className="text-gray-400 xl:max-w-[400px]"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          voluptatum ut molestiae facere.
        </motion.p>
      </div>
      {/* social icons */}
      <motion.div
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className="flex space-x-6 text-3xl"
      >
        <FaFacebook className="hover:text-primary duration-200" />
        <FaInstagram className="hover:text-primary duration-200" />
        <FaLinkedin className="hover:text-primary duration-200" />
      </motion.div>
    </div>
  );
};

export default Footer;
