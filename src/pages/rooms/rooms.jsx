import "./rooms.scss";

import EastIcon from "@mui/icons-material/East";
import AddHomeIcon from "@mui/icons-material/AddHome";

import room2 from "../img/room1.jpg";
import room5 from "../img/room2.jpg";
import room1 from "../img/room3.jpg";
import room8 from "../img/room4.jpg";
import room4 from "../img/room5.jpg";
import room6 from "../img/room6.jpg";
import room7 from "../img/gallary2.jpg";
import room3 from "../img/room8.jpg";
import { useState } from "react";

export const Rooms = () => {
  const [isActive, setIsActive] = useState(false);

  const activate = () => {
    setIsActive(isActive ? false : true);
  };
  return (
    <section className="rooms">
      <a
        href="#"
        className="check_icon"
        onClick={() => {
          activate();
        }}
      >
        <AddHomeIcon className="icon" />
      </a>
      <div className="rooms_container container">
        <div className={isActive ? "wrapper active" : "wrapper"}>
          {/* box1 */}
          <div className="box">
            <div className="img">
              <img src={room1} alt="img" />
            </div>
            <div className="txt">
              <section>
                <h4>mini suite</h4>
                <h3>
                  $100 <span>/night</span>
                </h3>
              </section>
              <div className="details">
                <p>
                  <span>size:</span> 20ft
                </p>
                <p>
                  <span>capacity:</span> 1
                </p>
                <p>
                  <span>bed:</span> 1
                </p>
                <p>
                  <span>services:</span> television, wifi.
                </p>
              </div>

              <div className="btn">
                <button>
                  book now <EastIcon className="arrow" />
                </button>
              </div>
            </div>
          </div>

          {/* box2 */}
          <div className="box">
            <div className="img">
              <img src={room2} alt="img" />
            </div>
            <div className="txt">
              <section>
                <h4> single room</h4>
                <h3>
                  $150 <span>/night</span>
                </h3>
              </section>
              <div className="details">
                <p>
                  <span>size:</span> 20ft
                </p>
                <p>
                  <span>capacity:</span> 1
                </p>
                <p>
                  <span>bed:</span> 1
                </p>
                <p>
                  <span>services:</span> television, wifi.
                </p>
              </div>

              <div className="btn">
                <button>
                  book now <EastIcon className="arrow" />
                </button>
              </div>
            </div>
          </div>

          {/* box3 */}
          <div className="box">
            <div className="img">
              <img src={room3} alt="img" />
            </div>
            <div className="txt">
              <section>
                <h4>family room</h4>
                <h3>
                  $200 <span>/night</span>
                </h3>
              </section>
              <div className="details">
                <p>
                  <span>size:</span> 25ft
                </p>
                <p>
                  <span>capacity:</span> 2
                </p>
                <p>
                  <span>bed:</span> 1
                </p>
                <p>
                  <span>services:</span> television, wifi.
                </p>
              </div>

              <div className="btn">
                <button>
                  book now <EastIcon className="arrow" />
                </button>
              </div>
            </div>
          </div>

          {/* box4 */}
          <div className="box">
            <div className="img">
              <img src={room4} alt="img" />
            </div>
            <div className="txt">
              <section>
                <h4>classic room</h4>
                <h3>
                  $250 <span>/night</span>
                </h3>
              </section>
              <div className="details">
                <p>
                  <span>size:</span> 25ft
                </p>
                <p>
                  <span>capacity:</span> 2
                </p>
                <p>
                  <span>bed:</span> 1
                </p>
                <p>
                  <span>services:</span> television, wifi, laundry services.
                </p>
              </div>

              <div className="btn">
                <button>
                  book now <EastIcon className="arrow" />
                </button>
              </div>
            </div>
          </div>

          {/* box5 */}
          <div className="box">
            <div className="img">
              <img src={room5} alt="img" />
            </div>
            <div className="txt">
              <section>
                <h4> deluxe room</h4>
                <h3>
                  $350 <span>/night</span>
                </h3>
              </section>
              <div className="details">
                <p>
                  <span>size:</span> 30ft
                </p>
                <p>
                  <span>capacity:</span> 3
                </p>
                <p>
                  <span>bed:</span> 2
                </p>
                <p>
                  <span>services:</span> television, wifi, laundry service,
                  buffer service, car wash service.
                </p>
              </div>

              <div className="btn">
                <button>
                  book now <EastIcon className="arrow" />
                </button>
              </div>
            </div>
          </div>

          {/* box 6 */}
          <div className="box">
            <div className="img">
              <img src={room6} alt="img" />
            </div>
            <div className="txt">
              <section>
                <h4> superior room</h4>
                <h3>
                  $430 <span>/night</span>
                </h3>
              </section>
              <div className="details">
                <p>
                  <span>size:</span> 35ft
                </p>
                <p>
                  <span>capacity:</span> 3
                </p>
                <p>
                  <span>bed:</span> 2
                </p>
                <p>
                  <span>services:</span> television, wifi, laundry service,
                  buffer service, car wash.
                </p>
              </div>

              <div className="btn">
                <button>
                  book now <EastIcon className="arrow" />
                </button>
              </div>
            </div>
          </div>
          {/* box7 */}
          <div className="box">
            <div className="img">
              <img src={room7} alt="img" />
            </div>
            <div className="txt">
              <section>
                <h4> executive suite</h4>
                <h3>
                  $550 <span>/night</span>
                </h3>
              </section>
              <div className="details">
                <p>
                  <span>size:</span> 35ft
                </p>
                <p>
                  <span>capacity:</span> 5
                </p>
                <p>
                  <span>bed:</span> kings bed
                </p>
                <p>
                  <span>services:</span> television, wifi, laundry service, car
                  wash, buffer service, health care.
                </p>
              </div>

              <div className="btn">
                <button>
                  book now <EastIcon className="arrow" />
                </button>
              </div>
            </div>
          </div>

          {/* box8 */}
          <div className="box">
            <div className="img">
              <img src={room8} alt="img" />
            </div>
            <div className="txt">
              <section>
                <h4> presidential suite</h4>
                <h3>
                  $1000 <span>/night</span>
                </h3>
              </section>
              <div className="details">
                <p>
                  <span>size:</span> 40ft
                </p>
                <p>
                  <span>capacity:</span> 5
                </p>
                <p>
                  <span>bed:</span> kings bed
                </p>
                <p>
                  <span>services:</span> television, wifi, laundry service, car
                  wash, buffer service, health care.
                </p>
              </div>

              <div className="btn">
                <button>
                  book now <EastIcon className="arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={isActive ? "form active" : "form"}>
          <h4>check availability</h4>
          <form>
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="last name" />

            <input type="email" placeholder="email" />
            <input type="number" placeholder="phone number" />

            <div>
              <input type="date" placeholder="check in date" />
              <input type="date" placeholder="check out date" />
            </div>

            <div>
              <section>
                <input type="select" placeholder="room type" />
                <ul>
                  <li>mini suite</li>
                  <li>single room</li>
                  <li>family room</li>
                  <li>classic room</li>
                  <li>deluxe room</li>
                  <li>superior room</li>
                  <li>executive suite</li>
                  <li>presidential suite</li>
                </ul>
              </section>
              <input
                className="room_no"
                type="number"
                placeholder="no. of rooms"
              />
            </div>

            <div className="box">
              <input type="number" placeholder="number of adult" />
              <input type="number" placeholder="number of children" />
            </div>
            <div className="btn">
              <button>
                check <EastIcon className="arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
