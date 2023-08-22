import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const VideoPopup = ({ spaceBottomClass }) => {
  const [modalStatus, isOpen] = useState(false);
  return (
    <div className={clsx("video-popup", spaceBottomClass)}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="video-popup__content" style={{marginLeft:"260px",marginTop:"-175px"}}>
              <ModalVideo
                channel="youtube"
                isOpen={modalStatus}
                videoId="feOScd2HdiU"
                onClose={() => isOpen(false)}
              />
              <button onClick={() => isOpen(true)}>
                <i className="fa fa-play-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VideoPopup.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default VideoPopup;
