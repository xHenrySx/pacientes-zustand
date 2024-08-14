import { usePatientStore } from "../store/store";
import PatientItem from "./PatientItem";

const PatientList = () => {
  const { patients } = usePatientStore();

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bolt">Pacientes y Citas</span>
          </p>
          {patients.map((patient) => (
            <PatientItem key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;
