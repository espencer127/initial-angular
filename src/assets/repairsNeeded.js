/*
document.getElementById("button1").addEventListener("click", function() {
    addRepair("0", false);
    buttChangeColor("button1","btn-success","button2","btn-default");
});

document.getElementById("button3").addEventListener("click", function() {
    addRepair("1", false);
    buttChangeColor("button3","btn-success","button4","btn-default");
});
document.getElementById("button4").addEventListener("click", function() {
    addRepair("1", true);
    buttChangeColor("button4","btn-danger","button3","btn-default");
});
document.getElementById("button5").addEventListener("click", function() {
    addRepair("2", false);
    buttChangeColor("button5","btn-success","button6","btn-default");
});
document.getElementById("button6").addEventListener("click", function() {
    addRepair("2", true);
    buttChangeColor("button6","btn-danger","button5","btn-default");
});
document.getElementById("button7").addEventListener("click", function() {
    addRepair("3", false);
    buttChangeColor("button7","btn-success","button8","btn-default");
});
document.getElementById("button8").addEventListener("click", function() {
    addRepair("3", true);
    buttChangeColor("button8","btn-danger","button7","btn-default");
});
document.getElementById("button9").addEventListener("click", function() {
    addRepair("4", false);
    buttChangeColor("button9","btn-success","button10","btn-default");
});
document.getElementById("button10").addEventListener("click", function() {
    addRepair("4", true);
    buttChangeColor("button10","btn-danger","button9","btn-default");
});
document.getElementById("button11").addEventListener("click", function() {
    addRepair("5", false);
    buttChangeColor("button11","btn-success","button12","btn-default");
    //illuminateRow("button14","button15");
});
document.getElementById("button12").addEventListener("click", function() {
    addRepair("5", true);
    buttChangeColor("button12","btn-danger","button11","btn-default");
    //illuminateRow("button14","button15");
});
document.getElementById("button13").addEventListener("click", function() {
    addRepair("6", false);
    buttChangeColor("button13","btn-success","button14","btn-default");
});
document.getElementById("button14").addEventListener("click", function() {
    addRepair("6", true);
    buttChangeColor("button14","btn-danger","button13","btn-default");
});
document.getElementById("button15").addEventListener("click", function() {
    addRepair("7", false);
    buttChangeColor("button15","btn-success","button16","btn-default");
});
document.getElementById("button16").addEventListener("click", function() {
    addRepair("7", true);
    buttChangeColor("button16","btn-danger","button15","btn-default");
});

document.getElementById("button17").addEventListener("click", function() {
    addRepair("8", false);
    buttChangeColor("button17","btn-success","button18","btn-default");
});
document.getElementById("button18").addEventListener("click", function() {
    addRepair("8", true);
    buttChangeColor("button18","btn-danger","button17","btn-default");
});

document.getElementById("button19").addEventListener("click", function() {
    addRepair("9", false);
    buttChangeColor("button19","btn-success","button20","btn-default");
});
document.getElementById("button20").addEventListener("click", function() {
    addRepair("9", true);
    buttChangeColor("button20","btn-danger","button19","btn-default");
});

document.getElementById("button21").addEventListener("click", function() {
    addRepair("10", false);
    buttChangeColor("button21","btn-success","button22","btn-default");
});
document.getElementById("button22").addEventListener("click", function() {
    addRepair("10", true);
    buttChangeColor("button22","btn-danger","button21","btn-default");
});

document.getElementById("button23").addEventListener("click", function() {
    addRepair("11", false);
    buttChangeColor("button23","btn-success","button24","btn-default");
});
document.getElementById("button24").addEventListener("click", function() {
    addRepair("11", true);
    buttChangeColor("button24","btn-danger","button23","btn-default");
});

document.getElementById("button25").addEventListener("click", function() {
    addRepair("12", false);
    buttChangeColor("button25","btn-success","button26","btn-default");
});
document.getElementById("button26").addEventListener("click", function() {
    addRepair("12", true);
    buttChangeColor("button26","btn-danger","button25","btn-default");
});

var repairList = [
    new repairs("Front wheel", "out of true",false),
    new repairs("Front hub", "needs tightening", true),
    new repairs("Front brake","needs repair", false),
    new repairs("Headset","needs tightening", false),
    new repairs("Bottom bracket","needs tightening", false),
    new repairs("Rear wheel", "out of true", false),
    new repairs("Rear hub", "needs tightening", false),
    new repairs("Rear brake", "needs repair", false),
    new repairs("Front shifting", "needs repair", false),
    new repairs("Rear shifting", "needs repair", false),
    new repairs("Front tire", "needs replacing", false),
    new repairs("Front tube", "needs replacing", false),
    new repairs("Pedals", "not present/need replaing", false)
  ];
*/
var possibleRepairs = [
    {
        area: "Front wheel",
        repair: "out of true",
        isNeeded: false,
    },
    {
        area: "Front hub",
        repair: "needs tightening",
        isNeeded: false
    },
    {
        area: "Front brake",
        repair: "needs repair",
        isNeeded: false
    },
    {
        area: "Headset",
        repair: "needs tightening",
        isNeeded: false
    },
    {
        area: "Bottom Bracket",
        repair: "needs tightening",
        isNeeded: false
    },
    {
        area: "Rear wheel",
        repair: "out of true",
        isNeeded: false
    },
    {
        area: "Rear hub",
        repair: "needs tightening",
        isNeeded: false
    },
    {
        area: "Rear brake",
        repair: "needs repair",
        isNeeded: false
    },
    {
        area: "Front shifting",
        repair: "needs repair",
        isNeeded: false
    },
    {
        area: "Rear shifting",
        repair: "needs repair",
        isNeeded: false
    },
    {
        area: "Front tire",
        repair: "needs replacing",
        isNeeded: false
    },
    {
        area: "Front tube",
        repair: "needs replacing",
        isNeeded: false
    },
    {
        area: "Pedals",
        repair: "not present/need replacing",
        isNeeded: false
    }
    ];
