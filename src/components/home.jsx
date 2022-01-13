import "./home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to my store</h1>
      <h3>Check our amazing catalog</h3>
      <Link className="btn  btn-lg btn-primary" to="catalog">
        {" "}
        View catalog{" "}
        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
      </Link>

      <div className="home-images">
        <div className="home-image1">
          <img className="image1" src="./images/homeimage1.jpg" alt="pc"></img>
        </div>

        <div className="home-image2">
          <img className="image2" src="./images/homeimage3.jpg" alt="pc"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
