import HttpService from "./HttpService";
import store from "../store";
import {logout} from "../redux/authActions";
import {serverUrl} from "../shared/serverUrl";

export default class UserService {
    // static baserURL() {return "http://localhost:8080/auth"; }
    static baserURL() {return serverUrl + "auth"; }

  static frontEndURL() {
    return "http://localhost:3000/";
  }

    static register(user,pass, userData) {
        return new Promise((resolve,reject) => {
            HttpService.post(UserService.baserURL() + '/register', {
                username: user,
                password: pass,
                userData: userData
            }, (data) => {
                resolve(data);
                window.location.assign(UserService.frontEndURL());
            }, (textStatus) => {
                reject(textStatus);
            });
        });
    }

  static login(user, pass) {
    return new Promise((resolve, reject) => {
      HttpService.post(
        UserService.baserURL() + "/login",
        {
          username: user,
          password: pass,
        },
        (data) => {
          resolve(data);
          window.location.assign(UserService.frontEndURL());
        },
        (textStatus) => {
          reject(textStatus);
        }
      );
    });
  }

  static logout() {
    //window.localStorage.removeItem('jwtToken'); //deprecated -> use the auth reducer
    store.dispatch(logout());
    return new Promise((resolve, reject) => {
      HttpService.get(
        UserService.baserURL() + "/logout",
        (data) => {
          window.location.assign(UserService.frontEndURL());
          resolve(data);
        },
        (statusText) => {
          reject(statusText);
        }
      );
    });
  }

  static getCurrentUser() {
    // let token = window.localStorage['jwtToken']; //deprecated
    let token = store.getState().auth.token;
    if (!token || token === "null" || token === null) return {};

    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace("-", "+").replace("_", "/");
    return {
      id: JSON.parse(window.atob(base64)).id,
      username: JSON.parse(window.atob(base64)).username,
    };
  }

  static isAuthenticated() {
    // return window.localStorage['jwtToken']; //deprecated -> use the auth reducer
    return (
      store.getState().auth.token !== null &&
      store.getState().auth.token !== "null"
    );
  }

    static isAuthenticated(){
        // return window.localStorage['jwtToken']; //deprecated -> use the auth reducer
        return store.getState().auth.token !== null && store.getState().auth.token !== 'null';
    }

    static isCourier() {
        return new Promise((resolve, reject) => {
            HttpService.post(UserService.baserURL() + '/amICourier',{
                id: UserService.getCurrentUser().id
            },(data) =>{
                resolve(data.isCourier)
            }, (textStatus) => {
                reject(textStatus)
            });
        });
    }
}
