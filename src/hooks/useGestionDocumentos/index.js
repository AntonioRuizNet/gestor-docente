import React from "react";

import { Button } from "../../components/button";
import "./styled.css";

export default function index() {
  const handleNewDocument = () => {};
  const documentosVentaDisponibles = [
    "Factura de venta",
    "Albarán de venta",
    "Pedido de venta",
    "Nota de venta",
  ];
  const documentosCompraDisponibles = [
    "Factura de compra",
    "Albarán de compra",
    "Pedido de compra",
    "Nota de compra",
  ];

  return (
    <>
      <div className="row" style={{ margin: "5px", marginTop: "15px" }}>
        <div className="col-12">
          <h2>Documentos de venta disponibles</h2>
          <hr />
        </div>

        {documentosVentaDisponibles.map((documento) => {
          return (
            <div className="col-md-3 col-sm-12 itemDoc">
              <Button text={documento} onClick={handleNewDocument} />
            </div>
          );
        })}

        <div className="col-12" style={{ marginTop: "25px" }}>
          <h2>Documentos de compra disponibles</h2>
          <hr />
        </div>
        {documentosCompraDisponibles.map((documento) => {
          return (
            <div className="col-md-3 col-sm-12 itemDoc">
              <Button text={documento} onClick={handleNewDocument} />
            </div>
          );
        })}
      </div>
    </>
  );
}
