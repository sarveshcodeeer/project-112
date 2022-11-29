Webcam.set({

    width: 250 , height : 250 , image_format  : "png" , png_quality : 90
    
    })
    
    camera = document.getElementById("camera") ; 
    Webcam.attach(camera) ; 

    function cg() {

        Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='pic1'src="+data_uri+">" ; 
        
        })
        
        }
        
        console.log('hi this is ml5' , ml5.version)
        
        classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/w6JCf4Lqu/model.json" , modelLoaded)
        
        function modelLoaded(){
            console.log("model has loaded commander") ; 
        }

        function Speak() {

            var synth = window.speechSynthesis ; 
            var sd = "prediction  is "+pd1 ; 
            var ut = new SpeechSynthesisUtterance(sd)
            synth.speak(ut)
            }
            
            function pe() {
            pic = document.getElementById("pic1") ; 
            classifier.classify( pic,gotResult) ; 
            
            
            function gotResult(error , results){
            
               if(error) {
            
            console.log("error")
            
               }
               else{
            
            console.log(results)
            document.getElementById("hname").innerHTML = results[0].label ; 
            
            pd1=results[0].label ; 
          
            Speak() ; 
            
            if(results[0].label=="nice"){
            
                document.getElementById("hemoj").innerHTML = "👍🏼" ;
            }
            
            if(results[0].label=="victory"){
            
                document.getElementById("hemoj").innerHTML = "✌🏼" ;
            }
            
            if(results[0].label=="amazing"){
            
                document.getElementById("hemoj").innerHTML = "👌🏼" ;
            
            }
        }
    }
}
