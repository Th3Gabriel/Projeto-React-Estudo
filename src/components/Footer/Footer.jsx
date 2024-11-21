import { Link } from "react-router-dom";

//CSS
import "./Footer.css";

//ASSETS
import BrasilIcon from "../../assets/brasil-icon.svg";
import EuaIcon from "../../assets/eua-icon.svg";
import FacebookIcon from "../../assets/facebook-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import LinkedinIcon from "../../assets/linkedin-icon.svg";
import TwitterIcon from "../../assets/twitter-icon.svg";
import Logo from "../../assets/dnc-logo.svg";

import { AppContext } from "../../contexts/AppContext";
import { useContext } from "react";
import Button from "../Button/Button";

function Footer() {
  const appContext = useContext(AppContext);

  const changeLanguage = (country) => {
    appContext.setLanguage(country);
  };
  return (
    <footer>
      <div className="container">
        <div className="d-flex jc-space-between mobile-fd-column">
          <div className="footer-logo-col">
            <img src={Logo} className="footer-logo" />
            <p className="grey-color">
              {appContext.languages[appContext.language].general.footerLogoText}
            </p>
            <div className="d-flex social-links">
              <a href="#" target="_blank">
                <img src={FacebookIcon} />
              </a>
              <a href="#" target="_blank">
                <img src={TwitterIcon} />
              </a>
              <a href="#" target="_blank">
                <img src={LinkedinIcon} />
              </a>
              <a href="#" target="_blank">
                <img src={InstagramIcon} />
              </a>
            </div>
          </div>
          <div className="d-flex mobile-fd-column">
            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].general.pages}</h3>
              <ul>
                <li>
                  <Link to="/">
                    {appContext.languages[appContext.language].menu.home}
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    {appContext.languages[appContext.language].menu.about}
                  </Link>
                </li>
                <li>
                  <Link to="/Projects">
                    {appContext.languages[appContext.language].menu.projects}
                  </Link>
                </li>
                <li>
                  <Link to="/Contact">
                    {appContext.languages[appContext.language].menu.contact}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>
                {" "}
                {appContext.languages[appContext.language].menu.contact}{" "}
              </h3>
              <p className="grey-color">
                R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP
                12243-030
              </p>
              <p className="grey-color">suporte@escoladnc.com.b</p>
              <p className="grey-color">(19) 99187-4342</p>
            </div>
          </div>
        </div>
        <div className="d-flex jc-space-between footer-copy">
          <p className="grey-color">Copyright © DNC - 2024</p>

          <div className="langs-area d-flex">
            <Button buttonStyle="unstyled" onClick={() => changeLanguage("br")}>
              <img src={BrasilIcon} height="29px" />
            </Button>

            <Button buttonStyle="unstyled" onClick={() => changeLanguage("en")}>
              <img src={EuaIcon} height="29px" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
