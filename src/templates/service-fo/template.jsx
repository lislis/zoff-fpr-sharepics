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
          className="leading-none font-redaction font-bold text-lg"
          style={{
            fontSize: `${state.data.headline.scale.value}px`,
//            color: getSecondaryColor(state.data.background.color),
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.headline.content.replace(/\n/gi, "<br/>"),
          }}
        />

        <div
          className="leading-none underline font-montserrat font-bold text-lg flex items-baseline mt-2">
          {state.data.mapLocation.show === true && (
            <MapLocation width="12" />
          )}<span style={{fontSize: '36px', marginLeft: '16px'}}>{state.data.subheadline.content.replace(/\n/gi, "<br/>")}</span>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 p-3 mt-2"
        >
          <div
            className="leading-tight font-montserrat break-words"
            style={{
              fontSize: `${state.data.body.scale.value}px`,
            }}
            dangerouslySetInnerHTML={{
              __html: state.data.body.content.replace(/\n/gi, "<br/>"),
            }} />
          <div
            className="leading-tight font-montserrat break-words mt-2"
            style={{
              fontSize: `30px`,
            }}
            dangerouslySetInnerHTML={{
              __html: state.data.additional.content.replace(/\n/gi, "<br/>"),
            }} />
          </div>
      </div>
    </TemplateLayout>
  );
};
