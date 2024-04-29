import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import heroImage from "../../assets/images/hero_banner.jpg";
import heroImageTitle from "../../assets/images/hero_title.png";
import playIcon from "../../assets/images/play_icon.png";
import infoIcon from "../../assets/images/info_icon.png";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={heroImage} alt="banner image" className="hero__img" />
        <div className="hero-caption">
          <img
            src={heroImageTitle}
            alt="caption image"
            className="hero-caption__img"
          />
          <p className="hero-caption__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde
            explicabo velit debitis officiis. Doloremque a cum impedit laborum
            officia vero obcaecati consequatur fuga, sint reiciendis quo fugit
            quam error.
          </p>
          <div className="hero-btns">
            <button className="hero-btn">
              <img src={playIcon} alt="play icon" />
              Play
            </button>
            <button className="hero-btn dark-btn">
              <img src={infoIcon} alt="info icon" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
