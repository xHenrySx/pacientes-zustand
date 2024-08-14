import { Patient } from "../types";

import { usePatientStore } from "../store/store";

import PatientItemDetail from "./PatientItemDetail";
import { toast } from "react-toastify";

interface PatienItemProps {
  patient: Patient;
}

const PatientItem = ({ patient }: PatienItemProps) => {
  const { deletePatient } = usePatientStore();

  return (
    <div className="mx-5 my-10 px-5 py-5 bg-white shadow-md rounded-xl">
      <PatientItemDetail label="ID" value={patient.id} />
      <PatientItemDetail label="Nombre" value={patient.name} />
      <PatientItemDetail label="Propietario" value={patient.caretaker} />
      <PatientItemDetail label="Sintomas" value={patient.symptoms} />
      <PatientItemDetail label="Fecha Alta" value={patient.date.toString()} />
      <PatientItemDetail label="Correo" value={patient.email} />
      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => {
            deletePatient(patient.id);
            toast("Paciente eliminado.", {
              type: "info",
            });
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PatientItem;
