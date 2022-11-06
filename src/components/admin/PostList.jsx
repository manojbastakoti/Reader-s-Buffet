import "../../styles/UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import * as Icon from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostList() {



    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/blog"+search);
        setPosts(res.data)
      };
      fetchPosts();
    }, [search]);

    // console.log()

    //   const handleDelete = (_id) => {
//     setUsers(users.filter((item) => item.id !== _id));
//   };

    // const handleDelete = async () => {
    //   try {
    //     await axios.delete("/user/" + params.id, {
    //       data: { username: userResult?.data?.data?.data?.username },
    //     });
    //     window.location.replace("/admin/users");
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "title",
      headerName: "Title",
      width: 200,
    },

    {
      field: "username",
      headerName: "Created by",
      width: 120,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 160,
      },
      { field: "description", headerName: "Description", width: 600, },

    {
      field: "action",
      headerName: "Action",
      width: 70,
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
              // onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList" >
      <DataGrid
        rows={posts}
        getRowId={(row) => row._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}
