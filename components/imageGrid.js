import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = (props) => {
	const { setSelectedImage } = props;
	const { docs } = useFirestore("images");
	console.log(docs);
	return (
		<article className="grid grid-cols-3 gap-10 w-11/12 mx-auto">
			{docs &&
				docs.map((doc) => (
					<motion.div
						key={doc.id}
						layout
						whileHover={{ opacity: 1 }}
						className=" aspect-w-1 aspect-h-1  w-ful h-full opacity-80"
						onClick={() => setSelectedImage(doc.url)}
					>
						<motion.img
							initial={{
								opacity: 0,
							}}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
							src={doc.url}
							alt="new"
							className=" w-full h-full object-cover "
						/>
					</motion.div>
				))}
		</article>
	);
};
export default ImageGrid;
