import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types for the state
interface AppContextType {
  selectedBoss: string;
  setSelectedBoss: React.Dispatch<React.SetStateAction<string>>;
  selectedTime: string;
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
  trainerName: string;
  setTrainerName: React.Dispatch<React.SetStateAction<string>>;
  trainerID: string;
  setTrainerID: React.Dispatch<React.SetStateAction<string>>;
}

// Create context
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedBoss, setSelectedBoss] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [trainerName, setTrainerName] = useState<string>("");
  const [trainerID, setTrainerID] = useState<string>("");

  return (
    <AppContext.Provider
      value={{
        selectedBoss,
        setSelectedBoss,
        selectedTime,
        setSelectedTime,
        trainerName,
        setTrainerName,
        trainerID,
        setTrainerID,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};