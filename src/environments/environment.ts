// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8888/api/business/',
  apiLogin: 'http://localhost:8888/api'
};

function GetBusinessId(){
  if(localStorage.getItem("currentUser") && JSON.parse(localStorage.getItem("currentUser"))){
    console.log(JSON.parse(localStorage.getItem("currentUser")));
    let id = JSON.parse(localStorage.getItem("currentUser")).businessId;
    console.log(id);
    return id;
  }else{
    return '';
  }
}
