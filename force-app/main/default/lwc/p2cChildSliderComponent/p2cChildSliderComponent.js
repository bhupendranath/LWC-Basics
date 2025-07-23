import { LightningElement, api } from 'lwc';

export default class P2cChildSliderComponent extends LightningElement {

    val=20

    changeHandler(event){
        this.val = event.target.value
    }

    //here we are making method as public which we will be defining in parent attribute
    //Calling Child method from Parent
    @api resetSlider(){
        this.val = 50
    }
}