import "../../styles/UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import * as Icon from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FeedbackList() {

    const [feedbacks, setFeedbacks] = useState([]);
    const {search} = useLocation();
  
    useEffect(() => {
      const fetchFeedbacks = async () => {
        const res = await axios.get("/contact/all"+search);
        setFeedbacks(res.data)
      };
      fetchFeedbacks();
    }, [search]);


  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 200,
    },

    {
      field: "email",
      headerName: "Email",
      width: 300,
    },
    { field: "createdAt", headerName: "Written on", width: 150, },

    {
        field: "message",
        headerName: "Message",
        width: 450,
      },

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
    <div className="userList" >
      <DataGrid
        rows={feedbacks}
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
