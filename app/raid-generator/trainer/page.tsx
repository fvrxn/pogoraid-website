"use client"

// react imports
import { useState } from "react";

// components imports
import BackButton from "@/app/components/BackButton";
import Button from "@/app/components/Button";
import InputField from "@/app/components/InputField";

export default function Trainer() {
const [trainerName, setTrainerName] = useState("");
const [trainerID, setTrainerID] = useState("");

const handleTrainerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setTrainerName(event.target.value);
}

const handleTrainerIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setTrainerID(event.target.value);
}

  return (
    <div className="flex flex-col">
    <BackButton />
    <h1 className="font-Nunito text-white font-semibold text-heading mt-6">
      Wie lautet dein Trainername und deine TrainerID?
    </h1>
    <InputField placeholder="Trainername" changeValue={handleTrainerNameChange} value={trainerName}/>
    <InputField placeholder="Trainer ID" changeValue={handleTrainerIDChange} value={trainerID}/>
    <div id="spacer" className="mt-40" />
    <Button linkTo="/raid-generator/host" text="Abschließen" />
  </div>
  );
  }