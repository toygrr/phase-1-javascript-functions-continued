function saturdayFun(event = "roller-skate") {
    return `This Saturday, I want to ${event}!`
}

function mondayWork(event = "go to the office"){
    return `This Monday, I will ${event}.`;
}

function wrapAdjective(wrap){
    return function(x){
        return `You are ${wrap}${x}${wrap}!`
    }
}