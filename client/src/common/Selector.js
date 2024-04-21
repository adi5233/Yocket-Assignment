import React from "react";
import { Select, Option } from "@material-tailwind/react";

const Selector = ({
  label,
  value,
  options,
  showQuantity = false,
  disabledOption,
  handleChange,
}) => {
  // const [selectedValue, setSelectedValue] = useState(value);

  const handleSelectChange = (newValue) => {
    // setSelectedValue(newValue);
    handleChange({ newValue, prevValue: value });
  };

  return (
    <div className="w-full mt-5">
      <Select
        label={label}
        size="lg"
        // value={selectedValue}
        className="w-full p-6"
        onChange={(newValue) => handleSelectChange(newValue)}
      >
        {options.map((option) => (
          <Option
            key={option.name}
            value={option.name}
            className={`${disabledOption(option) ? "hidden" : "block"}`}
            // selected={option.name === selectedValue}
          >
            {showQuantity
              ? `${option.name} - ${option.quantity}`
              : `${option.name}`}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default Selector;
