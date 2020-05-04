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

    for(let i=size-1; i>1; i--){
        class_tab.deleteRow(i);
    }
}

function deleteClass(id){
 const idClass = classes.findIndex(c => c.id === id);

 if(idClass !== -1){
    classes.splice(idClass, 1);
    deleteAll();
    getClasses();
 }else{
    alert("Not found");
 }
}

function postClass(){
    const title = document.getElementById("titleInput").value;
    const period = document.getElementById("periodInput").value;
    const nbHour = document.getElementById("nbHourInput").value;
    const teacher = document.getElementById("teacherInput").value;
    const description = document.getElementById("descriptionInput").value;

    if(!title || !period || !teacher || !description || !Number.isInteger(+nbHour)){
        alert("Vous n'avez pas remplis tous les champs");
        return;
    }
    const addClass = {
        "id": classes.length+1,
        "label": title,
        "period":period,
        "nbHour": nbHour,
        "teacher": teacher,
        "detail": description
    };
    classes.push(addClass);
    document.getElementById("titleInput").value = "";
    document.getElementById("periodInput").value = "";
    document.getElementById("nbHourInput").value = "";
    document.getElementById("teacherInput").value = "";
    document.getElementById("descriptionInput").value = "";
    deleteAll();
    getClasses();

}