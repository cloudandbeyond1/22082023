import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={clsx(sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <nav>
        <ul>
        <li>
        <Link to={process.env.PUBLIC_URL + "/"}>
              {t("home")}
            </Link>
          </li>
          <li>
        <Link to={process.env.PUBLIC_URL + "/about"}>
              {t("About")}
            </Link>
          </li>
          <li>
        <Link to={process.env.PUBLIC_URL + "/wellness"}>
              {t("Wellness Dimensions")}
            </Link>
          </li>
          {/* <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("Category")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li class="m1">
                <Link to={process.env.PUBLIC_URL + "/cart"}>
                <span class="physical pr-2"></span> {t("physical")}
                </Link>
              </li>
              <li class="m2">
                <Link to={process.env.PUBLIC_URL + "/about"}>
                <span class="social pr-2"></span> {t("social")}
                </Link>
              </li>
              <li class="m3">
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                <span class="financial pr-2"></span> {t("financial")}
                </Link>
              </li>
              <li class="m4">
                <Link to={process.env.PUBLIC_URL + "/contact"}>
                <span class="environmental pr-2"></span> {t("environmental")}
                </Link>
              </li>
              <li class="m5">
                <Link to={process.env.PUBLIC_URL + "/compare"}>
                <span class="intellectual pr-2"></span> {t("Intellectual")}
                </Link>
              </li>
              <li class="m6">
                <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                <span class="occupational pr-2"></span> {t("occupational")}
                </Link>
              </li>
              <li class="m7">
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                <span class="spiritual pr-2"></span> {t("spiritual")}
                </Link>
              </li>
              <li class="m8">
                <Link to={process.env.PUBLIC_URL + "/checkout"}>
                <span class="emotional pr-2"></span> {t("emotional")}
                </Link>
              </li>
             
            </ul>
          </li> */}
         
          <li>
        <Link to={process.env.PUBLIC_URL + "/Shop"}>
              {t("Shop")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
