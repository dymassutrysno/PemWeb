function hewan (){
    let animal = document.getElementById("animal").value
    let foto = document.getElementById("foto")

    if (animal == "srigala"){
        alert ("Foto Serigala")
        foto.setAttribute("src", "fotohewan/srigala.jpg")
    }else if (animal == "ular"){
        alert ("Foto Ular")
        foto.setAttribute("src", "fotohewan/ular.jpg")
    }else if (animal == "hiu"){
        alert ("Foto Hiu")
        foto.setAttribute("src", "fotohewan/hiu.jpeg")
    }else if (animal == "komodo"){
        alert ("Foto Komodo")
        foto.setAttribute("src", "fotohewan/komodo.webp")
    }else if (animal == "kadal"){
        alert ("Foto Kadal")
        foto.setAttribute("src", "fotohewan/kadal.jpg")
    } else {
        alert("Tidak memilih gambar")
    }
}