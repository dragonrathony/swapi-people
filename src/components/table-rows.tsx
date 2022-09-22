import _ from "lodash";

const TableRow = ({ tRowsData }: any) => {
  return (
    <>
      <tbody>
        {_.forOwn(tRowsData, (val, key) => {
          <tr key={key}>{val}</tr>;
        })}
      </tbody>
    </>
  );
};

export default TableRow;
