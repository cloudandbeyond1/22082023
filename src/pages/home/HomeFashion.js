import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import TabProgram from "../../wrappers/Program/TabProgram";
import TabProductShop from "../../wrappers/product/TabProductShop";
import BannerOne from "../../wrappers/banner/BannerOne";
import BrandLogoSliderFour from "../../wrappers/brand-logo/BrandLogoSliderFour";
import NewsletterFour from "../../wrappers/newsletter/NewsletterFour";
import ProductSliderFour from "../../wrappers/product/ProductSliderFour";
import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";
import BrandLogoSliderThree from "../../wrappers/brand-logo/BrandLogoSliderThree";

import TabProductTwelve from "../../wrappers/product/TabProductTwelve";

import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductGridTwo from "../../wrappers/product/ProductGridTwo";
import BannerFive from "../../wrappers/banner/BannerFive";

import CountDownTwo from "../../wrappers/countdown/CountDownTwo";

import ProductSliderThree from "../../wrappers/product/ProductSliderThree";
const HomeFashion = ({ spaceTopClass,
  spaceBottomClass,
  category,
  productTabClass }) => {
    const handleClick = e => {
      e.currentTarget.nextSibling.classList.toggle("active");
    };
  
  return (
    <Fragment>
      {/* <SEO
        titleTemplate="Rezingo Home"
        description="Rezingo provides you a wide variety of products"
      /> */}
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderOne />

        {/* featured icon */}
        

        <CountDownThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          dateTime="November 13, 2023 12:12:00"
          countDownImage="/assets/img/wellnessrez.png"
        />
        <BannerFive />
        <CountDownTwo

          spaceTopClass="pt-80"

          spaceBottomClass="pb-95"

          dateTime="November 13, 2023 12:12:00"

        />
        {/* <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" /> */}

        {/* tab product */}
        {/* <TabProgram spaceBottomClass="pb-60" category="Program" /> */}
  
     <div className={clsx("product-area bg-light py-5", spaceTopClass, spaceBottomClass)}>
      <div className="container py-5">
      <SectionTitleSeven
          titleText="Discover Wellness Products"
          subtitleText="A curated marketplace for medicines, supplements, and wellness products."
          positionClass="text-center"
          spaceClass="mb-55"
          borderClass="no-border"
        />
      
        <Tab.Container defaultActiveKey="bestSeller">
          {/* <Nav
            variant="pills"
            className={clsx("product-tab-list-2 mb-60", productTabClass)}
          >
            
            
          </Nav> */}
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="row">
                <ProductGridTwo
                  category={category}
                  type="new"
                  limit={4}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div className="row">
                <ProductGridTwo
                  category={category}
                  type="bestSeller"
                  limit={4}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="saleItems">
              <div className="row">
                <ProductGridTwo
                  category={category}
                  type="saleItems"
                  limit={4}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

<div className="view-more text-center mt-20 toggle-btn6 col-12">
          <Link
            className="loadMore6"
            to={process.env.PUBLIC_URL + "/shopdetails"}
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>


    <TabProductTwelve
          category="Nutrition"
          spaceTopClass="pt-95"
          
        />
     
     <BrandLogoSliderThree spaceBottomClass="pb-95" spaceTopClass="pt-100" />

        <NewsletterFour
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="hover-red"
          bgColorClass="bg-gray-7"
        />
        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
      
    </Fragment>
  );
};

HomeFashion.propTypes = {
  category: PropTypes.string,
  productTabClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default HomeFashion;
