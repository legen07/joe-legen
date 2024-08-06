import { forwardRef, memo} from "react";
import Svg from "./IconsTable";

const Education = forwardRef<HTMLDivElement>((props, education) => {

  // const education = useRef(null)

  return (
    <section id="education" ref={education}>
      <div className="education-image">
        <h2>Education</h2>
        <Svg icon='school'/>
      </div>
      <article>
        <p>
        St. John's Grammar Senior High, Accra, Ghana.
        </p>
        <p>

        Despite my limited educational background, I have acquired exceptional skills in software development and website development that surpass those of my peers who have graduated in these fields. Through diligent self-study and online courses, I have mastered the necessary knowledge and techniques, driven mostly by curiosity, and love for programming and also the necessity to sustain myself financially. 
        </p>
      </article>
      
    </section>
  )
})


export default memo(Education);