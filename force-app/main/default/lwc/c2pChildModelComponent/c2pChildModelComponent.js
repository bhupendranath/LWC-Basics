import { LightningElement } from 'lwc';

export default class C2pChildModelComponent extends LightningElement {

    closeHandler(){
        //creating cutom event to call parent(OR send data to parent)
        //give event name always lowercase within string: close

        //in event we can pass simple data using detail property 
        /*const myEvent = new CustomEvent('close', {
            detail:"Model Closed Successfully!!(from child)"
        })*/


        //we can even pass complex data(Objs) in details
        //bubbles:true bydefault bubble is false
        const myEvent = new CustomEvent('close', {
            bubbles:true,
            detail:{
                msg:"Model Closed Successfully!!(from child)"
            }
        })

        //dispatch even
        this.dispatchEvent(myEvent) //OR this.dispatchEvent(new CustomEvent('close'))
    }

    footerHandler(){
        console.log('footer event called')
    }
}