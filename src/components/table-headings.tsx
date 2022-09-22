import styled from "styled-components";

const Thead = styled.thead`
  background: #d2d2d2;
`;

const TableHeading = ({ tHeadings }: any) => {
  return (
    <>
      <Thead>
        <tr>
          {tHeadings &&
            tHeadings.map((head: any, i: any) => <th key={i}>{head}</th>)}
        </tr>
      </Thead>
    </>
  );
};

export default TableHeading;
