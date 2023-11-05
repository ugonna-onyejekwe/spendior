import "./contact.scss";

import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EastIcon from "@mui/icons-material/East";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_container container">
        <div className="row1">
          <div>
            <h4>get in touch </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              praesentium perspiciatis laborum.
            </p>
          </div>
          <div>
            <h4>phone number</h4>
            <p>
              <PhoneIcon className="icon" /> +234 8101 3308 34
            </p>
          </div>
          <div>
            <h4>location</h4>
            <p>
              <LocationOnIcon className="icon" /> 1 odinigwe street lekki, lagos
            </p>
          </div>
        </div>
        <div className="row2">
          <h3>contact us</h3>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <textarea
            placeholder="leave a massage"
            cols="30"
            rows="10"
          ></textarea>
          <button>
            submit <EastIcon className="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
