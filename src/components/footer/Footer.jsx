import React from "react";
import "./Footer.css";
import youtubeIcon from "../../assets/images/youtube_icon.png";
import twitterIcon from "../../assets/images/twitter_icon.png";
import instagramIcon from "../../assets/images/instagram_icon.png";
import facebookIcon from "../../assets/images/facebook_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <img src={facebookIcon} alt="facebook icon" className="footer__icon" />
        <img
          src={instagramIcon}
          alt="instagram icon"
          className="footer__icon"
        />
        <img src={twitterIcon} alt="twitter icon" className="footer__icon" />
        <img src={youtubeIcon} alt="youtube icon" className="footer__icon" />
      </div>
      <ul className="footer-menu__list">
        <li className="footer-menu__item">Audio Description</li>
        <li className="footer-menu__item">Help Center</li>
        <li className="footer-menu__item">Gift Cards</li>
        <li className="footer-menu__item">Media Center</li>
        <li className="footer-menu__item">Investor Relations</li>
        <li className="footer-menu__item">Jobs</li>
        <li className="footer-menu__item">Terms of Use</li>
        <li className="footer-menu__item">Privacy</li>
        <li className="footer-menu__item">Legal Notices</li>
        <li className="footer-menu__item">Cookie Preferences</li>
        <li className="footer-menu__item">Corporate Information</li>
        <li className="footer-menu__item">Contact Us</li>
      </ul>
      <p className="copyright-text"> &copy; 1997-2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
