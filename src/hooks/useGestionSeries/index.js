import React from "react";

import { Button } from "../../components/button";
import { Input } from "../../components/input";
import Tabla from "../../components/tabla";

//mocks
import { widthsMock, headerMock, dataMock } from "./../../api/mock";

export default function index() {
  const handleNuevaSerie = () => {};
  const setValue = () => {};

  return (
    <>
      <div className="row" style={{ margin: "5px", marginTop: "15px" }}>
        <div className="col-12">
          <h2>Agrega una nueva serie</h2>
          <hr />
        </div>
        <div className="col-md-6 col-sm-12">
          Descripción
          <Input
            placeholder={"Describe la serie"}
            setValue={setValue}
            type={"text"}
            idInput={"descripcion"}
            className={""}
          />
        </div>
        <div className="col-md-2 col-sm-12">
          Código
          <Input
            placeholder={"FA-"}
            setValue={setValue}
            type={"text"}
            idInput={"codigo"}
            className={""}
          />
        </div>
        <div className="col-md-2 col-sm-12">
          Empieza
          <Input
            placeholder={"1"}
            setValue={setValue}
            type={"number"}
            idInput={"numero"}
            className={""}
          />
        </div>
        <div className="col-md-2 col-sm-12">
          <br />
          <Button text={"Crear"} onClick={handleNuevaSerie} />
        </div>
      </div>
      <div className="row" style={{ margin: "5px", marginTop: "40px" }}>
        <div className="col-12">
          <h2>Gestiona tus series</h2>
          <hr />
        </div>
        (Tipo, Ticket, Descripción, Serie)
        <Tabla widths={widthsMock} header={headerMock} data={dataMock} />
      </div>
    </>
  );
}
