import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./SignUpContainer.css";

const SignUpContainer = ({ className = "" }) => {
  return (
    <header className={`sign-up-container ${className}`}>
      <div className="sign-up-container-child" />
      <img
        className="image-2-icon1"
        loading="lazy"
        alt=""
        src="/image-2@2x.png"
      />
      <div className="sign-up-container-inner">
        <div className="frame-group">
          <nav className="frame-container">
            <nav className="home-parent">
              <a className="home">Home</a>
              <a className="room-details">Room Details</a>
              <div className="blog-parent">
                <a className="blog">Blog</a>
                <a className="pages">Pages</a>
              </div>
              <a className="room-details">Contact us</a>
            </nav>
          </nav>
          <Button
            className="password-input"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "25",
              background: "#484848",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#484848" },
              width: 234,
              height: 51,
            }}
          >
            Book Online
          </Button>
        </div>
      </div>
    </header>
  );
};

SignUpContainer.propTypes = {
  className: PropTypes.string,
};

export default SignUpContainer;
