//

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pEOUIM4JP/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error , results){
   if (error) {
       console.error(error);
   } else {
       console.log(results);
       color_r = Math.floor(Math.random() * 255) + 1;
        color_g = Math.floor(Math.random() * 255) + 1;
        color_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " +(results[0].confidence * 100).toFixed(2)+ "%";
        document.getElementById("result_label").style.color = "rgb("+ color_r +" , "+ color_g +"," + color_b +")";
        document.getElementById("result_confidence").style.color = "rgb("+ color_r +" , "+ color_g +"," + color_b +")";

        img = document.getElementById("images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80");
        img_1 = document.getElementById("https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg");
        img_2 = document.getElementById("https://media.istockphoto.com/photos/grey-rat-isolated-picture-id1146280548?b=1&k=20&m=1146280548&s=170667a&w=0&h=T7y2tCndloBwpga0w5s5Clhc0WYr4DkloRqgb_00mN4=");
        img_3 = document.getElementById("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/portrait-of-a-white-tiger-sergei-gladyshev.jpg");

        if ( results[0].label == "Cat") {
            img.src = "https://c.tenor.com/b6ymPWEJEAIAAAAd/cat-dance.gif";
            img_1.src = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/portrait-of-a-white-tiger-sergei-gladyshev.jpg";
            img_2.src = "https://media.istockphoto.com/photos/grey-rat-isolated-picture-id1146280548?b=1&k=20&m=1146280548&s=170667a&w=0&h=T7y2tCndloBwpga0w5s5Clhc0WYr4DkloRqgb_00mN4=";
            img_3.src = "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg";
        }
        else if ( results[0].label == "Tiger") {
            img.src = "images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80";
            img_1.src = "https://media2.giphy.com/media/l1BUojJe4cno1U0CgL/200.gif";
            img_2.src = "https://media.istockphoto.com/photos/grey-rat-isolated-picture-id1146280548?b=1&k=20&m=1146280548&s=170667a&w=0&h=T7y2tCndloBwpga0w5s5Clhc0WYr4DkloRqgb_00mN4=";
            img_3.src = "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg";
        }
        else if ( results[0].label == "Dog") {
            img.src = "images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80";
            img_1.src = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/portrait-of-a-white-tiger-sergei-gladyshev.jpg";
            img_2.src = "https://media.istockphoto.com/photos/grey-rat-isolated-picture-id1146280548?b=1&k=20&m=1146280548&s=170667a&w=0&h=T7y2tCndloBwpga0w5s5Clhc0WYr4DkloRqgb_00mN4=";
            img_3.src = "https://media0.giphy.com/media/l2uluGTvB7DAQvZyHp/giphy.gif";
        }
        else {
            img.src = "images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80";
            img_1.src = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/portrait-of-a-white-tiger-sergei-gladyshev.jpg";
            img_2.src = "https://media.istockphoto.com/photos/grey-rat-isolated-picture-id1146280548?b=1&k=20&m=1146280548&s=170667a&w=0&h=T7y2tCndloBwpga0w5s5Clhc0WYr4DkloRqgb_00mN4=";
            img_3.src = "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg";
        }
        
    }
}
