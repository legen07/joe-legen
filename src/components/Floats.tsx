import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Svg from "../IconsTable";
import { modalRefs } from "./Header";

const  Floats= React.forwardRef((prop, ref) => {
  const [Js, setJs] = useState("");
  const modalRefs = useRef<HTMLDivElement>(null);

  setTimeout(() => {
    setJs("js");
  }, 1000);

  useImperativeHandle(ref, ()=> ({
    bottomFloats : modalRefs.current
    
  }))

  return (
      <div id="bottom-floats" className={Js} ref={modalRefs}>
        <div id={"cookies-policy"} >
          <div>
            <Svg icon="cookie" />
            <span>
              This site stores cookies on your device.
            </span>
            <Svg icon="x" data-close="bottomFloats" />
          </div>
        </div>
      </div>
  );
});

export default Floats;
