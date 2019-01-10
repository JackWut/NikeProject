<script type="text/javascript"src="http://jquery-1.6.1.min.js"></script>
<script type="text/javascript" src="js/jquery-2.2.2.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> 
<script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script> 
<script type="text/javascript" src="http://www.jeasyui.com/easyui/jquery.easyui.min.js"></script>

var canvas = document.getElementById("canvas");
var my_context = canvas.getContext('2d'); 

localStorage.getItem('product');
localStorage.setItem('product,'cart');

if(localStorage&&localStorage.getItem('product'))
{
	var = localStorage.getItem('product');
}
var mainmenu = $(".mainmenu");
header = $('.header').height();

$(window).scroll(function() {
  if ($(this).scrollTop() > header) {
    mainmenu.addClass("sticky");
  } else {
    mainmenu.removeClass("sticky");
  }
});

$(function(){
	console.log('ready');
	$( ".products ).click(function(e) {
	 var dataid = this.data('id');
 	 alert( "Handler for .click() called." );
	 console.log('click');
	 $( ".products").show();
	 
});

$( ".closebtn" ).click(function(e) {
	var dataid = this.data('id');
 	alert( "Handler for .click() called." );
	console.log('click');
	$( ".products").hide();
	 
});
$( "a" ).click(function( event ) 
{ event.preventDefault(); 

});
$('.Pol').draggable;
revert:true, proxy:'clone';
onStartDrag:function(){  $(this).draggable('proxy').css('z-index',10);  
console.log($(this).find('title').text());  
} 
onDrop:function(e,source)

var data = {"total":0,"rows":[]}; 
var totalCost = 0; 

data.rows.push({name:name, price:price}); 

for (var i = 0; i < ???; i++) {  var row = data.rows[i]; 
data.rows[0]if (row.???== ???) {     row.??? += 1;   

var video = document.getElementById("myVideo");

var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
#div1 {
  width: 350px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}

$(".T").css("background-color, bg");


