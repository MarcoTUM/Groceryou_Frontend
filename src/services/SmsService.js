import HttpService from "./HttpService";
import {serverUrl} from "../shared/serverUrl"
import store from "../store";

export default class SmsService {
    static baseURL() {return serverUrl + "/sms";}

    static sendChangeRequest(content){
        return new Promise((resolve,reject) => {
            let message = "Dear Customer,\n" +
            "Unfortunately, not all listed items have been found in the requested store. Please have a look at the " +
            "suggested replacements made by your courier:\n\n";

            message += "DEMO CONTENT\n\n";

            message += "Sincerely, the Groceryou team.";

            HttpService.post(SmsService.baseURL(), {
                body: message,
                number: content.number
            }, (data) => {
                resolve(data);
            }, (textStatus) => {
                reject(textStatus);
            });
        });
    }

    static sendConfirmation(content){
        return new Promise((resolve,reject) => {
            let message = "Dear customer, \n Your items have been purchased and are on their way!";

            HttpService.post(SmsService.baseURL(), {
                body: message,
                number: content.number
            }, (data) => {
                resolve(data);
            }, (textStatus) => {
                reject(textStatus);

            });
        });
    }
}
