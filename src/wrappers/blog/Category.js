import React, { Fragment } from "react";
import TabProgram from "../../wrappers/Program/TabProgram";
import TabProductTwelve from "../../wrappers/product/TabProductTwelve";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <Fragment>
      <div className="col-lg-12 col-md-6 col-sm-12">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-8 col-lg-6 order-2 order-lg-1">
            <div className="funfact-content funfact-res text-left" >
              <div className="d-flex">
              <span style={{background: "#172a53",height: "28px",width: "20px"}}></span>
              <h3 className="ml-10">Physical Wellness</h3>
              </div>
              <p className="pt-4 w-75">
                Physical wellness encompasses a variety of healthy behaviors including adequate exercise, proper nutrition and abstaining from harmful habits such as drug use and alcohol abuse.
               It means learning about and identifying symptoms of disease, getting regular medical checkups, and protecting yourself from injuries and harm.
              </p>
              {/* <div className="timer">
                <CountdownTimer date={dateTime} />
              </div> */}
             <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                 ENROLL NOW
                </Link>
              </div>

              </div>
          </div>
          <div className="col-md-4 col-lg-6 order-1 order-lg-2">
            <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/35.jpg"}
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
              
            <TabProgram spaceBottomClass="pb-60 mt-5 bg-light"  category="Program" />

  
  

            <TabProductTwelve
          category="Nutrition"
          spaceTopClass="pt-95"
          
        />
 

   
      
  
  

    </Fragment>
  );
};

export default Category;
