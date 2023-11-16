import React, { useContext } from "react";
/* eslint-disable jsx-a11y/no-onchange */
import { getProperty, updateProperty } from "../../lib/lib";

import TemplateContext from "../templateContext";
import { colorsFO } from "../../config/vars";

export default ({ propertyPath, availableColors = [], label = "" }) => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <label htmlFor={propertyPath} className="label--block">
        {label}
      </label>
      <select
        onChange={(e) =>
          updateProperty({ state, setState }, propertyPath, e.target.value)
        }
        value={getProperty({ state }, propertyPath)}
        id={propertyPath}
        className="select-css"
      >
        {colorsFO.map(
          (color) =>
          availableColors.flat().includes(color.label) && (
            <option value={color.label}>{color.name}</option>
          )
        )}
      </select>
    </>
  );
};
