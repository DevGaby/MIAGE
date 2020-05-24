const rawTab = [
    {
        "id": 1,
        "label": "Algorithmes",
        "period":"01/01 - 01/03/2020",
        "nbHour": { 
            "valeur":35,
            "unity": "heures"
            },
        "teacher": "Nom Prénom",
        "detail": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"    },
    {
        "id":2,
        "label": "Conception",
        "period": "01/02 - 29/04/2020",
        "nbHour": { 
            "valeur":20,
            "unity": "heures"
            },
        "teacher": "Nom Prénom",
        "detail": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
        "id":3,
        "label": "Base de données",
        "period": "01/02 - 15/03/2020",
        "nbHour": { 
            "valeur":40,
            "unity": "heures"
            },
        "teacher": "Nom Prénom",
        "detail": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    }
]

const profs = [
    {
        "lastname": "DUPUIS",
        "firstname": "Marie"
    },
    {
        "lastname": "MARTINEZ",
        "firstname": "Luis"
    },
    {
        "lastname": "SPINTBERG",
        "firstname": "Alexander"
    }
]

var classes = rawTab.slice(0, rawTab.length);

//#region initialization page
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
                +"<td>" + newClass.nbHour.valeur +" "+ newClass.nbHour.unity+"</td>"
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
    showReInitButton();
}

function deleteClass(id){
    const idClass = classes.findIndex(c => c.id === id);

    if(idClass !== -1){
        classes.splice(idClass, 1);
        deleteAll();
        document.getElementById("reInitBtn").style.display = "none"; 
        displayClasses();
        showReInitButton();
        
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
    if(!title || !period || !teacher || !description || !Number.isInteger(+nbHour))
    {
        alert("Vous n'avez pas remplis tous les champs");
        return; 
    }

    const addClass = {
        "id": classes.length+1,
        "label": title,
        "period":period,
        "nbHour":{ 
            "valeur":nbHour,
            "unity": "heures"
            },
        "teacher": teacher,
        "detail": description
    };
    classes.push(addClass);
    clearInput(["titleInput","periodInput","nbHourInput", "teacherInput","descriptionInput"]);
    deleteAll();
    displayClasses();
}

function clearInput(list){
    for(let i= 0; i< list.length; i++){
         document.getElementById(list[i]).value = "";
    }
}

function showReInitButton(){
    document.getElementById("reInitBtn").style.display = "initial"; 
}

function reInitBtn(){
    document.getElementById("reInitBtn").style.display = "none"; 
    classes = rawTab.slice(0, rawTab.length);
    deleteAll();
    displayClasses();
    
} 