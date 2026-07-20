// Dark Mode

const themeToggle = document.getElementById("themeToggle");


if(themeToggle){

    themeToggle.addEventListener("click", function(){

        document.body.classList.toggle("dark-mode");


        if(document.body.classList.contains("dark-mode")){

            themeToggle.innerHTML = "☀️ Light Mode";

        }

        else{

            themeToggle.innerHTML = "🌙 Dark Mode";

        }

    });

}



// Delete Account

const deleteAccount = document.getElementById("deleteAccount");


if(deleteAccount){

    deleteAccount.addEventListener("click", function(){


        let confirmDelete = confirm(
            "Are you sure you want to delete your account?"
        );


        if(confirmDelete){


            localStorage.clear();


            alert(
                "Account deleted successfully!"
            );


            window.location.href="dashboard.html";


        }


    });

}