import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { listarPorFiltros } from "../../../services/listarPorFiltrosService";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ListRegistrosPages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [results, setResults] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Número de Personas",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  });

  const handleSearch = async () => {
    try {
      const response = await listarPorFiltros(
        searchTerm,
        filterType,
        filterDate
      ); // Asegúrate de pasar los filtros necesarios
      setResults(response);
      console.log("Buscando registros con:", response);
    } catch (error) {
      console.error("Error al buscar registros:", error);
    }
  };

  useEffect(() => {
    if (results.length === 0) return;

    const typeCount = results.reduce((acc, registro) => {
      const tipoMuestra =
        registro.id_examen_examene.id_tipo_muestra_tipos_muestra.tipo_muestra;
      acc[tipoMuestra] = (acc[tipoMuestra] || 0) + 1;
      return acc;
    }, {});

    const data = {
      labels: Object.keys(typeCount),
      datasets: [
        {
          label: "Número de Personas",
          data: Object.values(typeCount),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    };

    setChartData(data);
  }, [results]);

  return (
    <div className="list-registros-page">
      <div className="filters">
        <h2>Filtros</h2>
        <div className="filter">
          <label>Tipo de Registro:</label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="1">Tipo de muestra</option>
            <option value="2">Tipo de examen</option>
            <option value="3">Estado de muestra</option>
          </select>
        </div>
        <div className="filter">
          <label>Buscar por término:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar..."
          />
        </div>
        <div className="filter">
          <label>Fecha:</label>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          Buscar
        </button>
      </div>
      <div className="results">
        <h1>Listado de Registros</h1>
        <div className="search-results">
          {results.length > 0 ? (
            results.map((registro, index) => (
              <div key={index} className="registro-card">
                <h3>Registro ID: {registro.id_visita}</h3>
                <p>
                  <strong>Paciente:</strong>{" "}
                  {registro.id_paciente_paciente.primer_nombre}{" "}
                  {registro.id_paciente_paciente.segundo_nombres}{" "}
                  {registro.id_paciente_paciente.primer_apellido}{" "}
                  {registro.id_paciente_paciente.segundo_apellido}
                </p>
                <p>
                  <strong>Género:</strong>{" "}
                  {registro.id_paciente_paciente.genero}
                </p>
                <p>
                  <strong>Dirección:</strong>{" "}
                  {registro.id_paciente_paciente.direccion}
                </p>
                <p>
                  <strong>Médico:</strong>{" "}
                  {registro.id_medico_medico.primer_nombre}{" "}
                  {registro.id_medico_medico.segundo_nombre}{" "}
                  {registro.id_medico_medico.primer_apellido}{" "}
                  {registro.id_medico_medico.segundo_apellido}
                </p>
                <p>
                  <strong>Correo Electrónico del Médico:</strong>{" "}
                  {registro.id_medico_medico.correo_electronico}
                </p>
                <p>
                  <strong>Teléfono del Médico:</strong>{" "}
                  {registro.id_medico_medico.telefono}
                </p>
                <p>
                  <strong>Tipo de Examen:</strong>{" "}
                  {
                    registro.id_examen_examene.id_tipo_examen_tipos_examen
                      .tipo_examen
                  }
                </p>
                <p>
                  <strong>Tipo de Muestra:</strong>{" "}
                  {
                    registro.id_examen_examene.id_tipo_muestra_tipos_muestra
                      .tipo_muestra
                  }
                </p>
                <p>
                  <strong>Estado de la Muestra:</strong>{" "}
                  {
                    registro.id_examen_examene.id_estado_muestra_estados_muestra
                      .estado_muestra
                  }
                </p>
              </div>
            ))
          ) : (
            <p>No se encontraron registros.</p>
          )}
        </div>
      </div>
      {results.length > 0 && (
        <div className="chart-container">
             <h2>Gráfica de Tipo de Muestra</h2>
            <Bar data={chartData} />
        </div>
      )}
      <div className="espacio"> </div>
    </div>
  );
}

export default ListRegistrosPages;
