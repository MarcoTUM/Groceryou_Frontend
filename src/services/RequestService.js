import HttpService from "./HttpService";
import {serverUrl} from "../shared/serverUrl";

export default class RequestService{

    static baseURL() {return serverUrl;}
    
    static getRequests(){
        return new Promise((resolve,reject) => {
            HttpService.get(RequestService.baseURL() + '/requests',
            (data) => {
                resolve(data);
            },
            (textStatus) => {
                reject(textStatus);

            });
        });
    }

    static createRequest(newRequest){
        return new Promise((resolve,reject) => {
            HttpService.post(RequestService.baseURL() + '/requests',
            newRequest,
            (data) => {
                resolve(data);
            },
            (textStatus) => {
                reject(textStatus);

            });
        });
    }
}
