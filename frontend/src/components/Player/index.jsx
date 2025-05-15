import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faForwardStep,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Player() {
  return (
    <div className="player">
      <div className="player__controlers">
        <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        <FontAwesomeIcon className="player__icon player__icon--play" icon={faPlay} />
        <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
      </div>
      <div className="player__bar"></div>
      <div className="player__progress">
        <div className="player__time">
          <div>00:00</div>
          <div>02:50</div>
        </div>
      </div>
    </div>
  );
}
export default Player;
