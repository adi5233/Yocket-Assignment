import React from "react";

const Selector = ({
  label,
  value,
  options,
  showQuantity = false,
  disabledOption,
  handleChange,
}) => {
  const handleSelectChange = (e) => {
    handleChange({ newValue: e.target.value, prevValue: value });
  };

  return (
    <div className="w-full mt-5">
      <form class="max-w-sm mx-auto">
        <label
          for="countries"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        <select
          label={label}
          size="lg"
          value={value}
          onChange={(newValue) => handleSelectChange(newValue)}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
        >
          <option value="" disabled>
            None
          </option>
          {options.map((o) => (
            <option
              key={o.name}
              value={o.name}
              className={`${disabledOption(o) ? "hidden" : "block"}`}
            >
              {showQuantity
                ? `${o.name} ${o.quantity > 0 ? -o.quantity : ""}`
                : `${o.name}`}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Selector;
