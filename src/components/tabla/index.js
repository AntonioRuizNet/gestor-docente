import React, { useState } from "react";
import { Button } from "../button";

//Styles
import { StyledTable, PaginationTable, ItemPaginationTable, StyledTableRow } from "./styled";

export default function Index({ widths, header, data, buildLinea, optionsTable }) {
  console.log(optionsTable);
  const [activePage, setActivePage] = useState(1);
  const itemsPage = 10;
  const pages = Math.ceil(data.length / itemsPage);
  let pagination = [];
  for (let pag = 1; pag < pages + 1; pag++) {
    pagination.push(pag);
  }

  return (
    <>
      <StyledTable key={"table"}>
        <StyledTableRow key={"header"}>
          {header.map((header, index) => (
            <div
              key={"header" + index}
              style={{
                fontWeight: "bold",
                padding: "5px",
                width: widths[index] + "%",
              }}
            >
              {header}
            </div>
          ))}
        </StyledTableRow>

        {data.map(
          (line, index) =>
            index >= itemsPage * (activePage - 1) &&
            index < itemsPage * activePage && (
              <StyledTableRow key={"row" + index}>
                {line.map((data2, index2) => (
                  <div key={"body" + index2} style={data2 === null ? { padding: "5px", width: widths[index2] + "%", textAlign: "right" } : { padding: "5px", width: widths[index2] + "%" }}>
                    {data2 !== null
                      ? data2
                      : optionsTable.map((opt) => {
                          return <Button key={opt.value} className={opt.className} text={opt.value} onClick={() => buildLinea(line[0], opt.value)} />;
                        })}
                  </div>
                ))}
                <div></div>
              </StyledTableRow>
            )
        )}
      </StyledTable>
      <PaginationTable key={"pagination"}>
        {pagination.map((page, index) => (
          <ItemPaginationTable key={"pagination" + index} onClick={() => setActivePage(page)}>
            {page}
          </ItemPaginationTable>
        ))}
      </PaginationTable>
    </>
  );
}
