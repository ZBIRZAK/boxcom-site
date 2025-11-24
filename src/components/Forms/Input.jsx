import clsx from "clsx";

const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  defaultValue,
  required = false,
  className,
  rows = 3,
}) => {
  const id = "id_" + name;
  const Tag = type === "textarea" ? "textarea" : "input";
  const options = type === "textarea" ? { rows } : {};

  if (required) {
    options.required = true;
  }

  return (
    <div className={clsx(required && "required", className)}>
      {label && (
        <label htmlFor={id} className={required ? "font-bold" : ""}>
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Tag
        className="block ring p-3 w-full rounded-lg"
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        {...options}
      />
    </div>
  );
};

export default Input;
