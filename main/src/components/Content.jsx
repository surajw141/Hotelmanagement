import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <form className={`content ${className}`}>
      <div className="shape" />
      <div className="image-2-wrapper">
        <img
          className="image-2-icon"
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
      <div className="form">
        <div className="button-container">
          <div className="log-in">Log in</div>
        </div>
        <div className="input-fields">
          <div className="credentials">
            <div className="name">Name</div>
          </div>
          <input className="input-border" type="text" />
        </div>
        <div className="input-fields">
          <div className="password-wrapper">
            <div className="password">Password</div>
          </div>
          <input className="input-border" type="text" />
        </div>
      </div>
      <Button
        className="action"
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "28",
          background: "#484848",
          borderRadius: "25px",
          "&:hover": { background: "#484848" },
          width: 600,
          height: 60,
        }}
      >
        Log in
      </Button>
    </form>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
