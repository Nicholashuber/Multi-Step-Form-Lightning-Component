({
    toggleOneAndTwoSteps : function(component){
        var stepOne = component.find("stepOne");
        //$A.util.toggleClass(stepOne, 'slds-hide');
        var stepTwo = component.find("stepTwo");
        $A.util.toggleClass(stepTwo, 'slds-hide');
        var stepThree = component.find("stepThree");
        $A.util.toggleClass(stepThree, 'slds-hide');
        var stepFour = component.find("stepFour");
        $A.util.toggleClass(stepFour, 'slds-hide');
        var stepFive = component.find("stepFive");
        $A.util.toggleClass(stepFive, 'slds-hide');
        
        console.log('1');
    },
    toggleTwoAndThreeSteps : function(component){
        var stepOne = component.find("stepOne");
        $A.util.toggleClass(stepOne, 'slds-hide');
        var stepTwo = component.find("stepTwo");
        $A.util.toggleClass(stepTwo, 'slds-hide');
        var stepThree = component.find("stepThree");
        //$A.util.toggleClass(stepThree, 'slds-hide');
        var stepFour = component.find("stepFour");
        //$A.util.toggleClass(stepFour, 'slds-hide');
        var stepFive = component.find("stepFive");
        //$A.util.toggleClass(stepFive, 'slds-hide');
        
        console.log('2');
    },
        toggleThreeAndFourSteps : function(component){
        var stepOne = component.find("stepOne");
        //$A.util.toggleClass(stepOne, 'slds-hide');
        var stepTwo = component.find("stepTwo");
        $A.util.toggleClass(stepTwo, 'slds-hide');  
        
        var stepThree = component.find("stepThree");
        $A.util.toggleClass(stepThree, 'slds-hide');
        var stepFour = component.find("stepFour");
        //$A.util.toggleClass(stepFour, 'slds-hide');
            console.log('3');
    },
    toggleFourAndFiveSteps : function(component){
        var stepOne = component.find("stepOne");
        //$A.util.toggleClass(stepOne, 'slds-hide');
        var stepTwo = component.find("stepTwo");
        //$A.util.toggleClass(stepTwo, 'slds-hide');  
        
        var stepThree = component.find("stepThree");
        $A.util.toggleClass(stepThree, 'slds-hide');
        var stepFour = component.find("stepFour");
        $A.util.toggleClass(stepFour, 'slds-hide');
        //var stepFive = component.find("stepFive");
        //$A.util.toggleClass(stepFive, 'slds-hide');
        console.log('4');
    },
        toggleFiveAndSixSteps : function(component){
            var stepOne = component.find("stepOne");
            //$A.util.toggleClass(stepOne, 'slds-hide');
            var stepTwo = component.find("stepTwo");
            //$A.util.toggleClass(stepTwo, 'slds-hide');  
            
            var stepThree = component.find("stepThree");
            //$A.util.toggleClass(stepThree, 'slds-hide');
            var stepFour = component.find("stepFour");
            $A.util.toggleClass(stepFour, 'slds-hide');
            var stepFive = component.find("stepFive");
            $A.util.toggleClass(stepFive, 'slds-hide');
            console.log('5'); 
    }
})
