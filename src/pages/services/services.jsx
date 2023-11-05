import "./services.scss";

import game from "../img/game.jpg";
import laundry from "../img/laundry.jpg";
import catering from "../img/catering.jpg";
import hall from "../img/gallary6.jpg";
import pool from "../img/gallary7.jpg";
import fitness from "../img/fitness.jpg";
import parking from "../img/parking.jpg";
// import img1 from "../img/about.jpg";
// import img1 from "../img/about.jpg";

export const Services = () => {
  return (
    <div className="services">
      <div className="row box1">
        <div className="container">
          <div className="txt">
            <h2>we have well equipt and functional game facilities</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              repellendus libero inventore est at laboriosam dolore error ullam
              harum. Praesentium enim porro ducimus, dignissimos explicabo
              distinctio hic voluptas quasi perspiciatis?
            </p>
          </div>
          <div className="img">
            <img src={game} alt="img" />
          </div>
        </div>
      </div>

      <div className="row box2">
        <div className="container">
          <div className="txt">
            <h2>we have well equipt and functional fitness facilities</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              repellendus libero inventore est at laboriosam dolore error ullam
              harum. Praesentium enim porro ducimus, dignissimos explicabo
              distinctio hic voluptas quasi perspiciatis?
            </p>
          </div>
          <div className="img">
            <img src={fitness} alt="img" />
          </div>
        </div>
      </div>

      <div className="row box3">
        <div className="container">
          <div className="txt">
            <h2>our catering service are top notch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              repellendus libero inventore est at laboriosam dolore error ullam
              harum. Praesentium enim porro ducimus, dignissimos explicabo
              distinctio hic voluptas quasi perspiciatis?
            </p>
          </div>
          <div className="img">
            <img src={catering} alt="img" />
          </div>
        </div>
      </div>

      <div className="row box4">
        <div className="container">
          <div className="txt">
            <h2>free parking space avaliable</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              repellendus libero inventore est at laboriosam dolore error ullam
              harum. Praesentium enim porro ducimus, dignissimos explicabo
              distinctio hic voluptas quasi perspiciatis?
            </p>
          </div>
          <div className="img">
            <img src={parking} alt="img" />
          </div>
        </div>
      </div>

      <div className="row box5">
        <div className="container">
          <div className="txt">
            <h2>well organized event hall</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              repellendus libero inventore est at laboriosam dolore error ullam
              harum. Praesentium enim porro ducimus, dignissimos explicabo
              distinctio hic voluptas quasi perspiciatis?
            </p>
          </div>
          <div className="img">
            <img src={hall} alt="img" />
          </div>
        </div>
      </div>

      <div className="row box6">
        <div className="container">
          <div className="txt">
            <h2>free laundry services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              repellendus libero inventore est at laboriosam dolore error ullam
              harum. Praesentium enim porro ducimus, dignissimos explicabo
              distinctio hic voluptas quasi perspiciatis?
            </p>
          </div>
          <div className="img">
            <img src={laundry} alt="img" />
          </div>
        </div>
      </div>

      <div className="row box7">
        <div className="container">
          <div className="txt">
            <h2>swimming pool facilities avaliable</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              repellendus libero inventore est at laboriosam dolore error ullam
              harum. Praesentium enim porro ducimus, dignissimos explicabo
              distinctio hic voluptas quasi perspiciatis?
            </p>
          </div>
          <div className="img">
            <img src={pool} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
