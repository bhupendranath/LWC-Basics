import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {

    userName = ["John","Smith","Nik","Harry"];

    fetchDetailHandler(){
        //this.template : looks into my(Current) template not other templates
        const elem = this.template.querySelector('h1'); 
        elem.style.border = "1px solid red"; //adding style dynamically on h1 element
        console.log(elem.innerText); 

        const userElement = this.template.querySelectorAll('.name');
        //we should not directly run loop, but first we convert into array then run the loop
        Array.from(userElement).forEach(item=>{
            console.log(item.innerText);

            //while hovering it will display text dynamically
            item.setAttribute("title",item.innerText); //setAttribute takes 2 params
        });

        //lwc:dom="manual"
        const childElem = this.template.querySelector('.child');
        //whatever we assign here, it will immidiately replace the existing text
        childElem.innerHTML = '<p> Hey I am a Child Element</p>'; 
        //this child tag will not visible initially, but when we click the Fetch button it become visible
    }
}