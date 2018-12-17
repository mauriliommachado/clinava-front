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

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
