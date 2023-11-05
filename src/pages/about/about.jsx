import "./about.scss";

import StarRateIcon from "@mui/icons-material/StarRate";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SingleBedIcon from "@mui/icons-material/SingleBed";

import img1 from "../img/gallary1.jpg";
import img2 from "../img/about.jpg";
import img3 from "../img/gallary2.jpg";
import img4 from "../img/room4.jpg";
import staff1 from "../img/person1.jpg";
import staff2 from "../img/person2.jpg";
import staff3 from "../img/person3.jpg";
import staff4 from "../img/person4.jpg";
import staff5 from "../img/person5.jpg";
import staff6 from "../img/person6.jpg";
import avater1 from "../img/avater1.jpeg";
import avater2 from "../img/avater2.jpeg";
import avater3 from "../img/avater3.jpeg";
import avater4 from "../img/avater4.jpeg";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const About = () => {
  return (
    <div className="about_page">
      <div className="about_container">
        <div className="container">
          <div className="txt">
            <span className="title">
              <span>
                <StarRateIcon className="icon" />
                <StarRateIcon className="icon" />
                <StarRateIcon className="icon" />
                <StarRateIcon className="icon" />
                <StarRateIcon className="icon" />
              </span>
              <span>welcome to our hotel</span>
            </span>
            <h2>Few words about our hotel</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              impedit aliquid fugit dicta iste cupiditate id illo atque ratione
              iusto, soluta voluptate quibusdam tempora doloribus voluptas
              eveniet fuga pariatur! Dolorem.
            </p>

            <div className="boxes">
              <div className="box">
                <SentimentSatisfiedAltIcon className="icon" />
                <h4>50,000</h4>
                <p>happy guest</p>
              </div>

              <div className="box">
                <SingleBedIcon className="icon" />

                <h4>1000</h4>
                <p>rooms</p>
              </div>

              <div className="box">
                <EngineeringIcon className="icon" />

                <h4>500</h4>
                <p>staffs</p>
              </div>
            </div>

            <div className="socail">
              <FacebookIcon className="icon" />
              <TwitterIcon className="icon" />
              <InstagramIcon className="icon" />
              <EmailIcon className="icon" />
            </div>
          </div>
          <div className="img">
            <div className="box">
              <img src={img1} alt="img" />
            </div>

            <div className="box">
              <img src={img2} alt="img" />
            </div>

            <div className="box">
              <img src={img3} alt="img" />
            </div>

            <div className="box">
              <img src={img4} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="staffs_section">
        <div className="staffs_container container">
          <h2>our amazing staffs</h2>

          <Swiper
            className="wrapper"
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            speed={1200}
            breakpoints={{
              500: {
                slidesPerView: 1,
              },
              550: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 3,
              },

              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {/* box1 */}
            <SwiperSlide className="box">
              <div className="img">
                <img src={staff1} alt="img" />
                <div className="social">
                  <FacebookIcon className="icon" />
                  <TwitterIcon className="icon" />
                  <InstagramIcon className="icon" />
                </div>
              </div>
              <div className="txt">
                <h4>mrs. jane quavo</h4> <p>sales manager</p>
              </div>
            </SwiperSlide>

            {/* box2 */}
            <SwiperSlide className="box">
              <div className="img">
                <img src={staff2} alt="img" />
                <div className="social">
                  <FacebookIcon className="icon" />
                  <TwitterIcon className="icon" />
                  <InstagramIcon className="icon" />
                </div>
              </div>
              <div className="txt">
                <h4>mr. paul walker</h4> <p>marketing manager</p>
              </div>
            </SwiperSlide>

            {/* box3 */}
            <SwiperSlide className="box">
              <div className="img">
                <img src={staff3} alt="img" />
                <div className="social">
                  <FacebookIcon className="icon" />
                  <TwitterIcon className="icon" />
                  <InstagramIcon className="icon" />
                </div>
              </div>
              <div className="txt">
                <h4>mrs. precious zike</h4> <p>head chef</p>
              </div>
            </SwiperSlide>

            {/* box4 */}
            <SwiperSlide className="box">
              <div className="img">
                <img src={staff4} alt="img" />
                <div className="social">
                  <FacebookIcon className="icon" />
                  <TwitterIcon className="icon" />
                  <InstagramIcon className="icon" />
                </div>
              </div>
              <div className="txt">
                <h4>dr. innocent mark</h4> <p>general manager</p>
              </div>
            </SwiperSlide>

            {/* box5 */}
            <SwiperSlide className="box">
              <div className="img">
                <img src={staff5} alt="img" />
                <div className="social">
                  <FacebookIcon className="icon" />
                  <TwitterIcon className="icon" />
                  <InstagramIcon className="icon" />
                </div>
              </div>
              <div className="txt">
                <h4>mr. victor gowen</h4> <p>revenue manager</p>
              </div>
            </SwiperSlide>

            {/* box6 */}
            <SwiperSlide className="box">
              <div className="img">
                <img src={staff6} alt="img" />
                <div className="social">
                  <FacebookIcon className="icon" />
                  <TwitterIcon className="icon" />
                  <InstagramIcon className="icon" />
                </div>
              </div>
              <div className="txt">
                <h4>mr. danial josh</h4> <p>acountant</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="review_section">
        <div className="review_container container">
          <h2>customers reviews</h2>

          <Swiper
            className="wrapper"
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            speed={1200}
            loop={true}
          >
            {/* box1 */}
            <SwiperSlide className="box">
              <div className="img">
                <img src={avater1} alt="img" />
              </div>
              <div className="txt">
                <h4>
                  gift mandela <span>reporter</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  veritatis tempore dicta commodi. In, necessitatibus sint?
                  Nostrum qui itaque ipsa temporibus voluptate rem explicabo
                  ipsum culpa blanditiis. Exercitationem, aliquam molestias!
                </p>
              </div>
            </SwiperSlide>

            {/* box2 */}
            <SwiperSlide className="box">
              <div className="img">
                <img src={avater2} alt="img" />
              </div>
              <div className="txt">
                <h4>
                  mr. mark finadez <span>doctor</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  veritatis tempore dicta commodi. In, necessitatibus sint?
                  Nostrum qui itaque ipsa temporibus voluptate rem explicabo
                  ipsum culpa blanditiis. Exercitationem, aliquam molestias!
                </p>
              </div>
            </SwiperSlide>

            {/* box3 */}
            <SwiperSlide className="box">
              <div className="img">
                <img src={avater3} alt="img" />
              </div>
              <div className="txt">
                <h4>
                  angela bieber <span>enterprenuer</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  veritatis tempore dicta commodi. In, necessitatibus sint?
                  Nostrum qui itaque ipsa temporibus voluptate rem explicabo
                  ipsum culpa blanditiis. Exercitationem, aliquam molestias!
                </p>
              </div>
            </SwiperSlide>

            {/* box4 */}
            <SwiperSlide className="box">
              <div className="img">
                <img src={avater4} alt="img" />
              </div>
              <div className="txt">
                <h4>
                  john fisher <span>enterprenuer</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  veritatis tempore dicta commodi. In, necessitatibus sint?
                  Nostrum qui itaque ipsa temporibus voluptate rem explicabo
                  ipsum culpa blanditiis. Exercitationem, aliquam molestias!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
