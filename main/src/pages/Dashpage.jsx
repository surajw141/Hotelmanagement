import SignUpContainer from "../components/SignUpContainer";
import EmailInput from "../components/EmailInput";
import "./Dashpage.css";

const Dashpage = () => {
  return (
    <div className="dashpage">
      <img className="room-1-icon" alt="" src="/room-1@2x.png" />
      <SignUpContainer />
      <section className="dashpage-inner">
        <div className="frame-parent">
          <div className="frame-wrapper">
            <div className="modern-spacious-rooms-parent">
              <h1 className="modern-spacious">{`MODERN & SPACIOUS ROOMS`}</h1>
              <div className="enjoy-your-holidays-at-the-hot-wrapper">
                <div className="enjoy-your-holidays">
                  Enjoy your holidays at the Hotel
                </div>
              </div>
            </div>
          </div>
          <EmailInput />
        </div>
      </section>
    </div>
  );
};

export default Dashpage;
