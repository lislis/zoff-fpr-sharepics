import React, { useContext } from "react";

import Checkbox from "../../components/inputs/checkbox";
import ColorSelector from "../../components/inputs/colorSelector";
import Input from "../../components/inputs/input";
import TemplateContext from "../../components/templateContext";
import TextScaleRange from "../../components/inputs/textScaleRange";
import Textarea from "../../components/inputs/textarea";
import JustSelector from "../../components/inputs/justSelector";

import { html2image } from "../../lib/lib";

export default () => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <div className="col-span-1">
        <Input
          label="optional Dachzeile"
          propertyPath="data.roof.content"
          className="w-full"
        />
      </div>

      <div className="col-span-2">
        <div className="col-span-1 col-start-1">
          <Textarea
            label="Text"
            propertyPath="data.body.content"
            className="w-full"
            rows={3}
          />
        </div>
        <div className="col-span-1">
          <TextScaleRange propertyPath="data.body.scale" optLabel="Text" />
        </div>
      </div>

      <div className="col-span-1">
        <Input
          label="Subheadline"
          propertyPath="data.subheadline.content"
          className="w-full"
        />
      </div>

      <div className="col-span-2">
        <Checkbox
          propertyPath="data.logo.show"
          label="Logo anzeigen"
        />
      </div>

      <div className="col-span-2">
        <JustSelector
          label="Ausrichtung"
          availableOptions={state.data.alignment.available}
          propertyPath="data.alignment.current"
        />
      </div>

      <div className="col-span-2">
        <ColorSelector
          label="BG Color"
          availableColors={state.data.background.availableColors}
          propertyPath="data.background.color"
        />
      </div>

      <div className="col-span-1 col-start-1">
        <button
          className="btn btn-download"
          onClick={() =>
            html2image(
              {
                state,
                setState,
              },
              state.data.body.content
            )
          }
        >
          Download
        </button>
      </div>
    </>
  );
};
