import "./about.css";
import Award from "../../img/award.png";
import main from "../../img/main.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={main} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Us</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          We create custom made and Responsive Websites, Mobile Friendly,
          Content Management System and Search Engine Optimization. We listen to
          our client need and provide them the best solution that is tailored to
          their industry needs.
        </p>
      </div>
    </div>
  );
};

export default About;
