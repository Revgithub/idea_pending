import {Component,OnInit} from "@angular/core";


@Component({
    selector: "hellow-app",
    template: require("./app.component.html"),
    styles: [ require("./app.component.scss")]
})
export class HelloComponent implements OnInit  {


    ngOnInit()
    {
        
        $(document).ready(function(){
              $('.clickonb').click(function() {
               
                $('#contactForm').fadeIn();
                $('.head').addClass("blur-filter ");
              });

              $('.test').click(function() {
               
                $('#contactForm').fadeOut();
                $('.head').removeClass("blur-filter ");
              });
              $('.submit').click(function() {
                var name = $("#name").val();
            var email = $("#email").val();
            
           

var final="<div style='width: 25%;display: inline-block;position:relative;margin-top:25px;'><aside  style=' width: 300px;border-radius: 2px;overflow: hidden;box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);position: relative;margin: auto;background: rgba(255, 255, 255, 1);'><header style='display: block;position: relative;background: white;text-align: center;padding: 30px 0 20px;z-index: 1;overflow: hidden;'> <a href='http://ali.shahab.pk'><img  style= 'border-radius: 100%;overflow: hidden;width: 150px;box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1); border: 1px solid gainsboro; padding: 10px;' src='http://gravatar.com/avatar/eb2d48c7f2cf027bb4cb20483e27c9c9?size=200px'></a><h4>"+ name +"</h4><h5 style='top: 10px; position: relative; color: gray;'>Another Web Designer</h5><h6 style='top: 19px; position: relative; color:blue;'>" + email +"</h6></header></aside></div>";
$(".head").append(final);
              });

          
          });
    }

}