import clsx from "clsx";

const Select = ({
  label,
  name,
  placeholder,
  options = [],
  value,
  onChange,
  required = false,
  className,
}) => {
  const id = "id_" + name;

  return (
    <div className={clsx(required && "required", className)}>
      {label ? (
        <label htmlFor={id} className={required ? "font-bold" : ""}>
          {label}
          {required ? <span className="text-red-500">*</span> : null}
        </label>
      ) : null}

      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="block w-full rounded-lg bg-white p-3 ring"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
