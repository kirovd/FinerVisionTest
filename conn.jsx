const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./info.db');

db.run("CREATE TABLE details(firstname TEXT NOT NULL, lastname TEXT NOT NULL,  email TEXT NOT NULL, number TEXT NOT NULL, gender TEXT NOT NULL, birth TEXT NOT NULL, comment TEXT NOT NULL");

function storeUserInput(ev)

    ev.preventDefault();

   let user_input = {

        firstname: document.getElementById("firstname").value,

        lastname: document.getElementById("lastname").value,

        email: document.getElementById("email").value,

        num: document.getElementById("num").value,

        gen: document.getElementById("gen").value,

        BirthDate: document.getElementById("BirthDate").value,

        comm: document.getElementById("comm").value,

    }

db.run("INSERT INTO details")
        
VALUES

        ($forename, $surname, $email, $num, $gen, $BirthDate, $comm)

        {

            $firstname = user_input.firstname, 

            $lastname =  user_input.lastname,

            $email = user_input.email,

            $num = user_input.num,
    
            $gen = user_input.gen,
    
            $BirthDate = user_input.BirthDate,
    
            $comm = user_input.comm

        }

document.addEventListener("info", ()=> {

    document.getElementById("submission").addEventListener("submit", storeUserInput);

})