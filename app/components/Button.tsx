// next imports
import Link from 'next/link';

// typescript types
interface ButtonProps {
    linkTo: string;
    text: string;
    onClick: void;
}



export default function Button( {linkTo, text, onClick}: ButtonProps) {
    return (
        <div className="bg-primary rounded-lg w-full inline-flex text-center items-center justify-center px-8 py-4 cursor-pointer" onClick={() => {onClick}}>
            <Link className="text-white font-Nunito font-semibold text-button" href={linkTo}>{text}</Link>
        </div>
    );
    }