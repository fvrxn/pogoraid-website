"use client";

// components imports
import BackButton from "@/app/components/BackButton";
import Button from "@/app/components/Button";
import TimeInput from "@/app/components/TimeInput";


export default function Time() {
    return (
      <div className="flex flex-col">
      <BackButton />
      <h1 className="font-Nunito text-white font-semibold text-heading mt-6">
        Wann findet der Raid statt?
      </h1>
      <TimeInput />
      <div id="spacer" className="mt-40" />
      <Button linkTo="/raid-generator/time" text="Weiter" />
    </div>
    );
  }