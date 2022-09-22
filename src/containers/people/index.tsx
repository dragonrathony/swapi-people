import { useEffect, useState } from "react";
import Button from "../../components/button";
import Filter from "../../components/filter";
import { PageHeading } from "../../components/page-heading";
import Table from "../../components/table";
import TableFooter from "../../components/table-footer";
import TableHeading from "../../components/table-headings";
import { Wrapper } from "../../components/wrapper";
import useFetchPeople from "../../hooks/useFetchPeople";
import { BASE_URL } from "../../utils/constants";

type Peoples = {
  count: number;
  next: string;
  results: {}[];
};

const People = () => {
  const { data, loading, error } = useFetchPeople(BASE_URL);
  const [peoples, setPeoples] = useState<Peoples | any>();
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const tableHeadings = ["Name", "Height", "Mass", "Hair Color", "Action"];

  const viewPeopleDetailsModalHandler = () => {
    console.log("_dd view user clicked");
  };

  const goToPage = (link: String) => {
    console.log('goto page...', link);
    // const {data, loading, error} = useFetchPeople(link);
    // console.log("_dd sssssssssssssdata", data, loading);
  };

  const filter = (value: string) => {
    console.log('fitler...', value);
  }

  useEffect(() => {
    console.log("_dd data", data, loading);
    setPeoples(data);
    setIsLoading(loading);
    setErrorMsg(error);
  }, []);

  

  return (
    <Wrapper>
      <PageHeading>People list</PageHeading>

      <Filter onChange={(e) => {filter(e.target.value)}}/>

      {isLoading && <div>Loading...</div>}

      {errorMsg && <div>${errorMsg}</div>}

      {!isLoading && peoples?.results && (
        <>
          <Table>
            <TableHeading tHeadings={tableHeadings} />
            <tbody>
              {peoples.results?.map((people: any, i: number): any => (
                <tr key={i}>
                  <td>{people.name}</td>
                  <td>{people.height}</td>
                  <td>{people.mass}</td>
                  <td>{people.hair_color}</td>
                  <td>
                    <Button onClick={viewPeopleDetailsModalHandler}>View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <TableFooter>
            <Button onClick={() => goToPage(peoples.previous)} disabled={!peoples.previous}>Previous</Button>
            <Button onClick={() => goToPage(peoples.next)} disabled={!peoples.next}>Next</Button>
          </TableFooter>
        </>
      )}
    </Wrapper>
  );
};

export default People;
