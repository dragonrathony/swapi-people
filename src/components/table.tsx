import styled from "styled-components";

const StyledTable = styled.table`
  margin: 0 auto;
  box-shadow: 0px 0px 10px 0px #bfbfbf;

  tr,
  td,
  th {
    text-align: left;
    padding: 0.5rem;
  }

  tfoot {
    margin: 0 auto;
    padding: 0 1rem;
  }

  tr: hover {
    background: #f3f3f3;
  }
`;

export const Table = ({ children }: any) => {
  return (
    <>
      <StyledTable cellSpacing="0" cellPadding="0">
        {children}
      </StyledTable>
    </>
  );
};

export default Table;
