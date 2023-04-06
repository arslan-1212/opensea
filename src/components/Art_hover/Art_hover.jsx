import React from "react";
import Explore_art from "../Explore_art/Explore_art";
import back_art from "../Assets/art_back.avif";
function Art_hover() {
  return (
    <div className="">
      <Explore_art
        art={back_art}
        head_art="Explore Art"
        para_1="An online community of makers, developers, and traders is pushing the art world into new territory. It all started with CryptoPunks, a set of 10,000 randomly generated punks that proved demand for the digital ownership of non-physical items and collectibles in 2017, and the market has evolved rapidly ever since."
        para_2="As the underlying technology develops, a growing pool of artists are selling verified, immutable works to art lovers and speculators, and the space as a whole is waking up to the power and potential of decentralized networks and currencies. With creators and collectors generating meaningful revenue through an entirely digital ecosystem, the tokenization of gifs, memes, and MP4s is emerging as the most exciting and relevant blockchain use case. From SuperRare to Josie to JOY, browse and trade NFTs from some of the world's top crypto artists on OpenSea"
        />
    </div>
  );
}

export default Art_hover;
