// next imports
import Link from "next/link";
import Image from "next/image";

// component imports
import AnimatedContainer from "./components/AnimatedContainer";
import Button from "./components/Button";

// asset imports
import pokemon from "../public/assets/images/pokemon.jpg";
import chevron from "../public/assets/icons/chevron-right.png";

export default function Home() {
  return (
    <AnimatedContainer>
      <Image
        src={pokemon}
        alt="Pokemon"
        width={1600}
        height={1200}
        className="h-[206px] rounded-2xl object-cover mt-4"
      />
      <h1 className="font-Nunito text-white font-semibold text-heading mt-12">
        Pokemon Go Raid Generator
      </h1>
      <p className="mt-5 font-Nunito text-white opacity-75 text-text">
        Schnell und einfach Raids erstellen und in WhatsApp teilen. Einfach die
        Schritte befolgen.
      </p>
      <div id="buttons" className="flex flex-row mt-6">
        <Button linkTo="/raid-generator/raidboss" text="Raid erstellen" />
        <div id="how-to-container" className="flex-grow ml-4 self-center">
          <Link href="/how-to">
            <div id="how-to" className="flex">
              <p className="font-Nunito text-white text-text">
                Wie es funktioniert
              </p>
              <Image
                src={chevron}
                alt="Chevron Right"
                width={14}
                height={14}
                className="ml-2"
              />
            </div>
          </Link>
        </div>
      </div>
      <div id="friendlist" className="pt-5">
        <Button linkTo="https://docs.google.com/spreadsheets/d/1OnADqJSCN9ApByVCGyDOfQrbS-cfARLEE_NSJCgHPa4/edit?usp=drivesdk" text="Freundesliste" />
      </div>
      <div id="placeholder" className="flex-grow"/>
      <div className="text-center text-white opacity-50 text-footer font-Nunito">
        <p>Made with ❤️ in Berlin</p>
        <Link href={"/impressum"} className="mt-4">
          Impressum
        </Link>
      </div>
    </AnimatedContainer>
  );
}
