import "./Confirmed.scss";
import { ReactComponent as Verified } from "../assets/Verified.svg";
const Confirmed = () => {
  return (
    <div className="res-content-wrapper ">
      <div className="res-content-container confirmed">
        <div className="img-wrap">
          <h1 className="text">Your reservation is confirmed</h1>
          <p className="text">
            <b>Thank You.!</b> You're Reservation is confirmed and an email has been
            sent with reservation details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirmed;
