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
        <div className="pt-5">
            <input type='checkbox' checked={state} onChange={(event) => setState(!state)}/>
            <label className="text-white font-Nunito text-button pl-2">{placeholder}</label>
        </div>
    );
    }