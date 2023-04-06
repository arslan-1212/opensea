import React from "react";
import Explore_art from "../Explore_art/Explore_art";
import back9 from "../Assets/back9.avif";
function Virtual_hover() {
  return (
    <div>
      <Explore_art
        art={back9}
        head_art="Explore Virtual World NFTs"
        para_1="Secure your spot in one of the many virtual worlds and alternate realities, where you can own land parcels, wearables, and more."
        // para_2="As the underlying technology develops, a growing pool of artists are selling verified, immutable works to art lovers and speculators, and the space as a whole is waking up to the power and potential of decentralized networks and currencies. With creators and collectors generating meaningful revenue through an entirely digital ecosystem, the tokenization of gifs, memes, and MP4s is emerging as the most exciting and relevant blockchain use case. From SuperRare to Josie to JOY, browse and trade NFTs from some of the world's top crypto artists on OpenSea"
        />
    </div>
  );
}

export default Virtual_hover;