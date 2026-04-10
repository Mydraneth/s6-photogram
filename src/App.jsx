/* React kütüphanesinden useState'i import et */
import { useState } from "react";
/* İlgili dosyadan sampleData'yı import et */
import sampleData from "./sampleData";
/* İlgili dosyadan PostList'i import et */
import "./App.css";
import PostList from "./components/PostList";

function App() {
	/* Bir state oluştur, sampleData bu state'in başlangıç değeri olmalı  */
	const [posts, setPosts] = useState(sampleData);

	function handleClap(postId) {
		/*
      state oluşturduktan sonra:
      - alttaki kodda place ve setPlace'i kendi verdiğin isimlerle değiştir
      - kodu yorumdan çıkar
    */
		const copyState = [...posts];
		const clappedItem = copyState.filter((item) => item.id === postId)[0];
		clappedItem.claps = clappedItem.claps + 1;
		setPosts(copyState);
	}

	return (
		<div className="page-container">
			<div className="page-header">
				<h1>photogram.</h1>
			</div>
			<PostList items={posts} clapAction={handleClap} />
		</div>
	);
}

export default App;
