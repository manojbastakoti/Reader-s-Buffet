import "../../styles/UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import * as Icon from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("/book/buy/all" + search);
      setBooks(res.data.data.buybooks);
    };
    fetchBooks();
  }, [search]);

  // const books = data?.data?.data?.buybooks;
  console.log(books)


  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "title",
      headerName: "Title",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 80,
    },
    {
      field: "author",
      headerName: "Author",
      width: 200,
    },

    { field: "description", headerName: "Description", width: 600 },

    {
      field: "action",
      headerName: "Action",
      width: 70,
      renderCell: (params) => {
        return (
          <>
            <Icon.Trash
              size={20}
              color="red"
              className="userListDelete"
              //   onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="userList">
        <DataGrid
          rows={books}
          getRowId={(row) => row._id}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </div>
      <LinkContainer to="/add-buy-book">
        <Button variant="outline-success" className="w-20 m-10 listButton">
          Add Book
        </Button>
      </LinkContainer>
    </>
  );
}
