import Input from "./Input";

const InputEmail = ({
  label,
  name,
  placeholder,
  defaultValue,
  required = false,
  className,
}) => {
  return (
    <Input
      type="email"
      label={label}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={className}
      required={required}
    />
  );
};

export default InputEmail;
