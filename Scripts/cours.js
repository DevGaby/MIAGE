const rawTab = [
    {
        "id": 1,
        "label": "Algorithmes",
        "period":"01/01 - 01/03/2020",
        "nbHour": 35,
        "teacher": "Nom Prénom",
        "detail": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"    },
    {
        "id":2,
        "label": "Conception",
        "period": "01/02 - 29/04/2020",
        "nbHour": 20,
        "teacher": "Nom Prénom",
        "detail": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
        "id":3,
        "label": "Base de données",
        "period": "01/02 - 15/03/2020",
        "nbHour": 40,
        "teacher": "Nom Prénom",
        "detail": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    }
]

var classes  = rawTab;

//#region Iniatilize page
function displayClasses() {
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
                +"<td>" + newClass.nbHour +" h"+"</td>"
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

    for(let i=size-1; i>1; i--){
        class_tab.deleteRow(i);
    } 
    showButton();
}

function deleteClass(id){
    console.log(id);
    if(classes == 0)
        classes = rawTab;
 const idClass = classes.findIndex(c => c.id === id);

 if(idClass !== -1){
    classes.splice(idClass, 1);
    deleteAll();
    displayClasses();
 }else{
    alert("Not found");
 }
}

function createClass(){
    const title = document.getElementById("titleInput").value;
    const period = document.getElementById("periodInput").value;
    const nbHour = document.getElementById("nbHourInput").value;
    const teacher = document.getElementById("teacherInput").value;
    const description = document.getElementById("descriptionInput").value;

    // Ctrl input
    // Number.isInteger(+nbHour) => le + permet de retirer les ""
    if(!title || !period || !teacher || !description || !nbHour)
    {
        alert("Vous n'avez pas remplis tous les champs");
        return; 
    }
    const hourOnly = nbHour.substring(0, nbHour.length -1);
    const addClass = {
        "id": classes.length+1,
        "label": title,
        "period":period,
        "nbHour": hourOnly,
        "teacher": teacher,
        "detail": description
    };
    classes.push(addClass);
    clearInput(["titleInput","periodInput","nbHourInput", "teacherInput","descriptionInput"]);
    deleteAll();
    displayClasses();
}

function clearInput(list){
    for(let i= 0; i< list.length-1; i++){
         document.getElementById(list[i]).value = "";
    }
}

function showButton(){
    document.getElementById("initializeBtn").style.display = "initial"; 
}

function initialize(){
    document.getElementById("initializeBtn").style.display = "none"; 

    if(classes == 0){
        // Qd je vide le tableau elmt par elemt je rentre ici
        // Je comprends pas pourquoi rawTab est vide si c'est une constante
        classes = rawTab;
        displayClasses();
    }   
} 