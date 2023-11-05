import "./home.scss";

import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import WifiIcon from "@mui/icons-material/Wifi";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import EastIcon from "@mui/icons-material/East";

import img1 from "../img/img1.jpg";
import about from "../img/about.jpg";
import room1 from "../img/room1.jpg";
import room2 from "../img/room3.jpg";
import room3 from "../img/room2.jpg";
import room4 from "../img/room4.jpg";
import g1 from "../img/gallary1.jpg";
import g2 from "../img/gallary2.jpg";
import g3 from "../img/gallary3.jpg";
import g4 from "../img/gallary4.jpg";
import g5 from "../img/gallary5.jpg";
import g6 from "../img/gallary6.jpg";
import g7 from "../img/gallary7.jpg";
import g8 from "../img/gallary8.jpg";
import g9 from "../img/gallary9.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const Home = () => {
  return (
    <>
      {/* home page starts */}
      <div className="home">
        <div className="img">
          <img src={img1} />
        </div>

        <div className="container">
          <div className="txt">
            <h1>Experience A New Level Of Luxury.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id
              iusto magni labore ducimus ipsum iure laudantium, earum deleniti
              repudiandae corrupti expedita assumenda quas soluta, quisquam odit
              facere, dolorum vel.
            </p>

            <div className="btn">
              <button>
                explore rooms <EastIcon className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* home page starts */}

      {/* about page starts */}
      <div className="about">
        <div className="about_container container">
          <div className="img">
            <img src={about} />
          </div>

          <div className="txt">
            <span className="title">welcome to our hotel</span>
            <h2>
              about
              <h2 className="name">
                Splen<span className="name2">dior</span>
              </h2>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda repellat voluptatum perspiciatis rem! Voluptatibus
              necessitatibus illum sunt voluptates. Consequatur quos modi
              repellendus praesentium ut itaque, dolorum quae laborum cumque
              doloremque? Itaque eaque quae quod voluptate odit natus molestias
              repellendus. Blanditiis reiciendis modi veniam cupiditate
              laboriosam illum, amet obcaecati, quod incidunt sequi ex alias
              accusamus similique. Vero pariatur eveniet error itaque.
            </p>
            <div className="btn">
              <button>
                read more <EastIcon className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* about page ends */}

      {/* room page starts */}
      <div className="room">
        <div className="room_container container">
          <h2>expore our rooms</h2>

          <Swiper
            className="wrapper"
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            speed={1200}
            loop={true}
            breakpoints={{
              700: {
                slidesPerView: 2,
              },
            }}
          >
            {/* box1 */}
            <SwiperSlide className="box">
              <img src={room1} />
              <div className="txt">
                <h4>classic room</h4>
                <h3>
                  $100<span>/night</span>
                </h3>
                <div className="details">
                  <p>
                    <span>size:</span> 20ft
                  </p>
                  <p>
                    <span>capacity:</span>2 persons
                  </p>
                  <p>
                    <span>bed: </span>normal bed
                  </p>
                  <p>
                    <span>service: </span>wifi, television....
                  </p>

                  <button>more details</button>
                </div>
              </div>
            </SwiperSlide>

            {/* box2 */}
            <SwiperSlide className="box">
              <img src={room2} />
              <div className="txt">
                <h4>family room</h4>
                <h3>
                  $150<span>/night</span>
                </h3>
                <div className="details">
                  <p>
                    <span>size:</span> 25ft
                  </p>
                  <p>
                    <span>capacity:</span>3 persons
                  </p>
                  <p>
                    <span>bed: </span>normal bed
                  </p>
                  <p>
                    <span>service: </span>wifi, television....
                  </p>

                  <button>more details</button>
                </div>
              </div>
            </SwiperSlide>
            {/* box3 */}
            <SwiperSlide className="box">
              <img src={room3} />
              <div className="txt">
                <h4>deluxe room</h4>
                <h3>
                  $160<span>/night</span>
                </h3>
                <div className="details">
                  <p>
                    <span>size:</span> 30ft
                  </p>
                  <p>
                    <span>capacity:</span>4 persons
                  </p>
                  <p>
                    <span>bed: </span> bed
                  </p>
                  <p>
                    <span>service: </span>wifi, television....
                  </p>

                  <button>more details</button>
                </div>
              </div>
            </SwiperSlide>
            {/* box4 */}
            <SwiperSlide className="box">
              <img src={room4} />
              <div className="txt">
                <h4>superior room</h4>
                <h3>
                  $190<span>/night</span>
                </h3>
                <div className="details">
                  <p>
                    <span>size:</span> 30ft
                  </p>
                  <p>
                    <span>capacity:</span>5 persons
                  </p>
                  <p>
                    <span>bed: </span>king bed
                  </p>
                  <p>
                    <span>service: </span>wifi, television....
                  </p>

                  <button>more details</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="btn">
            <button className="more">
              see more <EastIcon className="arrow" />
            </button>
          </div>
        </div>
      </div>
      {/* room page ends */}

      {/* service page starts */}
      <div className="services">
        <div className="services_container container">
          <h2>our services & amenities</h2>
          <div className="wrapper">
            {/* box1 */}
            <div className="box">
              <SportsTennisIcon className="icon" />
              <h3>gaming facilites</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, quos. Omnis, nulla deleniti reiciendis quis
                distinctio corrupti!
              </p>
            </div>

            {/* box2 */}
            <div className="box">
              <FitnessCenterIcon className="icon" />
              <h3>fitness facilites</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, quos. Omnis, nulla deleniti reiciendis quis
                distinctio corrupti!
              </p>
            </div>

            {/* box1 */}
            <div className="box">
              <RestaurantIcon className="icon" />
              <h3>cartering services</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, quos. Omnis, nulla deleniti reiciendis quis
                distinctio corrupti!
              </p>
            </div>

            {/* box1 */}
            <div className="box">
              <DirectionsCarIcon className="icon" />
              <h3>free self-parking</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, quos. Omnis, nulla deleniti reiciendis quis
                distinctio corrupti!
              </p>
            </div>

            {/* box1 */}
            <div className="box">
              <ApartmentIcon className="icon" />
              <h3>event hall</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, quos. Omnis, nulla deleniti reiciendis quis
                distinctio corrupti!
              </p>
            </div>

            {/* box1 */}
            <div className="box">
              <WifiIcon className="icon" />
              <h3>wifi in public area</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, quos. Omnis, nulla deleniti reiciendis quis
                distinctio corrupti!
              </p>
            </div>

            {/* box1 */}
            <div className="box">
              <Groups2OutlinedIcon className="icon" />
              <h3>meeting room</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, quos. Omnis, nulla deleniti reiciendis quis
                distinctio corrupti!
              </p>
            </div>

            {/* box1 */}
            <div className="box">
              <LocalLaundryServiceOutlinedIcon className="icon" />
              <h3>laundry and valent services</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, quos. Omnis, nulla deleniti reiciendis quis
                distinctio corrupti!
              </p>
            </div>

            {/* box1 */}
            <div className="box">
              <LocalCarWashIcon className="icon" />
              <h3>free car wash services</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, quos. Omnis, nulla deleniti reiciendis quis
                distinctio corrupti!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* service page ends */}

      {/* gallary container starts */}
      <div className="gallary">
        <div className="gallary_container container">
          <div className="txt">
            <h2>our gallary</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              fugiat maiores necessitatibus, repellat quae fuga esse adipisci
              illo perspiciatis nam eos corporis quo excepturi error odit, cum
              dolorum pariatur sed.
            </p>
          </div>
          <Swiper
            className="wrapper"
            modules={[Pagination, Autoplay]}
            speed={1200}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
          >
            {/* box1 */}
            <SwiperSlide className="box">
              <img src={g1} />
            </SwiperSlide>

            {/* box2 */}
            <SwiperSlide className="box">
              <img src={g2} />
            </SwiperSlide>

            {/* box3 */}
            <SwiperSlide className="box">
              <img src={g3} />
            </SwiperSlide>

            {/* box4 */}
            <SwiperSlide className="box">
              <img src={g4} />
            </SwiperSlide>

            {/* box5 */}
            <SwiperSlide className="box">
              <img src={g5} />
            </SwiperSlide>

            {/* box6 */}
            <SwiperSlide className="box">
              <img src={g6} />
            </SwiperSlide>

            {/* box7 */}
            <SwiperSlide className="box">
              <img src={g7} />
            </SwiperSlide>

            {/* box8 */}
            <SwiperSlide className="box">
              <img src={g8} />
            </SwiperSlide>

            {/* box9 */}
            <SwiperSlide className="box">
              <img src={g9} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* gallary container ends */}
    </>
  );
};
