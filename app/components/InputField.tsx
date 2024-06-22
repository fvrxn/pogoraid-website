// react imports
import { useState } from "react";


// typescript types
interface InputFieldProps {
    placeholder: string;
    changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export default function InputField({placeholder, changeValue, value}: InputFieldProps) {
    return (
      <div className="flex flex-col">
        <input
            type="text"
            className="border-2 border-white rounded-md p-2 font-Nunito text-button text-white bg-transparent mt-6"
            placeholder={placeholder}
            onChange={changeValue}
            value={value}
        />
      </div>
    );
}