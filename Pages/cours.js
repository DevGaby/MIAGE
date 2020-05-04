var classes = [
    {
        "id": 1,
        "label": "Algorithmes",
        "period":"01/01 - 01/03/2020",
        "nbHour": 35+" h",
        "teacher": "Nom Prénom",
        "detail": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"    },
    {
        "id":2,
        "label": "Conception",
        "period": "01/02 - 29/04/2020",
        "nbHour": 20+" h",
        "teacher": "Nom Prénom",
        "detail": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
        "id":3,
        "label": "Base de données",
        "period": "01/02 - 15/03/2020",
        "nbHour": 40+" h",
        "teacher": "Nom Prénom",
        "detail": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    }
]

//#region Iniatilize page
function getClasses() {
     const myTBody = document.getElementById("classTab").getElementsByTagName("tbody")[0];
     classes.forEach(c => {  
        const myRow = myTBody.insertRow(myTBody.rows.length);
        myRow.innerHTML = createRow(c);
     });
}

function createRow(newClass){
    return "<tr>"
                +"<th>" + newClass.id +"</th>"
                +"<td>" + newClass.label +"</td>"
                +"<td>" + newClass.period +"</td>"
                +"<td>" + newClass.nbHour +"</td>"
                +"<td>" + newClass.teacher +"</td>"
                +"<td>" + newClass.detail +"</td>"
                +"<td><button type=\"button\" class=\"btn btn-danger text-uppercase text-center\" onClick=\"deleteClass("+newClass.id+")\"> Supprimer </button></td>"
            +"</tr>";
}
//#endregion 

function deleteAll(displayOnly = true){
    if(!displayOnly){
        classes = [];
    }
    const class_tab = document.getElementById("classTab");
    const row = class_tab.getElementsByTagName("tr");
    const size = row.length;

    // i > 1 pour qu'il s'arrete a la 2iem lig et ne supprime pas le form
    for(let i=size-1; i>1; i--){
        class_tab.deleteRow(i);
    }
}

function deleteClass(id){
 const idClass = classes.findIndex(c => c.id === id);

 if(idClass !== -1){
    // .splce(a, b) => a= id de départ ; b= le nb d elmt a supprimer
    classes.splice(idClass, 1);
    // destruction du tab + nvelle créa avec chngmt
    deleteAll();
    getClasses();
 }else{
    alert("Not found");
 }
}
