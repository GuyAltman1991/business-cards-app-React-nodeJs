import axios from "axios";

const useAxios = () => {
  axios.interceptors.request.use((data) => {
    console.log("in useAxios request interceptor!!!");
    return Promise.resolve(data);
  }, null);

  axios.interceptors.response.use(
    (data) => {
      console.log("in useAxios response interceptor resolve");
      return Promise.resolve(data);
    },
    (error) => {
      console.log("in useAxios response interceptor error");
      return Promise.reject(error);
    }
  );
};

export default useAxios;
