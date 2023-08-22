import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductCartQuantity } from "../../helpers/program";
import Rating from "./sub-components/ProgramRating";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare } from "../../store/slices/compare-slice";

const ProgramDescriptionInfo = ({
  product,
  discountedPrice,
  currency,
  finalDiscountedPrice,
  finalProductPrice,
  cartItems,
  wishlistItem,
  compareItem,
}) => {
  const dispatch = useDispatch();
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );

  return (
    <div className="product-details-content ml-70">
      
      {/* <div className="product-details-price">
        {discountedPrice !== null ? (
          <Fragment>
            <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "}
            <span className="old">
              {currency.currencySymbol + finalProductPrice}
            </span>
          </Fragment>
        ) : (
          <span>{currency.currencySymbol + finalProductPrice} </span>
        )}
      </div> */}
      {product.rating && product.rating > 0 ? (
        <div className="pro-details-rating-wrap">
          {/* <div className="pro-details-rating">
            <Rating ratingValue={product.rating} />
          </div> */}
        </div>
      ) : (
        ""
      )}


          {/* <div style={{display:"flex"}}>
<div class="sc-jicfeM EhNiX">
<div data-test-id="programDuration" class="sc-fvPiJg hPQqxG">
<header class="sc-czuydh iPdKgf">1</header>
<header class="sc-gNvmti kbWScQ">Week</header>
</div>
<div data-test-id="programDaysPerWeek" class="sc-fvPiJg hPQqxG">
<header class="sc-czuydh iPdKgf">3</header>
<header class="sc-gNvmti kbWScQ">Days/Week</header>
</div>
<div data-test-id="programTotalNumClasses" class="sc-fvPiJg hPQqxG">
<header class="sc-czuydh iPdKgf">3</header>
<header class="sc-gNvmti kbWScQ">Classes</header>
</div>
<div data-test-id="programMinsPerDay" class="sc-fvPiJg hPQqxG">
<header class="sc-czuydh iPdKgf">30-30</header><header class="sc-gNvmti kbWScQ">mins per day</header>
</div>
</div><div class="sc-jTNsyj Aa-def"></div><div data-test-id="programInstructorSection" class="sc-iAUoVB gCMXHd"><div class="sc-eyFZrc eVvkOF"><div data-test-id="programInstructorAvatar" class="sc-gMsnKO dKTwR"><img alt="Ben Alldis" src="https://res.cloudinary.com/peloton-cycle/image/fetch/ar_1,c_fill,dpr_0.8,f_auto,g_face,h_40,q_auto:good,w_40/https://s3.amazonaws.com/workout-metric-images-prod/1d00ad7b40554729b514cb1ee47903b6" class="sc-fXEqDS escYwt sc-dGXBhE ckUuMw sc-eOjLfn ggAjco"/></div><div data-test-id="programInstructorName" class="sc-jEWOvK ePNIqs"><header class="sc-dRaBNj drmdlH">Ben</header><header class="sc-dRaBNj drmdlH">Alldis</header></div></div></div></div>

 */}




<div className="pro-details-list">

        <h2>{product.name}</h2>

      <div className="align-content-around mt-10" >

        <span className="badge text-bg-primary">Physical Wellness</span>

       

        <span className="badge text-bg-success ml-10">4 Weeks</span>

        <span className="badge text-bg-secondary ml-10"> 100 Users</span>

        </div>
        {/* <div className="align-content-around mt-10 d-flex">

   <div style={{marginRight:"10px"}}>
      <img src="/assets/img/icon-img/user.png" style={{width:"37px",height:"31px"}}/>
      </div>
      <div>
        <h4>Lynda Hall</h4>
        <p style={{marginTop:"-9px"}}>Fitness Coach</p>
        </div>
        </div> */}

      </div>




     

   
      
      

      <div className="pro-details-list">
        <p>{product.fullDescription}</p>
      </div>

   
      <div className="slider-btn btn-hover d-none d-lg-block">
        <button className="p-1" style={{backgroundColor:"#703ca2",color:"#fff",width:"100px",border:"none"}}>
        ENROLL NOW
        </button>
      </div>

   
      {/* {product.category ? (
        <div className="pro-details-meta">
          <span>Categories :</span>
          <ul>
            {product.category.map((single, key) => {
              return (
                <li key={key}>
                  <Link to={process.env.PUBLIC_URL + "/programdetails"}>
                    {single}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )} */}
      {product.tag ? (
        <div className="pro-details-meta">
      
         
        </div>
      ) : (
        ""
      )}

      {/* <div className="pro-details-social">
        <ul>
          <li>
            <a href="//facebook.com">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="//dribbble.com">
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="//pinterest.com">
              <i className="fa fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="//twitter.com">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="//linkedin.com">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </div> */}


    </div>
  );
};

ProgramDescriptionInfo.propTypes = {
  cartItems: PropTypes.array,
  compareItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({})
};

export default ProgramDescriptionInfo;
