import { raidboss } from "../data/data";

// typescript types
interface DropDownProps {
  text: string;
  state: any;
  setState: (value: any) => void;
}

export default function DropDown({ text, state, setState }: DropDownProps) {


  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState(event.target.value);
  };

  return (
    <div className="mt-10 bg-white rounded-lg text-center px-8 py-5 cursor-pointer">
      <p className="font-Nunito text-black text-button">{text}</p>
      <select
        id="raidboss"
        name="raidboss"
        value={state}
        onChange={handleChange}
        className="mt-2 block w-full font-Nunito text-text border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
      >
        {raidboss.map((group, index) => (
          <optgroup key={index} label={group.label}>
            {group.bosses.map((boss, bossIndex) => (
              <option key={bossIndex} value={JSON.stringify({ label: group.label, boss })}>
                {boss}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
