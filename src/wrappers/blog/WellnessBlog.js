import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import VideoPopup from "../../components/video-popup/VideoPopup";



const WellnessBlog = () => {
    //const [modalStatus, isOpen] = useState(false);
  return (
    <Fragment>
         <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="container">
        <div style={{height: "40px",borderTopLeftRadius: "10px",backgroundColor:"#172a53",borderTopRightRadius: "10px"}} ></div>
      <div class = "shadow p-3 mb-5 bg-white rounded" style={{width:"485px !important"}}>  
      <div className="row align-items-center justify-content-center">
          <div className="col-md-8 col-lg-6 order-2 order-lg-1" style={{width:"535px"}}>
            <div className="funfact-content funfact-res text-left">
            <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/Category"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/34.png"}
                  alt=""
                  style={{
                    marginTop: "-66px"
                }}
                  className="img-fluid"
                />
              </Link>
            </div>
              <h4>Physical Wellness</h4>
              <p className="pt-4 w-263" >
              Physical wellness encompasses a variety of healthy behaviors including adequate exercise, proper nutrition and abstaining from harmful habits such as drug use and alcohol abuse. 
               </p>
                {/* <div className="timer">
                <CountdownTimer date={dateTime} />
              </div> */}
             <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link to={process.env.PUBLIC_URL + "/Category"}>
                 View More
                </Link>
              </div>
            </div>
          </div>
         
        </div>
        </div>
      </div>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="container">
      <div style={{height: "40px",borderTopLeftRadius: "10px",backgroundColor:"#527991",borderTopRightRadius: "10px"}} ></div>
      <div class = "shadow p-3 mb-5 bg-white rounded" style={{width:"485px !important"}}>  
      <div className="row align-items-center justify-content-center">
          <div className="col-md-8 col-lg-6 order-2 order-lg-1" style={{width:"535px"}}>
            <div className="funfact-content funfact-res text-left">
            <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/social"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/35.png"}
                  alt=""
                  style={{
                    marginTop: "-66px"
                }}
                  className="img-fluid"
                />
              </Link>
            </div>
              <h4>Social Wellness</h4>
              <p className="pt-4 w-263" >
              Our relationships can offer support during difficult times. Social wellness involves building healthy, nurturing, and supportive relationships as well as fostering a genuine connection with those around you. 
               </p>
                {/* <div className="timer">
                <CountdownTimer date={dateTime} />
              </div> */}
             <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link to={process.env.PUBLIC_URL + "/social"}>
                 View More
                </Link>
              </div>
            </div>
          </div>
         
        </div>
        </div>
      </div>
    </div>


    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="container">
      <div style={{height: "40px",borderTopLeftRadius: "10px",backgroundColor:"#00abcd",borderTopRightRadius: "10px"}} ></div>
      <div class = "shadow p-3 mb-5 bg-white rounded" style={{width:"485px !important"}}>  
      <div className="row align-items-center justify-content-center">
          <div className="col-md-8 col-lg-6 order-2 order-lg-1" style={{width:"535px"}}>
            <div className="funfact-content funfact-res text-left">
            <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/36.png"}
                  alt=""
                  style={{
                    marginTop: "-66px"
                }}
                  className="img-fluid"
                />
              </Link>
            </div>
              <h4>Financial Wellness</h4>
              <p className="pt-4 w-263" >
              Pay yourself first. Before you pay any bills, develop a habit of paying yourself first. That means saving and investing a portion of your earnings before you do anything else with your money.
               </p>
                {/* <div className="timer">
                <CountdownTimer date={dateTime} />
              </div> */}
             <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link to={process.env.PUBLIC_URL + "/Shop"}>
                 View More
                </Link>
              </div>
            </div>
          </div>
         
        </div>
        </div>
      </div>
    </div>



    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="container">
      <div style={{height: "40px",borderTopLeftRadius: "10px",backgroundColor:"#fdd500",borderTopRightRadius: "10px"}} ></div>
      <div class = "shadow p-3 mb-5 bg-white rounded" style={{width:"485px !important"}}>  
      <div className="row align-items-center justify-content-center">
          <div className="col-md-8 col-lg-6 order-2 order-lg-1" style={{width:"535px"}}>
            <div className="funfact-content funfact-res text-left">
            <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/38.png"}
                  alt=""
                  style={{
                    marginTop: "-66px"
                }}
                  className="img-fluid"
                />
              </Link>
            </div>
              <h4>Intellectual Wellness</h4>
              <p className="pt-4 w-263" >
              Intellectual wellness recognizes creative abilities and encourages us to find ways to expand our knowledge and skills. Intellectual wellness can be developed through personal and professional development
               </p>
                {/* <div className="timer">
                <CountdownTimer date={dateTime} />
              </div> */}
             <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link to={process.env.PUBLIC_URL + "/Shop"}>
                 View More
                </Link>
              </div>
            </div>
          </div>
         
        </div>
        </div>
      </div>
    </div>


    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="container">
      <div style={{height: "40px",borderTopLeftRadius: "10px",backgroundColor:"#f6911e",borderTopRightRadius: "10px"}} ></div>
      <div class = "shadow p-3 mb-5 bg-white rounded" style={{width:"485px !important"}}>  
      <div className="row align-items-center justify-content-center">
          <div className="col-md-8 col-lg-6 order-2 order-lg-1" style={{width:"535px"}}>
            <div className="funfact-content funfact-res text-left">
            <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/34.png"}
                  alt=""
                  style={{
                    marginTop: "-66px"
                }}
                  className="img-fluid"
                />
              </Link>
            </div>
            <h4>Occupational Wellness</h4>
              <p className="pt-4 w-263" >
              Occupational Wellness is the ability to make choices that foster positive attitudes toward jobs, class-work, as well as your co-workers and classmates which will enhance your personal and professional satisfaction and promote lifelong learning.
               </p>
                {/* <div className="timer">
                <CountdownTimer date={dateTime} />
              </div> */}
             <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link to={process.env.PUBLIC_URL + "/Shop"}>
                 View More
                </Link>
              </div>
            </div>
          </div>
         
        </div>
        </div>
      </div>
    </div>



    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="container">
      <div style={{height: "40px",borderTopLeftRadius: "10px",backgroundColor:"#59b63a",borderTopRightRadius: "10px"}} ></div>
      <div class = "shadow p-3 mb-5 bg-white rounded" style={{width:"485px !important"}}>  
      <div className="row align-items-center justify-content-center">
          <div className="col-md-8 col-lg-6 order-2 order-lg-1" style={{width:"535px"}}>
            <div className="funfact-content funfact-res text-left">
            <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/36.png"}
                  alt=""
                  style={{
                    marginTop: "-66px"
                }}
                  className="img-fluid"
                />
              </Link>
            </div>
              {/* <h3>Social Wellness</h3> */}
              <h4>Environmental Wellness</h4>
              <p className="pt-4 w-263" >
              Environmental wellness is having good health by occupying pleasant, stimulating environments that support well-being. It promotes interaction with nature and also creating an enjoyable personal environment (both in and out of your workspace).
               </p>
                {/* <div className="timer">
                <CountdownTimer date={dateTime} />
              </div> */}
             <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link to={process.env.PUBLIC_URL + "/Shop"}>
                 View More
                </Link>
              </div>
            </div>
          </div>
         
        </div>
        </div>
      </div>
    </div>




    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="container">
      <div style={{height: "40px",borderTopLeftRadius: "10px",backgroundColor:"#5d256b",borderTopRightRadius: "10px"}} ></div>
      <div class = "shadow p-3 mb-5 bg-white rounded" style={{width:"485px !important"}}>  
      <div className="row align-items-center justify-content-center">
          <div className="col-md-8 col-lg-6 order-2 order-lg-1" style={{width:"535px"}}>
            <div className="funfact-content funfact-res text-left">
            <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/38.png"}
                  alt=""
                  style={{
                    marginTop: "-66px"
                }}
                  className="img-fluid"
                />
              </Link>
            </div>
            <h4>Spiritual Wellness</h4>
              <p className="pt-4 w-263" >
              Spiritual wellbeing relates to our sense of life-meaning and purpose. It can include our connection to culture, community, spirituality and/or religiosity and includes the beliefs, values, mental models and ethics we hold. 
               </p>
                {/* <div className="timer">
                <CountdownTimer date={dateTime} />
              </div> */}
             <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link to={process.env.PUBLIC_URL + "/Shop"}>
                 View More
                </Link>
              </div>
            </div>
          </div>
         
        </div>
        </div>
      </div>
    </div>



    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="container">
      <div style={{height: "40px",borderTopLeftRadius: "10px",backgroundColor:"#d11388",borderTopRightRadius: "10px"}} ></div>
      <div class = "shadow p-3 mb-5 bg-white rounded" style={{width:"485px !important"}}>  
      <div className="row align-items-center justify-content-center">
          <div className="col-md-8 col-lg-6 order-2 order-lg-1" style={{width:"535px"}}>
            <div className="funfact-content funfact-res text-left">
            <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/34.png"}
                  alt=""
                  style={{
                    marginTop: "-66px"
                }}
                  className="img-fluid"
                />
              </Link>
            </div>
            <h4>Emotional Wellness</h4>
              <p className="pt-4 w-263" >
              Cultivating emotional wellness is essential for finding happiness and success. We will all face hardships and challenges. Those that are emotionally healthy have the ability to deal with these challenges, including stress, relationships, responsibilities
               </p>
                {/* <div className="timer">
                <CountdownTimer date={dateTime} />
              </div> */}
             <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link to={process.env.PUBLIC_URL + "/Shop"}>
                 View More
                </Link>
              </div>
            </div>
          </div>
         
        </div>
        </div>
      </div>
    </div>
    <div>         
   </div>
    </Fragment>
  );
};

export default WellnessBlog;
