import "./footer.scss";
import { Link } from "react-router-dom";

import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="col1">
          <h1 className="logo">
            splen<span>dior</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            rem enim, iusto nemo, officia, ipsam beatae consequatur id vel ea ex
            ducimus perspiciatis deserunt hic culpa consequuntur odit unde?
            Ullam.
          </p>
        </div>

        <div className="col2">
          <h4>quick links</h4>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/rooms">room</Link>
          <Link to="/services">service</Link>
          <Link to="/blog">blog</Link>
          <Link to="/contact">contact us</Link>
        </div>

        <div className="col3">
          <h4>connect</h4>
          <p>
            <PhoneIcon className="icon" /> +234 8101 3308 34
          </p>
          <p>
            <LocationOnIcon className="icon" /> 1 odinigwe street lekki, lagos
          </p>
        </div>

        <div className="col4">
          <div className="input">
            <h5>subscribe to our newsletter</h5>
            <div>
              <input type="text" />
              <span className="btn">
                <SendIcon className="icon" />
              </span>
            </div>
          </div>
          <div className="social">
            <FacebookIcon className="icon" />
            <TwitterIcon className="icon" />
            <InstagramIcon className="icon" />
            <EmailIcon className="icon" />
            <WhatsAppIcon className="icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};
