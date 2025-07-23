import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {

    showModal=false
    msg
    clickHandler(){
        this.showModal = true
    }

    /*closeHandler(){
        this.showModal = false //calling parent using event
    }*/

    //calling parent using event with data
    closeHandler(event){
        //this.msg = event.detail //for simple data in event's details
        this.msg = event.detail.msg //for complex data in event's details
        this.showModal = false 
    }
}