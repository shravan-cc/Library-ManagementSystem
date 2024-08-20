import { HTMLInputTypeAttribute } from "react";

interface InputProps extends React.ComponentProps<"input"> {
  inputType: HTMLInputTypeAttribute;
  label: string;
}

export function InputElement({ inputType, label, ...inputProps }: InputProps) {
  return (
    <div className="input-container flex flex-col space-y-1">
      <label className="text-[#4D5959] text-base font-poppins text-left">
        {label}
      </label>
      <input
        type={inputType}
        {...inputProps}
        className="text-[#838383] font-poppins bg-custom-light-gray p-[10px] pl-[29px] "
      />
    </div>
  );
}
