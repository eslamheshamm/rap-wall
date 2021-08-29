import React, { useState } from "react";

import Head from "next/head";
import UploadForm from "../components/form";
import ImageGrid from "../components/imageGrid";
import Modal from "../components/modal";

export default function Home() {
	const [selectedImage, setSelectedImage] = useState(null);
	return (
		<div className="min-h-screen">
			<Head>
				<title>Rap Gallery</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<article className="flex flex-col items-center justify-center w-full my-5">
					<UploadForm />
				</article>
				<ImageGrid setSelectedImage={setSelectedImage} />
				{selectedImage && (
					<Modal
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
					/>
				)}
			</main>
		</div>
	);
}
