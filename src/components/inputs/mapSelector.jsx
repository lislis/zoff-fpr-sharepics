import React, { useContext } from "react";
/* eslint-disable jsx-a11y/no-onchange */
import { getProperty, updateProperty } from "../../lib/lib";

import TemplateContext from "../templateContext";

export default ({ propertyPath, availableOptions = [], label = "" }) => {
  const [state, setState] = useContext(TemplateContext);

  const options = (things) => {
    return things.map(thing => <option value={thing.value}>{thing.label}</option>)
  }

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
        {options(availableOptions)}
      </select>
    </>
  );
};
