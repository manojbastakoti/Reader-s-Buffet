import React from "react";
import "../styles/PostDetailsPage.css";
import BlogSidebar from "./BlogSidebar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import * as Icon from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchCurrentUser } from "../utils/fetchCurrentUser";
import { useDispatch } from "react-redux";
import { useQueries, useQuery } from "@tanstack/react-query";
import { setUser } from "../redux/slices/authSlice";

export default function PostDetailsPage() {
  const dispatch = useDispatch();

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/blog/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.description);
    };
    getPost();
  }, [path]);

  const [userResult] = useQueries({
    queries: [
      {
        queryKey: ["current-user", 1],
        queryFn: fetchCurrentUser,
        onSuccess: (data) => {
          if (data.status === 200) {
            dispatch(setUser(data.data.data));
          }
        },
        onError: (error) => {
          console.log(error);
        },
      },
    ],
  });

  const handleDelete = async () => {
    try {
      await axios.delete("/blog/" + path, {
        data: { username: userResult?.data?.data?.data?.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put("/blog/" + path, {
        username: userResult?.data?.data?.data?.username,
        title: title,
        description: desc,
      });
      // window.location.reload();
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="postDetailsPage">
        <div className="container-fluid">
          <div className="row ">
            <div className="abc col-sm-11 ">
              <div className="SinglePost">
                <div className="singlePostWrapper">
                  {post.photo && (
                    <div className="singlePostImg">
                      <Image
                        src={process.env.REACT_APP_BASE_API + post.photo}
                        alt="PostDetail"
                        fluid
                        thumbnail
                      />
                    </div>
                  )}
                  {updateMode ? (
                    <input
                      type="text"
                      value={title}
                      autoFocus
                      className="singlePostTitleInput"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  ) : (
                    <h1 className="singlePostTitle">
                      {title}
                      {post.username ===
                        userResult?.data?.data?.data?.username && (
                        <div className="singlePostEdit">
                          <Row className="siglePostIcons">
                            <Icon.PencilSquare
                              className="updateIcons"
                              size={16}
                              color="green"
                              onClick={() => setUpdateMode(true)}
                            />

                            <Icon.TrashFill
                              className="updateIcons"
                              size={16}
                              color="red"
                              onClick={handleDelete}
                            />
                          </Row>
                        </div>
                      )}
                    </h1>
                  )}
                  <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                      Author:
                      <Link className="link" to={`/blog?user=${post.username}`}>
                        <b>{post.username}</b>
                      </Link>
                    </span>
                    <span className="singlePostDate">
                      {new Date(post.createdAt).toDateString()}
                    </span>
                  </div>

                  {updateMode ? (
                    <textarea
                      className="singlePostDescInput"
                      value={desc}
                      rows={6}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  ) : (
                    <p className="singlePostDesc">{desc}</p>
                  )}
                {updateMode &&(
                  <button className="singlePostButton" onClick={handleUpdate}>
                    Update
                  </button>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="def col-sm-8 col-md-4 col-lg-3">
              <BlogSidebar />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
