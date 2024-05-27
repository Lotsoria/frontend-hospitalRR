import React, { useState, useEffect } from "react";
import "./css/styles.css";
import Swal from "sweetalert2";
import withReactContent  from "sweetalert2-react-content";
import { getPacienteByCodigoUnico } from "../../../services/pacientesService";
import { getMedicosById } from "../../../services/medicosService";
import { getTiposExamen } from "../../../services/registros/tipoExamenService";
import { getEstadosMuestra } from "../../../services/registros/estadoMuestra";
import { getTiposMuestra } from "../../../services/registros/tipoMuestraService";
import { createExamen } from "../../../services/registros/examenService";
import { createVisita } from "../../../services/registros/visitasService";

function CrearRegistrosPages() {
  const [currentStep, setCurrentStep] = useState(1);
  // Paciente
  const [codigoUnico, setCodigoUnico] = useState("");
  const [paciente, setPaciente] = useState(null);
  // Médicos
  const [medicoId, setMedicoId] = useState("");
  const [medico, setMedico] = useState(null);
  // Tipos de Examen
  const [tiposExamen, setTiposExamen] = useState([]);
  const [selectedTipoExamen, setSelectedTipoExamen] = useState("");
  // Tipos de Muestra
  const [tiposMuestra, setTiposMuestra] = useState([]);
  const [selectedTipoMuestra, setSelectedTipoMuestra] = useState("");
  // Estados de Muestra
  const [estadosMuestra, setEstadosMuestra] = useState([]);
  const [selectedEstadoMuestra, setSelectedEstadoMuestra] = useState("");
  // Errores
  const [errorPaciente, setErrorPaciente] = useState("");
  const [errorMedico, setErrorMedico] = useState("");
  //? Funciones de navegación del stepper
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step) => {
    if (step >= 1 && step <= 3) {
      setCurrentStep(step);
    }
  };
  //TODO swal
  const MySwal = withReactContent(Swal);
  //TODO Alerta
  const handleAlert = (data) => {
    MySwal.fire({
      title: "Generando registro!",
      text: "¿Desea continuar?",
      icon: "info",
      confirmButtonText: "Sí",
      showCancelButton: true,
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const responseVisita = await createVisita(data);

        console.log("Datos del Registro:", responseVisita);
        MySwal.fire("Registro efectuado correctamente!", "", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        MySwal.fire("¡Hasta luego!", "", "error");
      }
    });
  };

  //TODO Handler paciente
  const handleCodigoUnicoChange = (event) => {
    setCodigoUnico(event.target.value);
  };
  //TODO Handler médico
  const handleMedicoIdChange = (event) => {
    setMedicoId(event.target.value);
  };
  //TODO Handlers Examen
  const handleTipoExamenChange = (event) => {
    setSelectedTipoExamen(event.target.value);
  };
  //TODO Handlers Muestra
  const handleTipoMuestraChange = (event) => {
    setSelectedTipoMuestra(event.target.value);
  };
  //TODO Handlers Estado Muestra
  const handleEstadoMuestraChange = (event) => {
    setSelectedEstadoMuestra(event.target.value);
  };
  //TODO Guardar Registro
  const handleGuardarRegistro = async () => {
    const dataExamen = {
      id_tipo_examen: selectedTipoExamen,
      id_tipo_muestra: selectedTipoMuestra,
      id_estado_muestra: selectedEstadoMuestra,
    };
    const response = await createExamen(dataExamen);
    console.log("response", response.data.id_examen);
    console.log("response", paciente);
    const datosVisita = {
      id_paciente: paciente.id_paciente,
      id_medico: medico.id_medico,
      id_examen: response.data.id_examen,
    };

    handleAlert(datosVisita);
  };
  //TODO Pacientes
  useEffect(() => {
    const fetchPaciente = async () => {
      if (codigoUnico.trim() !== "") {
        setErrorPaciente("");
        const response = await getPacienteByCodigoUnico(codigoUnico);
        if (response) {
          setPaciente(response.data);
        } else {
          setPaciente(null);
          setErrorPaciente("No se encontró un paciente con este código único");
        }
      } else {
        setPaciente(null);
        setErrorPaciente("");
      }
    };

    fetchPaciente();
  }, [codigoUnico]);
  //TODO Médicos
  useEffect(() => {
    const fetchMedico = async () => {
      if (medicoId.trim() !== "") {
        setErrorMedico("");
        const response = await getMedicosById(medicoId);
        if (response) {
          setMedico(response.data);
        } else {
          setMedico(null);
          setErrorMedico("No se encontró un médico con este ID");
        }
      } else {
        setMedico(null);
        setErrorMedico("");
      }
    };

    fetchMedico();
  }, [medicoId]);
  //TODO Tipos de Examen
  useEffect(() => {
    const fetchTiposExamen = async () => {
      const response = await getTiposExamen();
      if (response) {
        setTiposExamen(response.data);
      } else {
        setTiposExamen([]);
      }
    };

    fetchTiposExamen();
  }, []);
  //TODO Tipos de Muestra
  useEffect(() => {
    const fetchTiposExamen = async () => {
      const response = await getTiposMuestra();
      if (response) {
        setTiposMuestra(response.data);
      } else {
        setTiposMuestra([]);
      }
    };

    fetchTiposExamen();
  }, []);
  //TODO Estados de Muestra
  useEffect(() => {
    const fetchEstadosMuestra = async () => {
      const response = await getEstadosMuestra();
      if (response) {
        setEstadosMuestra(response.data);
      } else {
        setEstadosMuestra([]);
      }
    };

    fetchEstadosMuestra();
  }, []);

  return (
    <div className="stepper-container">
      <h1>Crear Registros</h1>
      <div className="stepper">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`step ${currentStep === step ? "active" : ""}`}
            onClick={() => goToStep(step)}
          >
            Paso {step}
          </div>
        ))}
      </div>
      <div className="step-content">
        {currentStep === 1 && (
          <div>
            <h2>Datos del paciente</h2>
            <input
              type="text"
              placeholder="Código único del paciente"
              value={codigoUnico}
              onChange={handleCodigoUnicoChange}
            />
            {paciente && (
              <div>
                <h3>Información del Paciente</h3>
                <p>
                  Nombre: {paciente.primer_nombre} {paciente.primer_apellido}
                </p>
                <p>Dirección: {paciente.direccion}</p>
                <p>Género: {paciente.id_genero}</p>
              </div>
            )}
            {errorPaciente && <p className="error">{errorPaciente}</p>}
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2>Datos del médico</h2>
            <input
              type="text"
              placeholder="ID del médico"
              value={medicoId}
              onChange={handleMedicoIdChange}
            />
            {medico && (
              <div>
                <h3>Información del Médico</h3>
                <p>
                  Nombre: {medico.primer_nombre} {medico.primer_apellido}
                </p>
                <p>Especialidad: {medico.especialidad}</p>
                <p>Teléfono: {medico.telefono}</p>
              </div>
            )}
            {errorMedico && <p className="error">{errorMedico}</p>}
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h2>Especificaciones del examen</h2>
            <div>
              <label>Tipo de examen</label>
              <select
                value={selectedTipoExamen}
                onChange={handleTipoExamenChange}
              >
                <option value="" disabled>
                  Seleccione un tipo de examen
                </option>
                {tiposExamen.map((tipo) => (
                  <option key={tipo.id_tipo_examen} value={tipo.id_tipo_examen}>
                    {tipo.tipo_examen}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Tipo de muestra</label>
              <select
                value={selectedTipoMuestra}
                onChange={handleTipoMuestraChange}
              >
                <option value="" disabled>
                  Seleccione un tipo de muestra
                </option>
                {tiposMuestra.map((tipo) => (
                  <option
                    key={tipo.id_tipo_muestra}
                    value={tipo.id_tipo_muestra}
                  >
                    {tipo.tipo_muestra}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Estado de la muestra</label>
              <select
                value={selectedEstadoMuestra}
                onChange={handleEstadoMuestraChange}
              >
                <option value="" disabled>
                  Seleccione un estado de la muestra
                </option>
                {estadosMuestra.map((estado) => (
                  <option
                    key={estado.id_estado_muestra}
                    value={estado.id_estado_muestra}
                  >
                    {estado.estado_muestra}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={handleGuardarRegistro}>Guardar Registro</button>
          </div>
        )}
      </div>
      <div className="stepper-navigation">
        <button onClick={prevStep} disabled={currentStep === 1}>
          Anterior
        </button>
        <button onClick={nextStep} disabled={currentStep === 3}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default CrearRegistrosPages;
