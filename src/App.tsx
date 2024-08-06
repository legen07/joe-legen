/// Imported Styles
import "./App.css";
import "./section.scss";

/// Imported Components
import Floats from "./components/Floats";
import Header from "./components/Header";
import Profile from "./components/profile";
import My_Sites from "./components/My_Sites";
import Navigate_Sections from "./components/Navigate_Sections";
import Preloader from "./components/preloader";
import Experience from "./components/Experience";
/// React APIs
import {
  Attributes,
  DataHTMLAttributes,
  ElementType,
  EventHandler,
  HtmlHTMLAttributes,
  Key,
  memo,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Education from "./components/Education";

import { changeSection, EventListeners } from "./components/Index";

/// Interfaces and types.
export interface valFace {
  contactMenu?: string;
  bottomFloats?: string;
  HandleClick?: MouseEventHandler<HTMLElement> | undefined;
}

interface modaFace {
  [key: string] : string;
}

export type allRefs = {
  [key: string]: RefObject<HTMLDivElement>;
};

export let _: any;
let clickCount = 0;
let d: HTMLElement | null;
let elementClassName: string;

////''''''''''''''''''''''''''''''////
///.........App..component.........///
const App = () => {
  const [Js, setJs] = useState<valFace>({
    contactMenu: "",
    bottomFloats: "js",
  });
  _ = {
    screenshotsRef: useRef(null),
    profileRef: useRef(null),
    navigationRef: useRef(null),
    educationRef: useRef(null),
  };
  ////////////////////////////////////
  ///    Click Event Listener      ///
  const HandleClick = (event: Event) => {
    d = event.target as unknown as HTMLElement;
    clickCount = 0;

    // Modals functions
    function modOpener(dataModal : string) {
      setJs({
        [dataModal]: "js",
      });
    }
    function modCloser(dataClose : string) {
      setJs({
        [dataClose]: "",
      });
    }

    //Click and Re-click parent if not child.
    const clickChecker = () => {
      if (d instanceof Element) {
        d.tagName.includes("path") && (d = d.parentElement);
      }
      elementClassName = (d as HTMLDivElement).classList.value;

      const dataModal = d?.getAttribute('data-modal')
      const dataClose = d?.getAttribute('data-close')

      // Switch start here.
      switch (true) {

        case typeof dataModal == 'string':
          modOpener(dataModal);
          break;

        case typeof dataClose == 'string':
          modCloser(dataClose);
          break;

        case elementClassName!.includes("up-section"):
          changeSection(true);
          break;

        case elementClassName!.includes("down-section"):
          changeSection(false);
          break;

        default:
          if ((clickCount as number) < 1) {
            clickCount!++;
            d = d!.parentElement;
            clickChecker();
          }
          break;
      }
    };

    clickChecker();
  };

  useEffect(() => {
    document.addEventListener("click", HandleClick);

    return () => document.removeEventListener("click", HandleClick);
  });

  EventListeners();
  return (
    <>
      <Preloader />
      <Profile ref={_.profileRef} />
      <My_Sites ref={_.screenshotsRef} />
      <Education ref={_.educationRef} />
      <Experience />
      <Header contactMenu={Js.contactMenu} />
      <Floats bottomFloats={Js.bottomFloats} />
      <Navigate_Sections ref={_.navigationRef} />
    </>
  );
};

export default memo(App);
