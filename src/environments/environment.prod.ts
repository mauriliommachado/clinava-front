export const environment = {
  production: true,
  apiUrl: 'https://clinava.herokuapp.com/api/business/'+JSON.parse(localStorage.getItem("currentUser")).businessId
};
