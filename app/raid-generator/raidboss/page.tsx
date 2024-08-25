"use client";

import { use, useContext } from "react";
import { AppContext } from "@/app/context/AppContext";

// components imports
import BackButton from "@/app/components/BackButton";
import Button from "@/app/components/Button";
import DropDown from "@/app/components/DropDown";


export default function RaidBoss() {

  const { selectedBoss, setSelectedBoss } = useContext(AppContext);

  return (
    <div className="flex flex-col">
      <BackButton />
      <h1 className="font-Nunito text-white font-semibold text-heading mt-6">
        Welchen Raidboss möchtest du hosten?
      </h1>
      <DropDown text="Raidboss auswählen" state={selectedBoss} setState={setSelectedBoss} />
      <div id="spacer" className="mt-40" />
      <Button linkTo="/raid-generator/time" text="Weiter" />
    </div>
  );
}
