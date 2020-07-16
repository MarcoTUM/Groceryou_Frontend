import HttpService from "./HttpService";
import store from "../store";
import {serverUrl} from "../shared/serverUrl";

const fakedata = {itemList:[{name:"Apple",amount:3,unitType:"",unitPrice:0.49},
                            {name:"Toast",amount:1,unitType:"",unitPrice:0.99},
                            {name:"Pringles Onion",amount:2,unitType:"",unitPrice:1.99},
                            {name:"Pork Belly",amount:500,unitType:"g",unitPrice:0.01}],
                            userID:"5f0077dcf5970e230cbdf61f",
                            commission:15,
                            desiredDeliveryTimeStart:"2020-07-29T11:00:00.000Z",
                            desiredDeliveryTimeEnd:"2020-07-29T13:00:00.000Z"}

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

    static createRequest(){
        return new Promise((resolve,reject) => {
            HttpService.post(RequestService.baseURL() + '/requests',
            fakedata,
            (data) => {
                console.log(data);
                resolve(data);
            },
            (textStatus) => {
                reject(textStatus);

            });
        });
    }
}
