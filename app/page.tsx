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

  const [raidBoss, setRaidBoss] = useState('');
  const [time, setTime] = useState('');
  const [trainer, setTrainer] = useState('');
  const [trainerCode, setTrainerCode] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  var unmount = true;

  useEffect(() => {
    if (unmount) {
    // fetch trainer code & name
    const savedTrainerName = localStorage.getItem('trainerName');
    if (savedTrainerName) {
      console.log('Trainer name: '+trainer+' found in local storage');
      setTrainer(savedTrainerName);
    } else console.log('No trainer name found in local storage');
    const savedTrainerCode = localStorage.getItem('trainerCode');
    if (savedTrainerCode) {
      setTrainerCode(savedTrainerCode);
    } else console.log('No trainer code found in local storage');
    unmount = false;
    }
  }, []);
  

  return (
    <AnimatedContainer>
      <h1 className="text-white font-Nunito font-bold">Pokemon Go Raid Generator</h1>

      <p className="text-white font-Nunito text-button">Welcome to the Pokemon Go Raid Generator. Please select the raid boss you would like to battle and the number of trainers in your group.</p>


      <div className="form">
        <DropDown text="Raid Boss" state={raidBoss} setState={setRaidBoss} />

        <TimeInput />

        <InputField type="trainerid" placeholder="Trainername" changeValue={(event) => setTrainer(event.target.value)} value={trainer} />
        <InputField type="trainercode" placeholder="Trainer Code" changeValue={(event) => setTrainerCode(event.target.value)} value={trainerCode} />

        
        <Button linkTo="/result" text="Generate Raid" />
        <CheckBox placeholder="Remember me" state={rememberMe} setState={setRememberMe} />



        <p className="text-white text-bold" onClick={()=>{localStorage.setItem("trainerName", trainer)}}>Trainer code Speicerh</p>
        <p className="text-white text-bold" onClick={()=>{localStorage.clear();}}>Trainer löschen</p>

      </div>
    </AnimatedContainer>
  );
}
