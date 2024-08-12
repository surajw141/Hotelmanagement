import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./EmailInput.css";

const EmailInput = ({ className = "" }) => {
  return (
    <div className={`email-input ${className}`}>
      <div className="email-input-child" />
      <div className="facebook-sign-in-wrapper">
        <TextField
          className="facebook-sign-in"
          placeholder={`Check in  -> Check out`}
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#000" },
            "& .MuiInputBase-root": {
              height: "45px",
              backgroundColor: "#d9d9d9",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "25px",
            },
            "& .MuiInputBase-input": { color: "#8c8c8c" },
          }}
        />
      </div>
      <TextField
        className="google-icon-container"
        placeholder="Guests 1"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#000" },
          "& .MuiInputBase-root": {
            height: "45px",
            backgroundColor: "#d9d9d9",
            borderRadius: "0px 0px 0px 0px",
            fontSize: "25px",
          },
          "& .MuiInputBase-input": { color: "#8c8c8c" },
          width: "412px",
        }}
      />
      <div className="password-input1">
        <div className="password-input-child" />
        <div className="check-availability">Check Availability</div>
      </div>
    </div>
  );
};

EmailInput.propTypes = {
  className: PropTypes.string,
};

export default EmailInput;
