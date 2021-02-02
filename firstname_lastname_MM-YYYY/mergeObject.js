let object1 = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
let object2 = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];


function mergeObjects(objA, objB) {
    let totalObject = objA;
    for (i=0; i<objB.length; i++) {
        if (totalObject.indexOf(objB[i]) === -1) {
            totalObject.push(objB[i]);
        }
    }
    return totalObject;
}

// This value is used to let linkClicked know if the objects have been merged or not.  It is changed to "true" after the merge takes place, so the alert will be triggered.
let outputListCached = false;

function linkClicked() {
    let outputList=document.getElementById("outputList");
    if (outputListCached) {
        alert("This action has already been performed.");
    } else {
        let totalObject = mergeObjects(object1, object2);
        outputList.innerHTML=totalObject.map((person) => {
            return `<li> ${person} </li>`;
        }).join("");
        outputListCached = true;
    }
}
