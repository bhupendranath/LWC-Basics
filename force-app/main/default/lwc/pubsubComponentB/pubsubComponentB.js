import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubComponentB extends LightningElement {
    message

    //on load of the component itself it should subscribe, so we will use connectedCallback()
    //So on loading if we have to call something then we will use connectedCallback()
    connectedCallback(){
        this.callSubscriber()
    }
    callSubscriber(){
        pubsub.subscribe('componentA', (message)=>{
            this.message = message
        })
    }
}