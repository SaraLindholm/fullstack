import React from "react";

function OutdoorCheckbox ({checked, onChange}) {
  return (
    <div className="CheckboxContainer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className="Label"> Visa enbart utomhusaktiviteter</label>
    </div>
  )
}
export default OutdoorCheckbox
