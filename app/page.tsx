import Link from "next/link";
import AnimatedContainer from "./components/AnimatedContainer";

export default function Home() {

  return (
    <AnimatedContainer>
      <Link href="/">Wie funktioniert das?</Link>
      <Link href="/raid-generator/home">Time</Link>
    </AnimatedContainer>
  );
}
