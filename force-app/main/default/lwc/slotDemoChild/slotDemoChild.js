import { LightningElement } from 'lwc';

export default class SlotDemoChild extends LightningElement {

    handleFooterChange(){
        const footerElement = this.template.querySelector('.slds-card_footer')
    }
    if(footerElement){
        footerElement.classList.remove('slds-hide')
    }
}