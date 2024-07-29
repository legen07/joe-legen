import React, { useImperativeHandle, useRef } from "react";
import Svg from "../IconsTable";

export interface modalRefs {
  contactMenu: HTMLDivElement | null;
}

const Header = React.forwardRef<modalRefs>((prop, ref) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    contactMenu: menuRef.current,
  }));

  return (
    <header>
      <div className="contact-opener" data-modal="contactMenu">
        <Svg icon="phone" />
      </div>
      <div id="contact-menu" ref={menuRef}>
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
      </div>
      <div className="close" data-close="contactMenu">
        <Svg icon="x" />
      </div>
      <div className="hamburger" data-modal="menu">
        <Svg icon="menu" />
      </div>
    </header>
  );
});
export default Header;
