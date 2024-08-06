import Svg from "./IconsTable";
import { valFace } from "../App";
import { memo } from "react";

const Header = ({ contactMenu }: valFace) => {
  return (
    <header>
      <div className="contact-opener" data-modal="contactMenu">
        <Svg icon="phone" />
      </div>
      <div id="contact-menu" className={contactMenu}>
        <div className="contact-content">
          <div className="telegram">
            <Svg icon="brand-telegram" />
          </div>
          <div className="call">
            <Svg icon="phone" />
          </div>
          <div className="gmail">
            <Svg icon="mail" />
          </div>
          <div className="github">
            <Svg icon="brand-github" />
          </div>
        </div>
        <div className="close" data-close="contactMenu">
          <Svg icon="x" />
        </div>
      </div>
      <div className="hamburger" data-modal="menu">
        {/* <Svg icon="menu" /> */}
      </div>
    </header>
  );
};
export default memo(Header);
