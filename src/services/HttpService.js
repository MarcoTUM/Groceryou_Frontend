import store from "../store";
import {refresh} from "../redux/authActions";

export default class HttpService{
    static apiURL() {return "http://localhost:8080";}

    static get(url, onSuccess, onError){
        // let token = window.localStorage['jwtToken']; // deprecated
        let token = store.getState().auth.token;
        let header = new Headers();
        if(token){
            header.append('Authorization', 'JWT ' + token);
        }

        fetch(url,{
            method: 'GET',
            headers: header
        }).then((resp) => {
            if(this.checkIfUnauthorized(resp)){
                if(window.location.pathname !== '/login')
                    window.location = "/login";
            }
            else{
                return resp.json
            }
        }).then((resp)=>{
            if(resp.error){
                onError(resp.error);
            }
            else{
                const username = store.getState().auth.username;
                if(resp.hasOwnProperty('token') && username !== null && username !== 'null') {
                    // window.localStorage['jwtToken'] = resp.token; //deprecated -> use the auth reducer instead
                    store.dispatch(refresh(resp.token, username));
                }
                onSuccess(resp);
            }
        }).catch((e) => {
            onError(e.message);
        });
    }

    static put(url, data, onSuccess, onError){
        let token = window.localStorage['jwtToken'];
        let header = new Headers();
        if(token){
            header.append('Authorization', 'JWT ' + token);
        }
        header.append('Content-Type', 'application/json');

        fetch(url, {
            method: 'PUT',
            headers: header,
            body: JSON.stringify(data)
        }).then((resp) => {
            if(this.checkIfUnauthorized(resp)){
                if(window.location.pathname !== '/login')
                    window.location = "/login";
                return;
            }
            else{
                return resp.json();
            }
        }).then((resp) => {
            if(resp.error){
                onError(resp.error);
            }
            else{
                const username = store.getState().auth.username;
                if(resp.hasOwnProperty('token') && username !== null && username !== 'null') {
                    // window.localStorage['jwtToken'] = resp.token; //deprecated -> use the auth reducer instead
                    store.dispatch(refresh(resp.token, username));
                }
                onSuccess(resp);
            }
        }).catch((e) => {
            onError(e.message);
        });
    }

    static post(url, data, onSuccess, onError){
        let token = window.localStorage['jwtToken'];
        let header = new Headers();
        if(token){
            header.append('Authorization', 'JWT ' + token);
        }
        header.append('Content-Type', 'application/json');

        fetch(url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(data)
        }).then((resp) => {
            if(this.checkIfUnauthorized(resp)) {
                if(window.location.pathname !== '/login')
                    window.location = "/login";
                return;
            }
            else {
                return resp.json();
            }
        }).then((resp) => {
            if(resp.error){
                onError(resp.error);
            }
            else{
                const username = store.getState().auth.username;
                if(resp.hasOwnProperty('token') && username !== null && username !== 'null'){
                    // window.localStorage['jwtToken'] = resp.token; //deprecated -> use the auth reducer instead
                    store.dispatch(refresh(resp.token, username));
                }
                onSuccess(resp);
            }
        }).catch((e) => {
            onError(e.message);
        });
    }

    static remove(url, onSuccess, onError) {
        let token = window.localStorage['jwtToken'];
        let header = new Headers();
        if(token) {
            header.append('Authorization', 'JWT ' + token);
        }
        
        fetch(url,{
            method: 'DELETE',
            headers: header
        }).then((resp) => {
            if(this.checkIfUnauthorized(resp)){
                if(window.location.pathname !== '/login')
                    window.location = "/login";
                return;
            }
            else {
                return resp.json();
            }
        }).then((resp) => {
            if(resp.error) {
                onError(resp.error);
            }
            else {
                onSuccess(resp)
            }
        }).catch((e) => {
            onError(e.message);
        });
    }
    
    static checkIfUnauthorized(res){
        if(res.status === 401){
            return true;
        }
        return false;
    }
}
