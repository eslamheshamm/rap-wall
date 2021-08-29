import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";
const ProgressBar = (props) => {
	const { file, setFile } = props;
	const { url, progress } = useStorage(file);
	console.log(progress, url, "hi");
	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url, setFile]);
	return (
		<motion.div
			className={`${
				progress < 50
					? " bg-red-500"
					: progress < 80
					? " bg-yellow-500"
					: "bg-green-500"
			} h-3 rounded-3xl `}
			initial={{ width: 0 }}
			animate={{ width: progress + "%" }}
		></motion.div>
	);
};
export default ProgressBar;
