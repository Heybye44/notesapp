var newNoteMenu; 
var newNoteDesc;
var newNoteTitle;
var noteArea;

var noteCount;
var current;

window.onload = function(){
    newNoteMenu = document.getElementById("new-menu");
    newNoteDesc = document.getElementById("new-note-desc");
    newNoteTitle = document.getElementById("new-note-name");
    noteArea = document.getElementById("note-area");
    
    refresh();
};

function save() {
    var n = "#" + newNoteTitle.value;
    var d = newNoteDesc.value;
    
    localStorage.setItem(n, d);
    
    refresh();
    
    return "Title: " + n + " Desc: " + d;
}

function remove(){
    
}

function refresh(){
    var i = 0;
    
    console.info("The LocalStorage Length is: " + localStorage.length);
    console.info("i is: " + i);
    console.log("i == localStorage.length is:" + i == localStorage.length);
    
    for(i = 0; i == localStorage.length; i++){
        console.info("i is: " + i);
        
        current = localStorage.key(i);
        if(current.substr(0, 1) == "#"){
            noteArea.innerHTML =+ createHtml(current.substr(1), localStorage.getItem(current)); //Adds the html to the page
            console.log(current.substr(1) + " - Note displayed."); //Logs the note title
        }else{
            console.log("No notes saved.");
        }
        
        console.info("i == localStorage.length is:" + i == localStorage.length);
    }
}

function createHtml(name, desc){
    var html = "<div class = 'note'> <h4 class = 'note-title'>" + name + "</h5> <p class = 'note-desc'>" + desc + "</p> </div> <br/>";
    
    console.log(html);
    return html;
}