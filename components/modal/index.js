import React from "react";
import { motion } from "framer-motion";
const Modal = (props) => {
	const { selectedImage, setSelectedImage } = props;
	const handleClose = (e) => {
		if (e.target.classList.contains("fixed")) {
			setSelectedImage(null);
		}
	};
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="fixed top-0 left-0 w-full h-full min-h-screen bg-black bg-opacity-30"
			onClick={handleClose}
		>
			<motion.img
				initial={{ scale: 0.2 }}
				animate={{ scale: 1 }}
				src={selectedImage}
				alt="enlarged pic"
				className=" max-w-[80%] max-h-[80%]  my-20 mx-auto drop-shadow-lg  "
			/>
		</motion.div>
	);
};
export default Modal;
