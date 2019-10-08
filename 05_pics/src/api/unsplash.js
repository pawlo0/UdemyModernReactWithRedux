import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      " Client-ID 61d8c024cd74b22653ea35ce524fc0cf14cec24050d88894e1924b97a7d3d5ba"
  }
});
