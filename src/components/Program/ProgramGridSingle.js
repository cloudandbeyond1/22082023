import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Rating from "./sub-components/ProgramRating";
import { getDiscountPrice } from "../../helpers/program";
import ProgramModal from "./ProgramModal";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";

const ProgramGridSingle = ({
  product,
  currency,
  cartItem,
  wishlistItem,
  compareItem,
  spaceBottomClass
}) => {
  const [modalShow, setModalShow] = useState(false);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className={clsx("product-wrap peletonWrap", spaceBottomClass)}>
        <div className="product-img">
          <Link to={process.env.PUBLIC_URL + "/program/" + product.id}>
            <img
              className="default-img"
              src={process.env.PUBLIC_URL + product.image[0]}
              alt=""
            />
            {/* {product.image.length > 1 ? (
              <img
                className="hover-img"
                src={process.env.PUBLIC_URL + product.image[1]}
                alt=""
              />
            ) : (
              ""
            )} */}
          </Link>
          {/* {product.discount || product.new ? (
            <div className="product-img-badges">
              {product.discount ? (
                <span className="pink">-{product.discount}%</span>
              ) : (
                ""
              )}
              {product.new ? <span className="purple">New</span> : ""}
            </div>
          ) : (
            ""
          )} */}

        
        </div>
        <div className="product-content text-center">
          <p>{product.subtitle}</p>
          <h3>
            <button className="button-program mb-3">
            <Link to={process.env.PUBLIC_URL + "/program/" + product.id}>
              {product.name}
            </Link>
            </button>
          </h3>
          {/* {product.rating && product.rating > 0 ? (
            <div className="product-rating">
              <Rating ratingValue={product.rating} />
            </div>
          ) : (
            ""
          )} */}
          {/* <div className="product-price">
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
        </div>
      </div>
      {/* product modal */}
      <ProgramModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedPrice={discountedPrice}
        finalProductPrice={finalProductPrice}
        finalDiscountedPrice={finalDiscountedPrice}
        wishlistItem={wishlistItem}
        compareItem={compareItem}
      />
    </Fragment>
  );
};

ProgramGridSingle.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProgramGridSingle;
