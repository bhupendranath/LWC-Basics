import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
   
    fullName="LWC Champ"; //Sending the data to HTML
    title="Aura";   //Aura is value for the property title

    changeHandler(event){
        
        //here getting the input data from HTML : Ex. 2 Way Data Binding
        this.title = event.target.value  //to extract the value that user has typed
        //event.target.value: Under the event there is target obj and target object holds the value property
        //and the value property will hold the value that user has typed
    }

    /*@track address={
        city:"Bangalore",
        postCode:560045,
        country:"India"
    }
    trackHandler(event){
        //this.address.city = event.target.value;  //instead of mutaing the data we can generate new copy
    }
    */
    //(city,postCode,country) are Object values(key-value pairs) for the property Address
    //@track >> Note: JS says we should not mutate the data, but we should always generate new copy of that data

    address={
        city:"Bangalore",
        postCode:560045,
        country:"India"
    }
    //similar implementation for array for reactive property

    trackHandler(event){

        this.address = {...this.address, "city":event.target.value}; 
        //here we are using spread operator which will spread all the property(city,postCode,country)
        //and if the city val is available on the left side the it gets overwritten
        //so we get new city value in the obj and we assigning those to value directly to the address
        //whenever value directly gets updated, automaticall our LWC engine re-renders. Hence we don't 
        //need to think of @track OR anything
    }
   
    /********Getter*****************/
    users = ["John","Smith","Nick"];
    num1=10;
    num2=20;
    //this.firstUser = this.user[0]; whenever user[0] updated, we need to update this.first user again & again
    //But in getter whenever user[0] gets updated, firstUser() automatically re-render in the HTML

    get firstUser(){
        return this.users[0].toUpperCase();
    }
    get multiply(){
        return this.num1*this.num2;
    }

    /**********Conditional Rendering******/
    //Falsy Values EX.: x=0, false, undefined, null, "" (Empty string) 
    //Above falsy value will always be false for if:true condition
    isVisible = false;
    name
    handleClick(event){
        this.isVisible=true;
    }

    conditionkHandler(event){
        this.name = event.target.value;
    }

    get getHelloMethod(){
        return this.name==="hello";
    }

    /**********Template Looping******/
    carList = ["XUV700", "Ford","Audi","BMW","Tesla"]; 
    
    //Array/list of object
    ceoList = [
        {
            id:1,
            company:"Google",
            ceoName:"Sundar Pichai"
        },
        {
            id:2,
            company:"Apple",
            ceoName:"Tim Cook"
        },
        {
            id:3,
            company:"Facebook",
            ceoName:"Mark Zuckerberg"
        },
        {
            id:4,
            company:"Amazon",
            ceoName:"Jeff Bezos"
        }
    ];
}