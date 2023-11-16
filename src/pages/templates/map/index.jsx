import React, { useRef, useState } from "react";

import Controls from "../../../templates/map/controls";
import Template from "../../../templates/map/template";
import TemplateContext from "../../../components/templateContext";
import TemplateWrapper from "../../../components/templateWrapper";

import { foWomen } from "../../../config/vars";


export default () => {
  const [state, setState] = useState({
    data: {
      map: {
        current: '-alle',
        available: foWomen
      }
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
