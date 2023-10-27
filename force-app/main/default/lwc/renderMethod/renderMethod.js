import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html';
import signUpTemplate from './signUpTemplate.html';
import renderTemplate from './renderMethod.html';
export default class RenderMethod extends LightningElement {

    selectedButton=''    //I am initialzing this property with empty string
    //render() : this is a keyword so we can't name custom method as render
    render(){
        return this.selectedButton ==='Signup' ? signUpTemplate : 
               this.selectedButton ==='Signin' ? signInTemplate : 
               renderTemplate
    }

    handleClick(event){
        this.selectedButton = event.target.label
    }

    submitHandler(event){
        console.log(`${event.target.label} Successfully!!`)
    }
}