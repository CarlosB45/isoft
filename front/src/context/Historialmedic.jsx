import { createContext, useContext, useState, useEffect } from "react";
import { createRequest } from "../api/histortialclinico";

const Historialmedic = createContext();

export const useHistorialmedic = () => {
  const context = useContext(Historialmedic);

  if (!context) {
    throw new Error("useHistorialmedic no puede ser usado sin HistorialmedicProvider");
  }

  return context;
};


export function HistorialmedicProvider({ children }) {
    const createhistorial = async (historial) => {
        try {
          
        } catch (error) {
          
        }
      };
  return (
    <Historialmedic.Provider
      value={{

      }}
    >
      {children}
    </Historialmedic.Provider>
  );
}