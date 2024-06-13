import Link from "next/link";
import AnimatedContainer from "./components/AnimatedContainer";
import Card from "./components/Card";

export default function Home() {

  return (
    <AnimatedContainer>
      <Card>
        <h1>Willkommen beim Raid Generator!</h1>
        <Link href="/">Wie funktioniert das?</Link>
        <Link href="/raid-generator/home">Time</Link>
      </Card>
    </AnimatedContainer>
  );
}
