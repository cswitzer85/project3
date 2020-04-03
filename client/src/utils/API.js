import axios from "axios";

export default {
  getRecipes: function() {
    return axios.get("/pizza/specialties");
  },

  getUserData: function() {
    return axios.get("/api/user_data");
  },

  logout: function() {
    return axios.get("/api/logout");
  },

  // getOrder: function() {
  //   return axios.post("/pizza/orders");
  // }
};
