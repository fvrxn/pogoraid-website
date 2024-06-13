// next imports
import Link from 'next/link';

// typescript types
interface ButtonProps {
    linkTo: string;
    text: string;
}



export default function Button( {linkTo, text}: ButtonProps) {
    return (
        <div className="bg-primary rounded-lg inline-flex text-center items-center justify-center px-8 py-4 cursor-pointer">
            <Link className="text-white font-Nunito font-semibold text-button" href={linkTo}>{text}</Link>
        </div>
    );
    }