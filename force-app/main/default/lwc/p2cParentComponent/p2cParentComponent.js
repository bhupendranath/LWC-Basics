import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {

    carouselData=[
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header:"First Card",
            description:"First Description"
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header:"Second Card",
            description:"Second Description"
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header:"Third Card",
            description:"Third Description"
        }
    ]

    percentage=10

    changeHandler(event){
        this.percentage = event.target.value
    }

    handleClick(){
        //for calling child comp. method we need reference of the child comp : this.template.querySelector('c-p2c-child-slider-component')
        //here querySelector will fetch class or the element[c-p2c-child-slider-component]
        //once we fetch, now we can call the public method: resetSlider()
        this.template.querySelector('c-p2c-child-slider-component').resetSlider()
    }
}