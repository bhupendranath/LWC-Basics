import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

    constructor(){
        super()
        //this.template.addEventListener('mouseover', fun) // this we rarely use
        console.log('Child constructer called')
    }

    //interval
    connectedCallback(){
        console.log('Child connectedCallback called')
        throw new Error('loading of child component failed') //whenever it throws the error we will catch 
        //this error in parent JS component
        
    //window.addEventListener('click', this.handleclick) 
        //Window propery exist till the browser runs to remove this
        //we can use removeEventListener in disconnectedCallback() method
        //similarly for set interval
    //this.interval = window.setInterval() 
        //when we are removing the component this methos still runs behind the scene
        //we can remove this in disconnectedCallback() method
    }
    renderedCallback(){
        console.log('Child renderedCallback called')
    }
    disconnectedCallback(){
        alert('Child disconnectedCallBack called!!')
        //window.removeEventListener('click', this.handleclick)
        //window.clearInterval(this.interval)
    }
}