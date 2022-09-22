const TableHeading = ({ tHeadings }: any) => {
  return (
    <>
      <thead>
        <tr>
          {tHeadings &&
            tHeadings.map((head: any, i: any) => <th key={i}>{head}</th>)}
        </tr>
      </thead>
    </>
  );
};

export default TableHeading;
