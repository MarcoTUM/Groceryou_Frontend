"use strict";

import HttpService from "./HttpService";

export default class UserService {

    constructor() {
    }

    static baserURL() {return "http://localhost:8080/auth"; }

    static register(user,pass) {
        return new Promise((resolve,reject) => {
            HttpService.post(UserService.baserURL() + '/register', {
                username: user,
                password: pass
            }, (data) => {
                resolve(data);
            }, (textStatus) => {
                reject(textStatus);
            });
        });
    }

    static login(user,pass) {
        return new Promise((resolve,reject) => {
            HttpService.post(UserService.baserURL() + '/login', {
                username: user,
                password: pass
            }, (data) => {
                resolve(data);
            }, (textStatus) => {
                reject(textStatus);
            });
        });
    }

    static logout(){
        window.localStorage.removeItem('jwtToken');
    }

    static getCurrentUser() {
        let token = window.localStorage['jwtToken'];
        if(!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-','+').replace('_','/');
        return {
            id: JSON.parse(window.atob(base64)).id,
            username: JSON.parse(window.atob(base64)).username
        };
    }

    static isAuthenticated(){
        //this was the original statement:
        //return !!window.localStorage['jwtToken'];
        //so i left out the !!
        return window.localStorage['jwtToken'];
    }
}
