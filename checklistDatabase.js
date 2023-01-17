///////////////////////////////////////////////////////////////////////////////////// REACTION TO AREA PROBLEM /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const reactionToPropblem1 = {
    reactionId:1,
    value:'Užpildyti bilietą odoo'
}

const reactionToPropblem2 = {
    reactionId:2,
    value:'Skambinti pagal skambinimo matricą'
}

const reactionToProblem3 = {
    reactionId:3,
    value: 'Užpildyti bilietą grandlund manager'
}

const reactionToProblem4 = {
    reactionId:4,
    value:'užpildyt bilietą odoo'
}
const reactionToProblem5 = {
    reactionId:5,
    value:'žiūrėk instrukcijas prie įrenginio'
}

const reactionToProblem6 = {
    reactionId:6,
    value:'Elgtis pagal vandens nuotekio instrukcija'
}
const reactionToProblem7 = {
    reactionId:7,
    value:'užrakinti vartus'
}
///////////////////////////////////////////////////////////////////////////////////// POSSIBLE AREA PROBLEM /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const possibleAreaProblem1 = {
    possibleProblemId:1,
    value:'Girdisi pašaliniai garsai'
}
const possibleAreaProblem2 = {
    possibleProblemId:2,
    value:'Neveikia apšvietimas'
}
const possibleAreaProblem3 = {
    possibleProblemId:3,
    value:'Yra  šiukšlės'
}

const possibleAreaProblem4 ={
    possibleProblemId:4,
    value:'Girdisi pašaliniai  garsai'
}

const possibleAreaProblem5 = {
    possibleProblemId:5,
    value:'Jaučiasi svylimo kvapas'
}
const possibleAreaProblem6 = {
    possibleProblemId:6,
    value:'yra vandens nuotekis'
}
const possibleAreaProblem7 = {
    possibleProblemId:7,
    value:'dega raudonos lemputės'
}

const possibleAreaProblem8 = {
    possibleProblemId:8,
    value:'užsikimšęs/uždengtas vandens nubėgimo trapas'
}
const possibleAreaProblem9 = {
    possibleProblemId:9,
    value:'Neatitinka normalios nuotraukos būsenos'
}

const possibleAreaProblem10 = {
    possibleProblemId:10,
    value:'Yra šiukšlės, purvas, pašaliniai garsai'
}
const possibleAreaProblem11 = {
    possibleProblemId:11,
    value:'Yra vandens nuotekų'
}
const possibleAreaProblem12 = {
    possibleProblemId:12,
    value:'Mažiau nei 20 ar nesutampa balionų rodmenys'
}
const possibleAreaProblem13 = {
    possibleProblemId:13,
    value:'ant žemės matosi antifrizas'
}
const possibleAreaProblem14 = {
    possibleProblemId:14,
    value:'neužrakinti vartai'
}

const possibleAreaProblem15 = {
    possibleProblemId:15,
    value:'dega bent dvi raudonos lemputės'
}

const possibleAreaProblem16 = {
    possibleProblemId:16,
    value:'dega viena raudona lemputė'
}

const possibleAreaProblem17 = {
    possibleProblemId:17,
    value:'Dega lemputė prie užrašo "gaisras"'
}

const possibleAreaProblem18 = {
    possibleProblemId:18,
    value:'Dega lemputė prie užrašo "gedimas"'
}

const possibleAreaProblem19 = {
    possibleProblemId:19,
    value:'Slėgis mažesnis nei 2,5 arba viršija 6 Bar'
}

const possibleAreaProblem20 = {
    possibleProblemId:19,
    value:'Slėgis mažesnis nei žalioje zonoje'
}
//////////////////////////////////////////////////////////////////////////////////////// AREA PROBLEMS AND REACTION //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////// ROUTE 1 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const route1ProblemAndReaction1 = {
    routeId:1,
    areaId:1,
    dutyId: 1,
    problem: possibleAreaProblem1,
    reaction: reactionToPropblem1,
}
const route1ProblemAndReaction2 = {
    routeId:1,
    areaId:1,
    dutyId: 1,
    problem: possibleAreaProblem13,
    reaction: reactionToPropblem2,
}
const route1ProblemAndReaction3 = {
    routeId:1,
    areaId:1,
    dutyId: 1,
    problem: possibleAreaProblem14,
    reaction: reactionToProblem7,
}
const route1ProblemAndReaction4 = {
    routeId:1,
    areaId:1,
    dutyId: 1,
    problem: possibleAreaProblem3,
    reaction: reactionToProblem3,
}

/////////////////////////////////////////////////////////// ROUTE 2 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const route2ProblemAndReaction1 = {
    routeId:2,
    areaId:1,
    dutyId: 1,
    problem: possibleAreaProblem2,
    reaction: reactionToPropblem1,
}

const route2ProblemAndReaction2 = {
    routeId:2,
    areaId:1,
    dutyId: 1,
    problem: possibleAreaProblem4,
    reaction: reactionToPropblem1,
}

const route2ProblemAndReaction3 = {
    routeId:2,
    areaId:1,
    dutyId: 1,
    problem: possibleAreaProblem5,
    reaction: reactionToPropblem2,
}

const route2ProblemAndReaction4 = {
    routeId:2,
    areaId:1,
    dutyId: 1,
    problem: possibleAreaProblem6,
    reaction: reactionToPropblem2,
}

const route2ProblemAndReaction5 = {
    routeId:2,
    areaId:1,
    dutyId: 1,
    problem: possibleAreaProblem3,
    reaction: reactionToProblem4,
}

const route2ProblemAndReaction6 = {
    routeId:2,
    areaId:1,
    dutyId: 2,
    problem: possibleAreaProblem7,
    reaction: reactionToProblem5,
}

const route2ProblemAndReaction7 = {
    routeId:2,
    areaId:1,
    dutyId: 3,
    problem: possibleAreaProblem7,
    reaction: reactionToProblem5,
}

const route2ProblemAndReaction8 = {
    routeId:2,
    areaId:2,
    dutyId: 1,
    problem: possibleAreaProblem6,
    reaction: reactionToProblem3,
}
const route2ProblemAndReaction9 = {
    routeId:2,
    areaId:2,
    dutyId: 1,
    problem: possibleAreaProblem2,
    reaction: reactionToProblem3,
}
const route2ProblemAndReaction10 = {
    routeId:2,
    areaId:2,
    dutyId: 1,
    problem: possibleAreaProblem4,
    reaction: reactionToProblem3,
}
const route2ProblemAndReaction11 = {
    routeId:2,
    areaId:2,
    dutyId: 1,
    problem: possibleAreaProblem3,
    reaction: reactionToProblem3,
}
const route2ProblemAndReaction12 = {
    routeId:2,
    areaId:2,
    dutyId: 1,
    problem: possibleAreaProblem8,
    reaction: reactionToProblem3,
}
const route2ProblemAndReaction13 = {
    routeId:2,
    areaId:2,
    dutyId: 2,
    problem: possibleAreaProblem15,
    reaction: reactionToPropblem2,
}
const route2ProblemAndReaction14 = {
    routeId:2,
    areaId:2,
    dutyId: 2,
    problem: possibleAreaProblem16,
    reaction: reactionToPropblem1,
}


/////////////////////////////////////////////////////////// ROUTE 1 FINAL //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const route1Area1ProblemsAndReactions = [ 
    route1ProblemAndReaction1,
    route1ProblemAndReaction2,
    route1ProblemAndReaction3,
    route1ProblemAndReaction4
];
const route1Area1ToDo1 = {
    duty: 'apžiūrėti šaldymo įrenginiųs (ŠM1, ŠM2, ŠM3)',
    dutyId:1,
    possiblePropblems: route1Area1ProblemsAndReactions
}
const route1Area1 = {
    roomName: 'n/a',
    areaId: 1,
    toDo:[route1Area1ToDo1]
};

const route1 ={
    routeNumber: 1,
    floor: 'Lauke',
    routeId:1,
    areaNumber: 'n/a',
    area: [route1Area1],
};

/////////////////////////////////////////////////////////// ROUTE 2 FINAL //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////ROUTE 2 AREA 1 ///////////////////////

const route2Area1Duty1ProblemsAndReactions = [
    route2ProblemAndReaction1,
    route2ProblemAndReaction2,
    route2ProblemAndReaction3,
    route2ProblemAndReaction4,
    route2ProblemAndReaction5
];

const route2Area1Duty2ProblemsAndReactions = [
    route2ProblemAndReaction6
];

const route2Area1Duty3ProblemsAndReactions = [
    route2ProblemAndReaction7
];

const route2Area1ToDo1 = {
    duty: 'apžiureti patalpą',
    dutyId:1,
    possiblePropblems: route2Area1Duty1ProblemsAndReactions,
};

const route2Area1ToDo2 = {
    duty: 'apžiureti patalpą',
    dutyId:2,
    possiblePropblems: route2Area1Duty2ProblemsAndReactions,
};

const route2Area1ToDo3 = {
    duty: 'apžiureti patalpą',
    dutyId:3,
    possiblePropblems: route2Area1Duty3ProblemsAndReactions,
};

const route2Area1 = {
    roomName: 'B ir A įvadų nameliai',
    areaId:1,
    toDo: [route2Area1ToDo1, route2Area1ToDo2, route2Area1ToDo3],
};

//////////////////////ROUTE 2 AREA 2 ///////////////////////

const route2Area2Duty1ProblemsAndReactions = [
    route2ProblemAndReaction8,
    route2ProblemAndReaction9,
    route2ProblemAndReaction10,
    route2ProblemAndReaction11,
    route2ProblemAndReaction12,
];
const route2Area2Duty2ProblemsAndReactions = [
    route2ProblemAndReaction13,
    route2ProblemAndReaction14,
];
const route2Area2ToDo1 = {
    duty: 'apžiureti patalpą  ir elektros įvadų namelių perimetrą',
    dutyId:1,
    possiblePropblems: route2Area2Duty1ProblemsAndReactions,
};

const route2Area2ToDo2 = {
    duty: 'Patrikrinti RA2 mikroklimato palaikymo sistemos skydelį',
    dutyId:2,
    possiblePropblems: route2Area2Duty2ProblemsAndReactions,
};

const route2Area2 = {
    roomName: 'n/a',
    areaId:2,
    toDo: [route2Area2ToDo1, route2Area2ToDo2],
};
///////////////////////////////////// FULL ///////////////////////////////////////////
const route2 = {
    routeNumber: 2,
    
    routeId:2,
    
    floor: '1',
    
    areaNumber: '029',
    
    area:[route2Area1, route2Area2]
};
const checklistRoutes = [
    route1,
    route2,
];
export default checklistRoutes;
