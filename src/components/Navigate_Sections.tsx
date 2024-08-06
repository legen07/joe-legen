import { forwardRef, memo, useImperativeHandle, useRef } from "react";
import Svg from "./IconsTable";

interface Props {
  upSection: unknown;
  downSection: unknown;
}

const Navigate_Sections = forwardRef<Props>((props, Props) => {
  const upSection = useRef(null);
  const downSection = useRef(null);

  useImperativeHandle(Props, () => ({
    upSection: upSection.current,
    downSection: downSection.current,
  }));

  return (
    <>
      <div id="navigate-sections">
        <div className="up-section" ref={upSection}>
          <Svg icon="arrow-narrow-up" />
        </div>
        <div className="down-section" ref={downSection}>
          <Svg icon="arrow-narrow-down" />
        </div>
      </div>
    </>
  );
});

export default memo(Navigate_Sections);
