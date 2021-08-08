const readline =require("readline")


 const readline1=readline.createInterface({

    input:process.stdin,
    output:process.stdout
 })

readline1.question(" 1 - Show all books 2 - Add a new book 3 - Quit",function(num){
     

    if(num=="1"){
        console.log("To Kill a Mockingbird")
        console.log("The Great Gatsby")
        console.log("One Hundred Years of Solitude")
        console.log("A Passage to India")
        readline1.close();
    }
    else if(num=="2"){
        readline1.question("add the book",function(name){
            console.log(`${name} added sucessfully`)
            readline1.close();

        })
    }else if(num=="3"){
        readline1.question("Are you sure you want to quit - press Y to quit",function(inp){
           if(inp=="Y"){
               console.log("Bye Bye");
               readline1.close();
           }
        })
    }
           else{
               console.log("You have selected an invalid entry so please press 1, 2 or 3");
               readline1.close();
           }


 })

 readline1.on("close",function(){
   console.log("1 - Show all books 2 - Add a new book 3 - Quit");
 });