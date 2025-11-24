import Input from "./Input";

const Textarea = ({
  label,
  name,
  placeholder,
  defaultValue,
  required = false,
  className,
  rows = 3,
}) => {
  return (
    <Input
      type="textarea"
      label={label}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={className}
      required={required}
      rows={rows}
    />
  );
};

export default Textarea;
