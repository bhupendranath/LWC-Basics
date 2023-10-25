import { LightningElement } from 'lwc';

export default class ShadowDOMStyling extends LightningElement {

    isLoaded = false
    
    //renderedCallback() is get called whenever rendering is completed
    //OR whenever component is initialized
    renderedCallback(){
        if(this.isLoaded) return
        //to create element we use and Style is it's type : document.createElement('style');
        //document.createElement('style') >> it'll generate this [<style> </style>] behind the scene
        const styleVar = document.createElement('style')
        styleVar.innerText = `c-shadow-d-o-m-styling .slds-button{
            background: orange;
            color: white;
        }`
        this.template.querySelector('lightning-button').appendChild(styleVar)

        this.isLoaded = true
    }
}