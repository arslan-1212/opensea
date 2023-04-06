import React from "react";
import back_art from "../Assets/art_back.avif";
import "./Explore_art.css"
import goof1 from "../Assets/wilde.avif";
import goof2 from "../Assets/wilde_small.avif";
import goof3 from "../Assets/other.avif";
import goof4 from "../Assets/other_small.avif";
import goof5 from "../Assets/goof_small.avif";
import goof6 from "../Assets/goof.avif";
import goof7 from "../Assets/bored.avif";
import goof8 from "../Assets/bored_small.avif";
import goof9 from "../Assets/gimme.avif";
import goof10 from "../Assets/gimme_small.avif";
import goof11 from "../Assets/savage.avif";
import goof12 from "../Assets/savage_small.avif";
import goof13 from "../Assets/rext.webp";
import goof14 from "../Assets/rext_small.avif";
import Trending_main from "../Trending_main/Trending_main";
function Explore_art(props) {
  return (
    <div className="mb-5 pt-5">
      <div>
        <img src={props.art} width="100%" alt="" />
      </div>
      
        <div className="px-2 px-md-5 pt-2">
        <div className="trand text-start">
          <h2 className="">Trending collections</h2>
        </div>
        <div className="row m-0 mt-5">
      
          <div className="col-md-4">
            <Trending_main
              url={goof9}
              secondUrl={goof10}
              title="Mutant Hound Collars"
            />
          </div>
          <div className="col-md-4">
            <Trending_main
              url={goof7}
              title="Trump Digital Trading Cards"
              secondUrl={goof8}
            />
          </div>
          <div className="col-md-4">
            <Trending_main url={goof6} secondUrl={goof5} title="Wolf Game" />
          </div>
        </div>

        <div className="row m-0 mt-5">
      
          <div className="col-md-4">
            <Trending_main url={goof11} secondUrl={goof12} title="Wolf Game" />
          </div>
          <div className="col-md-4">
            <Trending_main
              url={goof13}
              secondUrl={goof14}
              title="Mutant Hound Collars"
            />
          </div>
          <div className="col-md-4">
            <Trending_main
              url={goof3}
              secondUrl={goof4}
              title="Mutant Hound Collars"
            />
          </div>
        </div>

        <div className="row m-0 mt-5">
          <div className="col-md-4">
            <Trending_main
              url={goof1}
              title="Trump Digital Trading Cards"
              secondUrl={goof2}
            />
          </div>
        
          <div className="col-md-4">
            <Trending_main
              url="https://i.seadn.io/gae/KvlgKf6LLnjB1-m6jewIZz4e66VW5NWewtUXECDnTPYzOTuCWSsiQ8QhqFQ1TWzGbVwlczgGtjVrCKoj4nzdH8WJCM1w4QLVJseOkIQ?auto=format&w=2048"
              secondUrl="https://i.seadn.io/gae/Jt0pP1TzhfUrG52l_Ffe0I8KcPWmaUjk14W3R1UuuHM4BJfqS4jBkfv9-euuMQRLxNS44PvV3V_ZtMgkAhS4bBkK8FeFW2qDh-TM6A?auto=format&w=128"
              title="Wolf Game"
            />
          </div>
          <div className="col-md-4">
            <Trending_main
              url="https://i.seadn.io/gcs/files/2754ce09410ac26f95a1c44e2719dc6f.jpg?auto=format&w=3840"
              secondUrl="https://i.seadn.io/gcs/files/f980181df268011a4491137fc71afdb5.jpg?auto=format&w=128"
              title="Trump Digital Trading Cards"
            />
          </div>
        </div>

      
        <div className="row m-0 mt-5">
          <div className="col-md-4">
            <Trending_main
              url="https://i.seadn.io/gcs/files/86fd57236ca5539ede498e2b5abb2ca7.png?auto=format&w=2048"
              title="Trump Digital Trading Cards"
              secondUrl="https://i.seadn.io/gcs/files/84aeda61734ec5126c8eedd88872ebb8.png?auto=format&w=128"
            />
          </div>
          <div className="col-md-4">
            <Trending_main
              url="https://i.seadn.io/gcs/files/685fbc921e4ae5b3a6017829a2426aac.jpg?auto=format&w=3840"
              secondUrl="https://i.seadn.io/gcs/files/baa3587972e4c666cd8f8e214379b0b1.jpg?auto=format&w=256"
              title="Mutant Hound Collars"
            />
          </div>
          <div className="col-md-4">
            <Trending_main
              url="https://i.seadn.io/gcs/files/f1c896f15955b69e7b759bf8ea8a2118.png?auto=format&w=3840"
              secondUrl="https://i.seadn.io/gcs/files/2491ef33b7163325c3d80a1782d2b681.png?auto=format&w=256"
              title="Wolf Game"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Explore_art;
