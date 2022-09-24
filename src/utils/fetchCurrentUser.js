import axios from "axios";

export const fetchCurrentUser = () => axios.get("/user/current-user");
