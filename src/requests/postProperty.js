import axios from "axios";

const postProperty = (data, setAlert) => {
  axios
    .post("http://localhost:4000/api/v1/PropertyListing", data)
    .then((response) => {
      console.log(response.data);
      setAlert({
        message: "Property Added!",
        isSuccess: true,
      });
    })
    .catch((error) => {
      console.log(error.response.data);
      setAlert({
        message: "Server Error, please try again later.",
        isSuccess: false,
      });
    });
};

export default postProperty;
