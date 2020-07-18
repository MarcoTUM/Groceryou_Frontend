import HttpService from "./HttpService";
import {serverUrl} from "../shared/serverUrl"

import store from "../store";
import {confirm_state} from "../shared/confirmStates";

export default class SmsService {
    static baseURL() {return serverUrl + "/sms";}

    static sendConfirmation(content){
        return new Promise((resolve,reject) => {
            let message = "Dear customer, \n Your items have been purchased and are on their way!";

            //find if there are missing objects
            let missing = [];

            for(let item in content.replacements.items){
                if(content.replacements.items[item].state != confirm_state.confirm)
                    missing.push(content.replacements.items[item].content.name);
            }

            if(missing.length !== 0){
                message += "\n\nThe following items were unavailable at the specified store:\n";
                for (let item in missing)
                    message += missing[item] +"\n"
            }

            message+="\n";

            let replacements = [];

            for(let prop in content.replacements.replacement){
                if(Object.prototype.hasOwnProperty.call(content.replacements.replacement, prop)){
                    const price =  content.replacements.items[prop].content.unitPrice *
                        content.replacements.items[prop].content.amount;
                    replacements.push(
                        content.replacements.items[prop].content.name +
                        " for " + price + "€" +
                        " Has been replaced with: " +
                        content.replacements.replacement[prop].name + " for  " +
                        content.replacements.replacement[prop].price +"€\n"
                    );
                }
            }

            for(let replacement in replacements)
                message+= replacements[replacement];

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
