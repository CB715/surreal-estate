import axios from "axios";

const postProperty = (data, setAlert) => {
  axios
    .post("http://localhost:4000/api/v1/PropertyListing", data)
    .then(() => {
      setAlert({
        message: "Property Added!",
        isSuccess: true,
      });
    })
    .catch(() => {
      setAlert({
        message: "Server Error, please try again later.",
        isSuccess: false,
      });
    });
};

export default postProperty;
