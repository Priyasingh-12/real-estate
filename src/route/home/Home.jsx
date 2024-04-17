import React from "react";
import homo from "../../assets/homo.jpg";
import greenhouse from "../../assets/greenhouse.jpg";
import myhome from "../../assets/myhome.jpg";
import bal from "../../assets/bal.png";
import Chatbot from './Chatbot';

import "./home.css";

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="left-part">
        <div className="LeftTitle">
          Let Us Help You <br /> To Choose <br /> The Best.
        </div>
        <div className="LeftSubTitle">
          In expecting It is a long established fact that a reader will be
          distracted by the readable content of a page. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default
          model text.
        </div>
        <div className="leftButton">
          <button class="LeftButtons1">Learn More</button>
          <button class="LeftButtons2">
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="PlayCircleRoundedIcon"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 14.67V9.33c0-.79.88-1.27 1.54-.84l4.15 2.67c.61.39.61 1.29 0 1.68l-4.15 2.67c-.66.43-1.54-.05-1.54-.84z"></path>
            </svg>{" "}
            Watch Video
          </button>
        </div>
      </div>

      {/* =========================   rightpart  ================= */}
      <div className="img-content">
        <div className="img-container">
          <div className="rightImg1">
            <img
              src={homo}
              alt="my home"
              className="rightImg1"
              height="230px"
              width="260px"
            />
          </div>
          <div className="rightImg2">
            <img
              src={greenhouse}
              alt="my home"
              className="rightImg2"
              width="320px"
              height="320px"
            />
          </div>
        </div>

        <div className="rightImg3">
          <img
            src={myhome}
            className="rightImg3"
            alt="my homes"
            height="455px"
            width="490px"
          />
        </div>

        <div className="rightImg4">
          <img
            src={bal}
            className="rightImg4"
            alt="my homes"
            height="230px"
            width="260px"
          />
        </div>
      </div>
      <Chatbot/>
    </div>


  );
};

export default Home;
