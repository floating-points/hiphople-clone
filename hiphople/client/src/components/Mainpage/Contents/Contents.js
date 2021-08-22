import React from "react";
import "./contents.scss";

import img1 from "../../img/cake-1589012_1920.jpg";
import img2 from "../../img/girl-711087_1920.jpg";
import img3 from "../../img/concert-5736160_1920.jpg";
import img4 from "../../img/concert-316381_1280.jpg";

const Contents = () => {
  return (
    <div className="contents-container">
      <div className="contents-container-title">
        CONTENTS & CURATION
      </div>
      <div className="contents-category">
        <div className="contents-category-inner">국내</div>
        <div className="contents-category-outer">국외</div>
        <div className="contents-category-video">비디오</div>
        <div className="contents-category-feature">피쳐</div>
      </div>
      <div className="contents-container-features">
        <div className="contents-features-first-container">
          <div className="contents-feature-box-container">
            <div className="contents-feature-image">
              <img src={img1} />
            </div>
            <div className="contents-feature-information"></div>
          </div>
          <div className="contents-feature-box-container">
            <div className="contents-feature-image">
              <img src={img2} />
            </div>
            <div></div>
          </div>
          <div className="contents-feature-box-container">
            <div className="contents-feature-image">
              <img src={img3} />
            </div>
            <div></div>
          </div>
          <div className="contents-feature-box-container">
            <div className="contents-feature-image">
              <img src={img4} />
            </div>
            <div></div>
          </div>
        </div>
        <div className="contents-features-second-container">
          <div className="contents-features-box-container"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="contents">
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Contents;
