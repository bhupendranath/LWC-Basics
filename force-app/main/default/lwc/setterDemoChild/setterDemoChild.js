import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {

    userDetails
    //@api detail
    @api 
    get detail(){
        return this.userDetails
    }
    set detail(data){
        let newAge = data.age*2 //Changing the age value to double
        this.userDetails = {...data, age:newAge,"location":"Dubai"} //updating the age and adding location property using Spread operator
    }
}