'use client';
// component imports
import AnimatedContainer from "./components/AnimatedContainer";

// react imports
import { useState } from "react";
import { useEffect } from "react";

// component imports
import DropDown from "./components/DropDown";
import TimeInput from "./components/TimeInput";
import InputField from "./components/InputField";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";

export default function Home() {

  // variables
  var unmount = true;
  var availableData = false;
  var raidTemplate = '';

  // states
  const [raidBoss, setRaidBoss] = useState('');
  const [time, setTime] = useState('');
  const [trainer, setTrainer] = useState('');
  const [trainerCode, setTrainerCode] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (unmount) {
    // fetch trainer name
    const savedTrainerName = localStorage.getItem('trainerName');
    if (savedTrainerName) {
      // console log
      console.log('Trainer name: '+trainer+' found in local storage');
      // change state
      setTrainer(savedTrainerName);
      // display that there is data available
      availableData = true;
    } else console.log('No trainer name found in local storage');

    // fetch trainer code
    const savedTrainerCode = localStorage.getItem('trainerCode');
    if (savedTrainerCode) {
      // console log
      console.log('Trainer name: '+trainer+' found in local storage');
      // change state
      setTrainerCode(savedTrainerCode);
      // display that there is data available
      availableData = true;
    } else console.log('No trainer code found in local storage');

    // mounted
    unmount = false;
    if (availableData) setRememberMe(true);
    }
  }, []);
  

  // function to update the checkbox)
  function updateCheckBox() {
    // if user unchecks the checkbox, clear the local storage
    if (rememberMe) {
      localStorage.clear();
      setRememberMe(false);
    }

    // if user checks the checkbox, save the data to local storage
    else {
      localStorage.setItem('trainerName', trainer);
      localStorage.setItem('trainerCode', trainerCode);
      setRememberMe(true);
    }
  }

  // function to generate the raid template
  function generateTemplate() {
    // todo -> check if null

    if (raidBoss) {
      const { label, boss } = JSON.parse(raidBoss);
      raidTemplate = raidTemplate + `${label} - ${boss} \n`;
      raidTemplate = raidTemplate + `🕞 Startzeit: ${time} \n`;
      raidTemplate = raidTemplate + `\n`;
      raidTemplate = raidTemplate + `1️⃣ - \n`;
      raidTemplate = raidTemplate + `2️⃣ - \n`;
      raidTemplate = raidTemplate + `3️⃣ - \n`;
      raidTemplate = raidTemplate + `4️⃣ - \n`;
      raidTemplate = raidTemplate + `5️⃣ - \n`;
      raidTemplate = raidTemplate + `\n`;
      raidTemplate = raidTemplate + `Host: ${trainer} \n`;
      raidTemplate = raidTemplate + `ID: ${trainerCode} \n`;

      console.log(raidTemplate);
    }

  }

  return (
    <AnimatedContainer>
      <h1 className="text-white font-Nunito font-bold text-heading">Pokemon Go Raid Generator</h1>

      <p className="text-white font-Nunito text-text pt-2">Welcome to the Pokemon Go Raid Generator. Please select the raid boss you would like to battle and the number of trainers in your group.</p>


      <div className="form">
        <DropDown text="Raid Boss" state={raidBoss} setState={setRaidBoss} />

        <TimeInput />

        <InputField type="trainerid" placeholder="Trainername" changeValue={(event) => setTrainer(event.target.value)} value={trainer} />
        <InputField type="trainercode" placeholder="Trainer Code" changeValue={(event) => setTrainerCode(event.target.value)} value={trainerCode} />

        
        <Button linkTo="" text="Generate Raid" onClick={generateTemplate()}/>
        <CheckBox placeholder="Daten für nächsten Raid merken" state={rememberMe} setState={updateCheckBox} />

      </div>
    </AnimatedContainer>
  );
}
