import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001",
});

const sendMailToUser = (values) => {
  return apiClient
    .post("/send/mail", values)
    .then((value) => value)
    .catch((error) => console.log(error));
};

export default sendMailToUser;
