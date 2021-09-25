import * as React from "react";
import * as ReactDOM from "react-dom";
import { AutoComplete } from "@progress/kendo-react-dropdowns";

export const App = () => {
  const data = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan"];
  const [value, setValue] = React.useState("");

  const onChange = (event) => {
    setValue(event.value);
  };

  return (
    <div className="example-wrapper">
      <AutoComplete
        data={data}
        value={value}
        onChange={onChange}
        placeholder="e.g. Andorra"
      />
    </div>
  );
};