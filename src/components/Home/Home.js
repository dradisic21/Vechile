import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/vechilelist");
      };

  return (
    <div className="container">

      <div className="content">
        <div className="content_text">
        <h1 className="home_title">European Cars</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button 
        onClick={handleClick}
        className="btn">
          Get Started{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8H15M15 8L8 1M15 8L8 15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        </div>
        <div>
          <div className="circle"></div>
          <div className="image">
              <img src="../../assets/image/wallpaper2.png" className="img" alt="car"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
