import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    constructor(){
        super()
        //this.template.addEventListener('mouseover', fun) // this we rarely use
        console.log('Parent constructer called')
    }
    connectedCallback(){
        console.log('Parent connectedCallback called')
    }
    renderedCallback(){
        console.log('Parent renderedCallback called')
    }

    //Performance impact of renderedCallback() : this method called everytime you change anything in the component
    //hence we should not use renderedCallback() method to change state or update property
    //below code is ex.
    name
    changeHandler(event){
        this.name = event.target.value
    }

    isChildVisible=false
    handleClick(){
        //this.isChildVisible = true
        this.isChildVisible = !this.isChildVisible //to toggle the button
    }

    //errorCallback(error, stack) takes 2 argument
    errorCallback(error, stack){
        console.log(error.message)
        console.log(stack) //it will show the stack(component) from where error is occuring
    }
}