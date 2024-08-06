import { useState, useCallback } from "react";
/////////////////////////////////////////////
////  ICONS MANIPULATIONS

interface Props {
  icon: string;
}

export default function (icon: Props) {
  
  const done = useCallback( () => {
    
    !localStorage.icons &&
    fetch(
      "https://cdn.jsdelivr.net/npm/@tabler/icons@3.11.0/tabler-nodes-outline.json",
      { priority: "high" }
    )
      .then((outJsonUrl) => outJsonUrl.json())
      .then((outJsonUrl) =>
        localStorage.setItem("icons", JSON.stringify(outJsonUrl))
      )
      .then(doIt);

   function doIt () {
    const [AllIconsObject] = useState(
      JSON.parse(localStorage.getItem("icons") || "{}")
    );
    
  // }

  return (
    <>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...icon}>
        {AllIconsObject[icon.icon].map((each: any, i: []) => {
          return <path key={icon.icon + "-" + i} d={each[1]["d"]}></path>;
        })}
      </svg>
    </>
  );
}
!!localStorage.icons && doIt();
  return doIt()
}, [])
  
return done();
}
