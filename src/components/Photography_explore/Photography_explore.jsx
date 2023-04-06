import React from "react";
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
function Photography_explore() {
  return (
    <div className="">
   


      <div className="row">

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
          <Trending_main url={goof11} secondUrl={goof12} title="Wolf Game" />
        </div>
      </div>
      <div className="row">
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
      <div className="row">
        <div className="col-md-4">
          <Trending_main
            url={goof1}
            title="Trump Digital Trading Cards"
            secondUrl={goof2}
          />
        </div>
        <div className="col-md-4">
          <Trending_main
            url={goof3}
            secondUrl={goof4}
            title="Mutant Hound Collars"
          />
        </div>
        <div className="col-md-4">
          <Trending_main url={goof6} secondUrl={goof5} title="Wolf Game" />
        </div>
      </div>

      
    </div>
  );
}

export default Photography_explore;
