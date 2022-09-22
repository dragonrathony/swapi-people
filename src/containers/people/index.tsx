import { useEffect, useState } from "react";
import Button from "../../components/button";
import { PageHeading } from "../../components/page-heading";
import Table from "../../components/table";
import TableFooter from "../../components/table-footer";
import TableHeading from "../../components/table-headings";
import TableRow from "../../components/table-rows";
import { Wrapper } from "../../components/wrapper";
import useFetchPeople from "../../hooks/useFetchPeople";

type Peoples = {
  count: number;
  next: string;
  results: {}[];
};

const People = () => {
  const { data, loading, error } = useFetchPeople();
  const [peoples, setPeoples] = useState<Peoples | any>();
  const tableHeadings = ["Name", "Height", "Mass", "Hair Color", "Action"];
  const viewPeopleDetailsModalHandler = () => {
    console.log("_dd view user clicked");
  };
  useEffect(() => {
    console.log("_dd data", data, loading);

    setPeoples(data);
  }, [data]);

  return (
    <Wrapper>
      <PageHeading>People list</PageHeading>

      {loading && <div>Loading...</div>}

      {error && <div>${error}</div>}

      {peoples?.results && (
        <>
          <Table>
            <TableHeading tHeadings={tableHeadings} />

            {/* {peoples?.results?.map((people: any, i: number): any => (
          <TableRow
            tRowsData={{
              name: people.name,
              height: people.height,
              mass: people.mass,
              hair_color: people.hair_color,
              action: (
                <button onClick={viewPeopleDetailsModalHandler}>View</button>
              ),
            }}
          />
        ))} */}
            <tbody>
              {peoples?.results?.map((people: any, i: number): any => (
                <tr key={i}>
                  <td>{people.name}</td>
                  <td>{people.height}</td>
                  <td>{people.mass}</td>
                  <td>{people.hair_color}</td>
                  <td>
                    <Button>View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <TableFooter>
            <Button>Previous</Button>
            <Button>Next</Button>
          </TableFooter>
        </>
      )}
    </Wrapper>
  );
};

export default People;
