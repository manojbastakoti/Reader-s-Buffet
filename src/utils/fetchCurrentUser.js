import axios from "axios";

export const fetchCurrentUser = async () => axios.get("/user/current-user");
