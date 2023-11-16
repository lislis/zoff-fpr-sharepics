import React, { useContext } from "react";

import TemplateContext from "../../components/templateContext";
import TemplateLayout from "../../components/templateLayout";


export default () => {
  const [state] = useContext(TemplateContext);
  return (
    <TemplateLayout>
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
      />

      <div
        className="absolute top-0 left-0 right-0 z-10 w-full h-full"
        style={{
          backgroundImage: `url(/assets/images/frauenorte/map-${state.data.map.current}.png`,
          height: "100%",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom'
        }}
      />

    </TemplateLayout>
  );
};
