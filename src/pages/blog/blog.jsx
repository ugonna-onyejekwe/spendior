import "./blog.scss";

import EastIcon from "@mui/icons-material/East";

import blog1 from "../img/img1.jpg";
import blog2 from "../img/gallary6.jpg";
import blog3 from "../img/fitness.jpg";

export const Blog = () => {
  return (
    <div className="blog">
      <div className="row1 box">
        <div className="container">
          <div className="txt">
            <h2> slendior is one of the most visited hotel</h2>

            <p className="date">
              1/12/2023 <span>by angela</span>
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              aliquid mollitia placeat ut non temporibus suscipit dolorum, fuga
              nemo? Nam, architecto amet obcaecati iusto sapiente nostrum
              excepturi minima culpa officia?
            </p>
            <div className="btn">
              <button>
                read more <EastIcon className="arrow" />
              </button>
            </div>
          </div>
          <div className="img">
            <img src={blog1} />
          </div>
        </div>
      </div>

      <div className="row2 box">
        <div className="container">
          <div className="txt">
            <h2> splendior new event hall</h2>

            <p className="date">
              10/12/2023 <span>by paul</span>
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              aliquid mollitia placeat ut non temporibus suscipit dolorum, fuga
              nemo? Nam, architecto amet obcaecati iusto sapiente nostrum
              excepturi minima culpa officia?
            </p>
            <div className="btn">
              <button>
                read more <EastIcon className="arrow" />
              </button>
            </div>
          </div>
          <div className="img">
            <img src={blog2} />
          </div>
        </div>
      </div>

      <div className="row3 box">
        <div className="container">
          <div className="txt">
            <h2> new level of fitness facilites</h2>

            <p className="date">
              5/12/2023 <span>by mark</span>
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              aliquid mollitia placeat ut non temporibus suscipit dolorum, fuga
              nemo? Nam, architecto amet obcaecati iusto sapiente nostrum
              excepturi minima culpa officia?
            </p>
            <div className="btn">
              <button>
                read more <EastIcon className="arrow" />
              </button>
            </div>
          </div>
          <div className="img">
            <img src={blog3} />
          </div>
        </div>
      </div>
    </div>
  );
};
