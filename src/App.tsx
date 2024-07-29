import "./App.css";
import { Preloader } from "./components/preloader";
import Profile from "./components/profile";
import Floats from "./components/Floats";
import Header from "./components/Header";
import React, { useCallback, useRef } from "react";
import { modalRefs } from "./components/Header";
import { signal } from "@preact/signals-react";

export function App() {
  const modalRefs = useRef<modalRefs>(null);
  const clickCount = useRef<number>();
  const modalName = signal<Element>();
  const d = useRef<any>();
  const elementClassName = useRef<string>();

  ////////////////////////////////////
  // This will be the modal's values
  function modOpener(dataModal : Attr) {
    (modalRefs.current as any)[dataModal.value].classList.add('js');

  }

  function modCloser(dataClose : Attr) {
    (modalRefs.current as any)[dataClose.value].classList.remove('js');
  }

  const handleClick = useCallback((event: React.MouseEvent) => {
    d.current = event.target;
    clickCount.current = 0;

    const clickChecker = () => {
      if (d.current instanceof Element) {
        d.current.tagName.includes("path") &&
          (d.current = d.current.parentElement);
      }
      elementClassName.current = d.current.classList.value;

      const { "data-modal": dataModal, "data-close": dataClose } =
        d.current.attributes;

      switch (true) {
        case elementClassName.current!.includes("reported"):
          break;

        case !!dataModal:
          modOpener(dataModal);
          break;

        case !!dataClose:
          modCloser(dataClose)
          break;

        default:
          if ((clickCount.current as number) < 1) {
            clickCount.current!++;
            d.current = d.current.parentElement;
            clickChecker();
          }
          break;
      }
    };

    clickChecker();
  }, []);

  return (
    <div onClick={handleClick}>
      <Preloader />
      <Profile />
      <Floats ref={modalRefs}/>
      <Header ref={modalRefs} />
    </div>
  );
}
