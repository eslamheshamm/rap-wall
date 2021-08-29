import React, { useState } from "react";
import ProgressBar from "../progressbar";
import { motion } from "framer-motion";
const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const types = ["image/png", "image/jpeg"];
	const changeHandler = (e) => {
		let selectedFile = e.target.files[0];
		if (selectedFile && types.includes(selectedFile.type)) {
			setFile(selectedFile);
			setError("");
		} else {
			setFile(null);
			setError("Please select an image file (png or jpeg)");
		}
	};
	return (
		<form className="">
			<motion.label
				className="w-4 h-4 rounded-full hover:cursor-pointer border-2  border-black  p-8 text-2xl font-black flex justify-center items-center"
				initial={{
					color: "white",
					backgroundColor: "transparent",
				}}
				whileHover={{ backgroundColor: "black", color: "white" }}
				transition={{ duration: 3 }}
			>
				<input type="file" onChange={changeHandler} hidden />
				<span>+</span>
			</motion.label>
			{error && <p className="uppercase text-red-600">{error}</p>}
			{file && <p className="mt-4">{file.name}</p>}
			{file && <ProgressBar file={file} setFile={setFile} />}
		</form>
	);
};

export default UploadForm;
