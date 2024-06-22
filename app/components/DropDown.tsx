import { useState } from "react";
import { raidboss } from "../data/data";

// typescript types
interface DropDownProps {
  text: string;
}

export default function DropDown({ text }: DropDownProps) {
  const [selectedBoss, setSelectedBoss] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBoss(event.target.value);
  };

  return (
    <div className="mt-10 bg-white rounded-lg text-center px-8 py-5 cursor-pointer">
      <p className="font-Nunito text-black text-button">{text}</p>
      <select
        id="raidboss"
        name="raidboss"
        value={selectedBoss}
        onChange={handleChange}
        className="mt-2 block w-full font-Nunito text-text border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
      >
        {raidboss.map((group, index) => (
          <optgroup key={index} label={group.label}>
            {group.bosses.map((boss, bossIndex) => (
              <option key={bossIndex} value={boss}>
                {boss}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
