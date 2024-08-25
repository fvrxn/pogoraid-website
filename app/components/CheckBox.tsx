// next imports
import Link from 'next/link';

// typescript types
interface CheckBoxProps {
    placeholder: string;
    state: boolean;
    setState: (value: any) => void;
}

export default function CheckBox( {placeholder, state, setState}: CheckBoxProps) {
    return (
        <div className="">
            <input type='checkbox' checked={state} onChange={(event) => setState(!state)}/>
            <label className="text-white font-Nunito text-button">{placeholder}</label>
        </div>
    );
    }