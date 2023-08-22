import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";
import ProductGridNine from "./ProductGridNine";

const ProductSliderFour = ({ spaceBottomClass, category }) => {
  return (
    <div className={clsx("related-product-area mt-50", spaceBottomClass)}>
      <div className="container">
        <SectionTitleSeven
          titleText="New Products"
          subtitleText="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          spaceClass="mb-60"
          borderClass="no-border"
          positionClass="text-center"
        />
        {/* <div className="row">
          <ProductGridNine
            category={category}
            limit={6}
            type="new"
          />
        </div> */}
      </div>
    </div>
  );
};

ProductSliderFour.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductSliderFour;
