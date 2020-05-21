const rawProfs = [
    {
        "id": 1,
        "lastname": "Shellstrop",
        "firstname": "Eleanor",
        "statut": "INTERNE",
        "description": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
        "id": 2,
        "lastname": "Goodplace",
        "firstname": "Michael",
        "statut": "EXTERNE",
        "description": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
        "id": 3,
        "lastname": "Al Jamil",
        "firstname": "Tahani",
        "statut": "INTERNE",
        "description": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
        "id": 4,
        "lastname": "Anagonye",
        "firstname": "Chidi",
        "statut": "INTERNE",
        "description": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
        "id": 5,
        "lastname": "Mendoza",
        "firstname": "Jason ",
        "statut": "INTERNE",
        "description": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
        "id": 6,
        "lastname": "Goodplace",
        "firstname": "Janet",
        "statut": "EXTERNE",
        "description": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
        "id": 7,
        "lastname": "Hofstetler",
        "firstname": "Derek",
        "statut": "EXTERNE",
        "description": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
        "id": 8,
        "lastname": "Garnetlt",
        "firstname": "Simone",
        "statut": "INTERNE",
        "description": "Morem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    }
]
var profs = rawProfs.slice(0, rawProfs.length);

//#region initialization page
function displayTeachers(){
let myDiv = document.getElementById("container");
if(myDiv === null){
    let myCardBody = document.getElementById("card-body");
    let newContainer = creatContainer();
    myCardBody.innerHTML = newContainer
    myDiv = document.getElementById("container");
}
profs.forEach(p => {
    let profCard = createCard(p);
    myDiv.innerHTML += profCard;
});
}

function creatContainer(){
    return "<div id=\"container\" class=\"container-fluid d-inline-flex p-2\">" + "</div>";
}

function createCard(prof){
    return "<div class=\"card border-secondary m-3\">"
    +"<div class=\"card-header d-inline-flex\">"
        +"<div class=\"col-10 \">"
         + prof.statut 
        +"</div>"
        +"<div \">"
            +"<button type=\"button\" class=\"deleteBtn btn btn-danger btn-block\" onClick=\"deleteTeacher("+prof.id+")\">" +"-"
            +"</button>"
        +"</div>"
    +"</div>"
    +"<div class=\"card-body text-dark pt-2\">"
      +"<h5 class=\"card-title\">" + prof.firstname + " " + prof.lastname + "</h5>"
      +"<p class=\"card-text\">"+ prof.description +"</p>"
    +"</div>";
}
//#endregion

function deleteAll(displayOnly = true){
    if(!displayOnly){
        profs = [];
    }
    const class_container = document.getElementById("container");
    class_container.parentNode.removeChild(class_container);
    showReInitButton();
}

function showReInitButton(){
    document.getElementById("reInitBtn").style.display = "initial"; 
    document.getElementById("deleteBtn").style.display = "none"; 
}

function reInitList(){
    if(profs == 0){
        profs = rawProfs.slice(0, rawProfs.length);
        displayTeachers();
    }   
    document.getElementById("deleteBtn").style.display = "initial"; 
    document.getElementById("reInitBtn").style.display = "none"; 
}

function deleteTeacher(id){
    const  idProf = profs.findIndex(i => i.id === id);
    console.log(idProf);
    if(idProf !== -1){
        profs.splice(idProf, 1);
        deleteAll();
        document.getElementById("reInitBtn").style.display = "none"; 
        document.getElementById("deleteBtn").style.display = "initial";
        displayTeachers();
        if(idProf === 0){
            showReInitButton();
        }
    } else {
        console.log('Not found');
    }
}

function addTeacher(){
    console.log("In function add");
}

