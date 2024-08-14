import { v4 as uuidv4 } from "uuid";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { DraftPatient, Patient } from "../types";

interface PatientState {
  patients: Patient[];
  activeId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  updatePatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
}

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4() };
};

export const usePatientStore = create<PatientState>()(
  devtools(
    persist((set) => ({
      patients: [],
      activeId: "",
      addPatient: (data) => {
        set((state) => ({
          patients: [...state.patients, createPatient(data)],
        }));
      },

      deletePatient: (id) => {
        set((state) => ({
          patients: state.patients.filter((p) => p.id !== id),
        }));
      },

      getPatientById: (id) => {
        set(() => ({
          activeId: id,
        }));
      },

      updatePatient: (data) => {
        set((state) => ({
          patients: state.patients.map((p) => {
            if (p.id === state.activeId) {
              return { id: state.activeId, ...data };
            }

            return p;
          }),
        }));
      },
    }), {name: 'patient-storage'})
  )
);
