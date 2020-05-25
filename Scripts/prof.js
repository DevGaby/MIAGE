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
    let myRow = null;
    let myId = 0;
    profs.forEach((p, index)  => {
        if(index % 3 === 0) {
            myDiv.innerHTML += createRow(myId);
            myRow = document.getElementById("myRow_"+myId);
            myId++;
        }
        let profCard = createCard(p);
        myRow.innerHTML += profCard;
    });
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

function createRow(id){
    return "<div id=\"myRow_"+id+"\" class=\"row\"> </div>";
}

function setModaladdEventListener(){
    var modalBtn = document.getElementById("modalBtn"); //open modal
    var closeSpan = document.getElementsByClassName("closeSpan")[0]; //close modal
    if(modalBtn){
            modalBtn.addEventListener("click", openModal); //listen for open
        }
        
        if(closeModal){
            closeSpan.addEventListener("click", closeModal); //listen for close
        }   
}
//#endregion

// Modal
function openModal(){
    let modal = document.getElementById("simpleModal");
    modal.style.display="block";
}

function closeModal(){
    let modal = document.getElementById("simpleModal");
    modal.style.display="none"; // improvement
    //document.getElementById("simpleModal").style.display = "none";   // test 
}

function deleteAll(displayOnly = true){
    if(!displayOnly){
        profs = [];
    }
    const class_container = document.getElementById("container");
    class_container.innerHTML = ""; // add empty string in elemnt
    showReInitButton();
}

function showReInitButton(){
    document.getElementById("reInitBtn").style.display = "initial"; 
    document.getElementById("deleteBtn").style.display = "none"; 
}

function reInitList(){
   if(profs.length === 0){
       profs = rawProfs.slice(0, rawProfs.length);
   }
    displayTeachers();

    document.getElementById("deleteBtn").style.display = "initial"; 
    document.getElementById("reInitBtn").style.display = "none"; 
}

function deleteTeacher(id){
    const  idProf = profs.findIndex(i => i.id === id);
    if(idProf !== -1){
        profs.splice(idProf, 1); // delete item
        deleteAll(); // delete list
        document.getElementById("reInitBtn").style.display = "none"; // management btn
        document.getElementById("deleteBtn").style.display = "initial";
        displayTeachers(); // new list
        showReInitButton();
    } else {
        console.log('Not found');
    }
}

function addTeacher(){
    const nom = document.getElementById("lastname").value;
    const prenom = document.getElementById("firstname").value;
    const statut = document.getElementById("state").value;
    const description = document.getElementById("description").value;

    if(!nom || !prenom || !statut || !description)
    {
        alert("Vous n'avez pas remplis tous les champs");
        return; 
    }

    const newProf ={
        "id": profs.length +1,
        "lastname": nom,
        "firstname": prenom,
        "statut": statut,
        "description":description
    }
    profs.push(newProf);
    clearInput(["lastname","firstname", "state", "description"]);
    deleteAll();
    displayTeachers();
}

function clearInput(list){
    for(let i= 0; i< list.length; i++){
         document.getElementById(list[i]).value = "";
    }
    closeModal();
}

