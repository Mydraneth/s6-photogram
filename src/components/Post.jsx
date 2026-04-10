import { HandsClappingIcon } from "@phosphor-icons/react";
import PostComment from "./PostComment";
/* İlgili dosyadan PostComment'i import et */

//  {
//     id: 1,
//     username: "philzarts",
//     imageUrl:
//       "https://cdn.assets.lomography.com/f9/2c698eabc272f7eb46e8b8683265866f3aaa0b/576x576x2.jpg?auth=7d9ffeedc90df2964a7df47b5e12d96ff84bf829",
//     claps: 410,
//     timestamp: "July 17th",
//     comments: [
//       {
//         id: 22,
//         username: "jennycloser",
//         text:
//           "The interplay of light and shadow creates such profound depth here. There's something timeless about how monochrome strips away distractions and lets us focus purely on emotion and composition.",
//       },
//       {
//         id: 23,
//         username: "biancasaurus",
//         text:
//           "This has that classic film noir aesthetic that never gets old. The contrast is stunning - those deep blacks against the crisp whites tell a story all on their own.",
//       },
//       {
//         id: 24,
//         username: "martinseludo",
//         text:
//           "Black and white photography has this incredible ability to reveal the soul of a moment. Without color, we're forced to see the raw essence of what's captured.",
//       },
//     ],
//   },
/* PostList componentı bu componenta props olarak ne gönderiyor, incele ve kodun geri kalanını buna göre düzenle. */
export default function Post(props) {
	const { item, onClap } = props;
	return (
		<div className="post">
			<img src={item.imageUrl} alt={item.username} />
			<div className="post-header">
				<span className="post-owner">{item.username}</span>
				<span>&middot;</span>
				<span className="post-date">{item.timestamp}</span>
				<button
					className="post-clap"
					onClick={() => {
						onClap(item.id);
					}}
				>
					<HandsClappingIcon />
					<span>{item.claps}</span>
				</button>
			</div>
			<div className="post-comments">
				{
					/*
          Postun comments arrayini, PostComment ve map metodu kullanarak listele.
          - key vermeyi unutma, değer olarak id'yi kullanabilirsin.
          - map metodu ve key kullanımını PostList dosyasından öğrenebilirsin.
          - PostComment'e props olarak 1 tane veri göndermen bekleniyor. Ne göndermelisin? sampleData'yı inceleyerek bulabilirsin.
        */
					item.comments.map((comment) => (
						<PostComment key={comment.id} comment={comment} />
					))
				}
			</div>
		</div>
	);
}
