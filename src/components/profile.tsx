import { HtmlHTMLAttributes, ReactNode } from "react";
import AutoModel from "./AutoModel"

// interface Props {
  // odal: ReactNode | {}
// }

export default function(){

  return (
    // <AutoModel odal="something">
      <section id="profile-section">

        <div className="profile-back">
          <div className="profile-img"><img src="/images/legen.webp" alt="" /></div>
        </div>
        <div className="profile-text">
          <div className="name-available">
            <h1>Afful Godfred</h1>
            <div className="available">
              <div className="available-pulse"></div>
              <span>Available</span>
            </div>
          </div>
          <h2 className="reported">Reported Addicted to Website development</h2>
          <h2 className="coding-junky">

            <div>coding </div>
            <div>#junky</div>
          </h2>
        </div>
        <div className="scroll-down">
          <div className="scroll-back">
            <svg viewBox="0 0 46 15" xmlns="http://www.w3.org/2000/svg">
              <path className="curve" d="M 0 14 C 5 12 8 10 10 7 C 12 3 15 1 20 0 H 25 C 30 1 32 3 35 7 C 37 10 41 12 45 14 Z"></path>
              <path className="chevron-1" d="M 20 5 L 23 7 L 26 5"></path>
              <path className="chevron-2" d="M 19 9 L 23 11 L 27 9"></path>
            </svg>
          </div>
        </div>
      </section>
    // </AutoModel>
  )
}