const username = "dymas"
const password = "12345678"

function auth(){
    //Menangkap nilai yang diinput user
    let userInput = document.getElementById("username").value
    let passwordInput = document.getElementById("password").value

    let form = document.getElementById("form")

    if(username == userInput && password == passwordInput){
        alert("Login Berhasil")
        form.submit()
    } else {
        alert("Login Gagal")
    }
}