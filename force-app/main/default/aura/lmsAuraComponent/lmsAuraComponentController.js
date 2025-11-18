({
    handleMessage:function(component, message){
        //component : here component is just instance of this aura component
        //message : message is the payload sent from LWC via message channel
        //var payload = message.getParam("payload");
        //console.log('Payload received in Aura Component: ' + JSON.stringify(payload));
        
        if(message!=null && message.getParam("lmsData")!=null){
            //setting the received message to aura attribute
            component.set("v.messageRecieved",message.getParam("lmsData").value)
        }
    },
    inputHandler:function(component, event){
        console.log(event.target.value);
        component.set("v.messageValue", event.target.value);
    },
    publishMessage:function(component){
        let msg=component.get("v.messageValue");
        let message={
            lmsData:{
                value:msg
            }
        }
        //calling publish method of message service to publish the message
        component.find("SampleMessageChannel").publish(message);
    }
})