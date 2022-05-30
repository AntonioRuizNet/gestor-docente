import styled from "styled-components";

export const StyledTable = styled.div`
  background-color: white;
  border: 1px #e4e4e4 solid;
  padding: 5px;
  border-radius: 5px;
`;

export const StyledTableRow = styled.div`
  border-bottom: 1px #e4e4e4 solid;
  padding: 2px 5px;
  display: flex;
  &:last-child {
    border-bottom: 0px;
  }
`;

export const PaginationTable = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItemPaginationTable = styled.div`
  background-color: white;
  padding: 3px;
  text-align: center;
  border: 1px #e4e4e4 solid;
  width: 30px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
`;
