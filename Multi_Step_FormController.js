({
    doInit : function(component, event, helper) {
        helper.toggleOneAndTwoSteps(component);
        component.set("v.progressIndicatorFlag", "step1");
    },
    goToStepTwo : function(component, event, helper) {
        //helper.toggleOneAndTwoSteps(component);
        helper.toggleTwoAndThreeSteps(component);
        component.set("v.progressIndicatorFlag", "step2");
    },
    goToStepThree : function(component, event, helper) {
        helper.toggleThreeAndFourSteps(component);
        component.set("v.progressIndicatorFlag", "step3"); 
    },
    goToStepFour : function(component, event, helper) {
        helper.toggleFourAndFiveSteps(component);
        component.set("v.progressIndicatorFlag", "step4"); 
    },
    goToStepFive : function(component, event, helper) {
        helper.toggleFiveAndSixSteps(component);
		component.set("v.progressIndicatorFlag", "step5");
        
        /*var action = component.get('c.Journal_Entry');
        var feeloption214 = event.target.value;
        action.setParams({
           "eventtype":"Journal"
       });
       action.setCallback(this, function(response) {
        //store state of response
        var state = response.getState();
        let errors = response.getError();
        let message = 'Unknown error'; // Default error message
        if (state === "SUCCESS") {
         //set response value in ListOfAccount attribute on component.
         console.log('SUCCESS2');
        } else{
            console.log('Error');
            console.log('Error'+errors[0].message);
        }
       });
       $A.enqueueAction(action);*/
    },
    goBackToStepOne : function(component, event, helper) {
        helper.toggleOneAndTwoSteps(component);
        component.set("v.progressIndicatorFlag", "step1");
    },
    goBackToStepTwo : function(component, event, helper) {
        helper.toggleTwoAndThreeSteps(component);
        component.set("v.progressIndicatorFlag", "step2");
    },
    goBackToStepThree : function(component, event, helper) {
        helper.toggleThreeAndFourSteps(component);
        component.set("v.progressIndicatorFlag", "step2");
    },
    goBackToStepFour : function(component, event, helper) {
        helper.toggleFiveAndSixSteps(component);
        component.set("v.progressIndicatorFlag", "step2");
    },
    handleSuccess : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The record has been updated successfully."
        });
        toastEvent.fire();
    }
})
