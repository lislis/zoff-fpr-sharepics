import React, { useContext } from "react";
/* eslint-disable jsx-a11y/no-onchange */
//import ColorsUpdatedSelector from "../../components/inputs/colorsUpdatedSelector";

import MapSelector from "../../components/inputs/mapSelector";

import TemplateContext from "../../components/templateContext";
//import TextScaleRange from "../../components/inputs/textScaleRange";
//import Textarea from "../../components/inputs/textarea";
import { html2image  } from "../../lib/lib";

export default () => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <div className="col-span-2">
        <MapSelector
          availableOptions={state.data.map.available}
          propertyPath="data.map.current"
          label="Auswahl"
        />
      </div>

      <button
        className="btn btn-download"
        onClick={() =>
          html2image(
            {
              state,
              setState,
            },
           // state.data.body.content
          )
        }
      >
        Download
      </button>
    </>
  );
};
