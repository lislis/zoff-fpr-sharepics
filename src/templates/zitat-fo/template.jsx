import React, { useContext } from "react";
import { getFOColor } from "../../lib/lib";

import FOLogo from "../../assets/svg/fo-logo";
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
        className="absolute z-20 w-full h-full top-0 left-0 flex flex-col p-4"
        style={{
          justifyContent: state.data.alignment.current,
          paddingBottom: `${state.data.logo.show ? 60 : 0}px` }}>
        <div
          className="leading-none font-montserrat font-bold text-lg"
          style={{
            fontSize: `40px`,
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.roof.content.replace(/\n/gi, "<br/>"),
          }}
        />
        <div
          className="leading-tight font-redaction font-bold break-words mt-2"
          style={{
            fontSize: `${state.data.body.scale.value}px`,
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.body.content.replace(/\n/gi, "<br/>"),
          }}
        />
        <div
          className="leading-none font-montserrat font-bold text-lg mt-2"
          style={{
            fontSize: `40px`,
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.subheadline.content.replace(/\n/gi, "<br/>"),
          }}
        />

        {state.data.logo.show === true && (
          <div className="absolute bottom-0 left-0 z-30 ml-4 mb-4">
            <FOLogo width="330" />
          </div>
        )}
      </div>
    </TemplateLayout>
  );
};
