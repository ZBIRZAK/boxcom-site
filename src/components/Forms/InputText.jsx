import Input from "./Input";

const InputText = ({
  label,
  name,
  placeholder,
  defaultValue,
  className,
  required = false,
}) => {
  return (
    <Input
      type="text"
      label={label}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={className}
      required={required}
    />
  );
};

export default InputText;
