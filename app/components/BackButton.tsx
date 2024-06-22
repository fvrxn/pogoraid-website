import Link from "next/link";

export default function BackButton() {
    return (
      <Link className="bg-primary text-text font-Nunito rounded-full text-white w-20 px-4 py-4 text-center" href={".."}>Zurück</Link>
    );
  }