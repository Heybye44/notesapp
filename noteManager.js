var newNoteMenu; 
var newNoteDesc;
var newNoteTitle;
var noteArea;

var current;
var currentHTML;

window.onload = function(){
    newNoteMenu = document.getElementById("new-menu");
    newNoteDesc = document.getElementById("new-note-desc");
    newNoteTitle = document.getElementById("new-note-name");
    noteArea = document.getElementById("note-area");
    
    //clean up
    if(localStorage.getItem("#") == null){
        localStorage.removeItem("#");
    }
    
    refresh();
}

function save() {
    var n = "#" + newNoteTitle.value;
    var d = newNoteDesc.value;
    
    localStorage.setItem(n, d);
    
    refresh();
    
    return "Title: " + n + " Desc: " + d;
}

function remove(note){
    if(confirm("Are you sure you want to delete the note called" + note + "?") == true){
        localStorage.removeItem(note);
    }else{
        console.log("Note not deleted: " + note.substr(1));
    }
   
    refresh();
}

function refresh(){
    noteArea.innerHTML = "";
    console.info("Cleared Notes Area.");
    
    console.info("The LocalStorage Length is: " + localStorage.length);
    console.info("i is: " + i);
    console.log("i == localStorage.length is:" + i == localStorage.length);
    
    for(var i = 0; i < localStorage.length; i++){
        console.info("i is: " + i);
        
        current = localStorage.key(i);
        if(current.substr(0, 1) == "#"){
            currentHTML = createHtml(current.substr(1), localStorage.getItem(current)); //Makes the HTML
            
            noteArea.appendChild(currentHTML); //Adds the html to the page
            console.log(current.substr(1) + " - Note displayed."); //Logs the note title
        }else{
            console.log("No notes saved.");
        }
        
        console.info("i == localStorage.length is:" + i == localStorage.length);
    }
}

function createHtml(name, desc){
    var htmltext = "<div class = 'note'> <h4 class = 'note-title'>" + name + "<div><span onclick = 'edit()' class = 'glyphicon glyphicon-pencil btn'></span> <span onclick = 'remove('#" + name + "')' class = 'glyphicon glyphicon-remove btn'></span></div> </h4> <p class = 'note-desc'>" + desc + "</p> </div> <br/>";
    var html = document.createElement("div");
    html.innerHTML = htmltext;
    
    console.log("The new html is: " + htmltext);
    return html;
}

//TODO Make delete do something
//TODO Add Clear Button to New Note Me