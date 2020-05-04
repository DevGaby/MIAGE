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
                +"<td><button type=\"button\" class=\"btn btn-danger text-uppercase text-center\"> Supprimer </button></td>"
            +"</tr>";
}





