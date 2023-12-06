var images = new Array();
    var i = 0;
     
    images[0] = "src/img/animationFotos/011.jpg";
    images[1] = "src/img/animationFotos/012.jpg";
    images[2] = "src/img/animationFotos/013.jpg";
    images[3] = "src/img/animationFotos/014.jpg";
    images[4] = "src/img/animationFotos/015.jpg";
    images[5] = "src/img/animationFotos/016.jpg";
    images[6] = "src/img/animationFotos/017.jpg";
    images[7] = "src/img/animationFotos/018.jpg";
    images[8] = "src/img/animationFotos/019.jpg";
    images[9] = "src/img/animationFotos/020.jpg";
    images[10] = "src/img/animationFotos/021.jpg";
     
    function viewImages() {
        document.getElementById("img_main").src = images[i]; 
        i++;
        if (i == images.length) {
            i = 0;
        }
        setTimeout("viewImages()",500);
    } 

    viewImages()