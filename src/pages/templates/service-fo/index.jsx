import React, { useRef, useState } from "react";

import Controls from "../../../templates/service-fo/controls";
import Template from "../../../templates/service-fo/template";
import TemplateContext from "../../../components/templateContext";
import TemplateWrapper from "../../../components/templateWrapper";

import { colorsFO } from "../../../config/vars";

export default () => {
  const [state, setState] = useState({
    data: {
      headline: { content: "Frida Winckelmann",
                  scale: { value: 145, range: [110, 170]}
                },
      subheadline: { content: "Frauenort in Birkenwerder" },
      mapLocation: { show: true },
      body: {
        content: "Journalistin, Forscherin, Aktivistin. Minna Cauer wollte gleiches Stimm-recht für alle sowie Gleichberechtigung in Beruf und Politik. Sie war eine der bedeutendsten Akteurinnen der radi-kalen bürgerlichen Frauenbewegung im deutschen Kaiserreich.",
        scale: { value: 50, range: [40, 70] },
      },
      additional: {
        content: "Um Anmeldung wird gebeten"
      },
      background: {
        color: "gruenhell",
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
