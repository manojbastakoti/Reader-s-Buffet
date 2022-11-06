import "../../styles/UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import * as Icon from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function UserList() {
  //   console.log(userRows);
  //   const [data, setData] = useState(userRows);

  //   const handleDelete = (_id) => {
  //     setUsers(users.filter((item) => item.id !== _id));
  //   };

  // const handleDelete = async () => {
  //     try {
  //       await axios.delete("/user/" + path, {
  //         data: { username: userResult?.data?.data?.data?.username },
  //       });
  //       window.location.replace("/blog");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  const [users, setUsers] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("/user" + search);
      setUsers(res.data);
    };
    fetchUsers();
  }, [search]);

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
    },
    { field: "fullName", headerName: "Full Name", width: 150 },
    { field: "email", headerName: "Email", width: 300 },

    {
      field: "phone",
      headerName: "Phone Number",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link> */}
            {/* <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
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
          rows={users}
          getRowId={(row) => row._id}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </div>
      <LinkContainer to="/register">
        <Button variant="outline-success" className="w-20 m-10 listButton">
          Add User
        </Button>
      </LinkContainer>
    </>
  );
}
