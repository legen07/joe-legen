import { forwardRef, memo } from "react";
import Svg from "./IconsTable";

const My_Sites = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section id="my-sites">
      <div className="screenshots" ref={ref}>
        <div>
          <a
            href="https://healables.pages.dev"
            title="healables.pages.dev"
            target="_blank"
            rel="noopener"
          >
            <Svg icon="link" />
          </a>
          <img
            src="../../images/Screenshot_Hair Heal.png"
            alt="https:healables.pages.dev"
          />
        </div>
        <div>
          <a
            href="https://nibies.com"
            title="https://nibies.com"
            target="_blank"
            rel="noopener"
          >
            <Svg icon="link" />
          </a>
          <img
            src="../../images/Screenshot_Nibies.webp"
            alt="https://nibies.com"
          />
        </div>
        <div>
          <a
            href="https://nueljay.pages.dev"
            title="https://nueljay.pages.dev"
            target="_blank"
            rel="noopener"
          >
            <Svg icon="link" />
          </a>
          <img
            src="../../images/Screenshot_NuelJay.webp"
            alt="https://nueljay.pages.dev"
          />
        </div>
      </div>
    </section>
  );
});

export default memo(My_Sites);
