"use client";

// components imports
import BackButton from "@/app/components/BackButton";
import Button from "@/app/components/Button";


export default function Host() {
    return (
      <div className="flex flex-col">
      <BackButton />
      <h1 className="font-Nunito text-white font-semibold text-heading mt-6">
        Deinen Raid teilen:
      </h1>
      <div id="spacer" className="mt-40" />
      <div id="share-buttons" className="flex flex-row justify-center">
        <div id="whatsapp-share-button" className="">
            <Button linkTo="/raid-generator/trainer" text="WhatsApp" />
        </div>
        <div id="copy-button" className="ml-6">
            <Button linkTo="/raid-generator/trainer" text="Kopieren" />
        </div>
      </div>
    </div>
    );
  }