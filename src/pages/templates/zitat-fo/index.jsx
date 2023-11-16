import React, { useRef, useState } from "react";

import Controls from "../../../templates/zitat-fo/controls";
import Template from "../../../templates/zitat-fo/template";
import TemplateContext from "../../../components/templateContext";
import TemplateWrapper from "../../../components/templateWrapper";

import { colorsFO } from "../../../config/vars";

export default () => {
  const [state, setState] = useState({
    data: {
      roof: { content: "FrauenOrte im O-Ton" },
      body: {
        content: "Seit drei Jahr-hunderten - Frauen* in der Politik",
        scale: { value: 120, range: [80, 150] },
      },
      subheadline: { content: "Subheadline optional" },
      logo: { show: true },
      alignment: {
        current: 'start',
        available: ['start', 'center']
      },
      background: {
        color: "rosahell",
        availableColors: colorsFO.map(x => x.label),
      },
    },
    ref: useRef(null),
    templateScale: { isScaled: true, value: 0 },
  });

  return (
    <TemplateContext.Provider value={[state, setState]}>
      <TemplateWrapper>
        <div className="col-span-6">
          <Template />
        </div>
        <div className="col-span-6">
          <div className="grid-2">
            <Controls />
          </div>
        </div>
      </TemplateWrapper>
    </TemplateContext.Provider>
  );
};
