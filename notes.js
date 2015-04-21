console.log("Notesjs Loaded!");

    
var client = new Dropbox.Client({key: "canag10jxag3efd"});

console.log("Notesjs Started!");

//TODO Take code out of n varible or find classes in js!
    

client.authenticate();

var dsMan = client.getDatastoreManager();
dsMan.OpenDefualtDatastore(function(error, datastore) {
    if(error){
        alert("Error loading your note: " + error);
    }
})
   
    //dsMan:client.getDatastoreManager(),

var connect = function() {
    client.authenticate({interactive: false}, 
        function(error){
            if(error){
                alert("Auth error: " + error);
            }
        }
     );
};
    
var table = dsMan.getTable("notes");
    
    
var add = function(tit, bod, blank) {
    if(blank == true || tit == ""){
        tit = prompt("What should the title of the new note be?");
        bod = prompt("What other infomation do you with the note");
    }
        
    table.insert({
        title: tit,
        body: bod,
        created: new Date()
    });
};
    
var refresh = function(){
    window.refresh();
};
    
var end = function(){
    var tit = prompt("What is the title of the note you want to remove?");
        
    var search = table.query({title: tit});
        
    if(search.length == 1){
        search[0].deleteRecored();
    }else{
        alert("Note not found.");
        return "Not found";
    }
};
    
connect();

