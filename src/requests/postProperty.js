import axios from "axios";

const postProperty = (data) => {
  axios
    .post("http://localhost:4000/api/v1/PropertyListing", data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

export default postProperty;
