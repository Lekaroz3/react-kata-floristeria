import { useContext } from "react";
import { Link } from "react-router-dom";
import { FlorContext } from "../../context/FlorContext";

function DetallesFlor() {
  const { flor } = useContext(FlorContext);
  return (
    <div className="container-fluid mb-5 px-5 ">
      <div className="row mb-3">
        <div className="col-12">
          <Link to="/" className="ml-auto">
            <button className="btn btn-primary">Atrás</button>
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-header">{flor.name}</div>
        <div className="card-body">
          <div className="row">
            <div className="col-4-lg-4-sm-12">
              <img
                src={flor.imgUrl}
                alt={flor.name}
                className="img-fluid rounded float-start mt-4 ml-5"
                height="370"
                width="400"
              />
            </div>
            <div className="col-8-lg-8-sm-12 ml-auto mr-5">
              <h3 className="text-start">Descripción</h3>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      Nombre Cientifico: {flor.binomialName}
                    </div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      Riegos por semana: {flor.wateringsPerWeek}
                    </div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      Fertilizante recomendado:{" "}
                      {flor.fertilizerType === "phosphorus"
                        ? "Fosforado"
                        : "Nitrogenado"}
                    </div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Altura: {flor.heightInCm}cm</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Precio: {flor.price}€</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallesFlor;
