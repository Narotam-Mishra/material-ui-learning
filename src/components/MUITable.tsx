
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MUITable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const tableData = [
  {
    id: 1,
    first_name: "Dreddy",
    last_name: "Whimpenny",
    email: "dwhimpenny0@mayoclinic.com",
    gender: "Female",
    ip_address: "15.174.69.48",
  },
  {
    id: 2,
    first_name: "Dotty",
    last_name: "Sherlock",
    email: "dsherlock1@xinhuanet.com",
    gender: "Female",
    ip_address: "111.22.158.244",
  },
  {
    id: 3,
    first_name: "Del",
    last_name: "De Andreis",
    email: "ddeandreis2@google.it",
    gender: "Polygender",
    ip_address: "226.68.46.180",
  },
  {
    id: 4,
    first_name: "Anna",
    last_name: "Fludder",
    email: "afludder3@barnesandnoble.com",
    gender: "Female",
    ip_address: "58.75.74.121",
  },
  {
    id: 5,
    first_name: "Eduardo",
    last_name: "Rump",
    email: "erump4@amazon.de",
    gender: "Male",
    ip_address: "217.50.231.88",
  },
  {
    id: 6,
    first_name: "Del",
    last_name: "Enoksson",
    email: "denoksson5@quantcast.com",
    gender: "Male",
    ip_address: "38.228.218.136",
  },
  {
    id: 7,
    first_name: "Sigismond",
    last_name: "McGillecole",
    email: "smcgillecole6@ftc.gov",
    gender: "Male",
    ip_address: "30.17.238.241",
  },
  {
    id: 8,
    first_name: "Inness",
    last_name: "Knee",
    email: "iknee7@google.com.br",
    gender: "Male",
    ip_address: "109.132.184.85",
  },
  {
    id: 9,
    first_name: "Terence",
    last_name: "Adderley",
    email: "tadderley8@moonfruit.com",
    gender: "Male",
    ip_address: "198.202.51.45",
  },
  {
    id: 10,
    first_name: "Sapphira",
    last_name: "Kerwen",
    email: "skerwen9@feedburner.com",
    gender: "Female",
    ip_address: "171.218.119.173",
  },
];
  

export default MUITable

