import React from "react";
import Explore_art from "../Explore_art/Explore_art";
import back8 from "../Assets/back8.avif";
function Utilityhover() {
  return (
    <div>
      <Explore_art
        art={back8}
        head_art="Explore Utility NFTs"
        para_1="From redeemable rewards to membership NFTs, explore a wide range of utility items that unlock access to special and unique benefits."
        // para_2="As the underlying technology develops, a growing pool of artists are selling verified, immutable works to art lovers and speculators, and the space as a whole is waking up to the power and potential of decentralized networks and currencies. With creators and collectors generating meaningful revenue through an entirely digital ecosystem, the tokenization of gifs, memes, and MP4s is emerging as the most exciting and relevant blockchain use case. From SuperRare to Josie to JOY, browse and trade NFTs from some of the world's top crypto artists on OpenSea"
        />
    </div>
  );
}

export default Utilityhover;