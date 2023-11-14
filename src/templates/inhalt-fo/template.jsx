import React, { useContext } from "react";
import { getFOColor } from "../../lib/lib";

import MapLocation from "../../assets/svg/map-location";
import TemplateContext from "../../components/templateContext";
import TemplateLayout from "../../components/templateLayout";

export default () => {
  const [state] = useContext(TemplateContext);
  return (
    <TemplateLayout>
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          background: getFOColor(state.data.background.color),
        }}
      />

      <div
        className="absolute z-20 w-full h-full top-0 left-0 flex flex-col p-3"
        //style={{ paddingTop: "20px" }}
      >
        <div
          className="leading-none font-avenir font-bold text-lg"
          style={{
            fontSize: `${state.data.headline.scale.value}px`,
//            color: getSecondaryColor(state.data.background.color),
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.headline.content.replace(/\n/gi, "<br/>"),
          }}
        />

        <div
          className="leading-none underline font-avenir font-bold text-lg flex items-baseline mt-2">
          {state.data.mapLocation.show === true && (
            <MapLocation width="12" />
          )}<span class="mx-1">{state.data.subheadline.content.replace(/\n/gi, "<br/>")}</span>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 p-3 leading-tight font-avenir font-bold break-words mt-2"
          style={{
            fontSize: `${state.data.body.scale.value}px`,
  //          color: getSecondaryColor(state.data.background.color),
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.body.content.replace(/\n/gi, "<br/>"),
          }}
        />
      </div>
    </TemplateLayout>
  );
};
