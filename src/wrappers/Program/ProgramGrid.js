import { Fragment } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getPrograms } from "../../helpers/program";
import ProgramGridSingle from "../../components/Program/ProgramGridSingle";

const ProgramGrid = ({
  spaceBottomClass,
  category,
  type,
  limit
}) => {
  
  const { products } = useSelector((state) => state.product);
  const { programs } = useSelector((state) => state.program);
  console.log(programs,"programs")
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const prods = getPrograms(programs, category, type, limit)
  
  return (
    <Fragment>
      {prods?.map(product => {
        return (
          <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={product.id}>
            <ProgramGridSingle
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              cartItem={
                cartItems.find((cartItem) => cartItem.id === product.id)
              }
              wishlistItem={
                wishlistItems.find(
                  (wishlistItem) => wishlistItem.id === product.id
                )
              }
              compareItem={
                compareItems.find(
                  (compareItem) => compareItem.id === product.id
                )
              }
            />
          </div>
        );
      })}
    </Fragment>
  );
};

ProgramGrid.propTypes = {
  spaceBottomClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number
};



export default ProgramGrid;
