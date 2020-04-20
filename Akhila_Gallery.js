function Resize(clicked_id){
	if(document.getElementById(clicked_id.className).width == "600" && document.getElementById(clicked_id.className).height == "400"){
	  document.getElementById(clicked_id.className).width = "1000";
	  document.getElementById(clicked_id.className).height = "600";
	  clicked_id.value = "Large";
	}
	else if(document.getElementById(clicked_id.className).width == "1000" && document.getElementById(clicked_id.className).height == "600"){
	  document.getElementById(clicked_id.className).width = "1500";
	  document.getElementById(clicked_id.className).height = "800";
	  clicked_id.value = "Small";
	}
	else if(document.getElementById(clicked_id.className).width == "1500" && document.getElementById(clicked_id.className).height == "800"){
	  document.getElementById(clicked_id.className).width = "600";
	document.getElementById(clicked_id.className).height = "400";
	clicked_id.value = "Medium";
	}
	else{
	document.getElementById(clicked_id.className).width = "600";
	document.getElementById(clicked_id.className).height = "400";
	}
  }
var images = [	"Akhila-Images/music.jpeg","Akhila-Images/music1.jpg","Akhila-Images/music2.jpg","Akhila-Images/music3.jpg","Akhila-Images/music4.jpg",
"Akhila-Images/music5.jpg","Akhila-Images/reading.jpg","Akhila-Images/reading1.jpg","Akhila-Images/reading2.jpg","Akhila-Images/reading3.jpg"
,"Akhila-Images/reading4.jpg","Akhila-Images/reading5.jpg","Akhila-Images/sport.jpg","Akhila-Images/sport1.jpg","Akhila-Images/sport2.jpg"
,"Akhila-Images/sport3.jpg","Akhila-Images/sport4.jpg","Akhila-Images/sport5.jpg","Akhila-Images/sport6.jpg","Akhila-Images/sport7.jpg"
,"Akhila-Images/sport8.jpg","Akhila-Images/travelling.jpg","Akhila-Images/travelling1.jpg","Akhila-Images/travelling2.jpg","Akhila-Images/travelling3.jpg"
,"Akhila-Images/travelling4.jpg","Akhila-Images/travelling5.jpg","Akhila-Images/travelling6.jpg","Akhila-Images/travelling7.jpg"];


function load_images()
{
document.getElementById("imagesviajs").innerHTML = '';
for (var i = 0; i < images.length; i++) 
{
document.getElementById("imagesviajs").innerHTML += `                <div class="box">
<img id="${i+1}" src="${ images[i] }" width="600" height="400">
<div class="middle">
  <div class="buttonclick">
	<input class="${i+1}" onclick="Resize(this)" type="button" value="Medium">
	<button name="Up" value="Up" onclick="up(${i})">Before</button>
		<button name="Down" value="Down" onclick="down(${i})">After</button>
	<button name="top" onclick="topfunction(${i})">top</button>
	<button name="bottom" onclick="bottom(${i})">bottom</button>
  </div>
</div>
</div>`; 
}
}



function up(index) //3
{
let temp = images[index];

var back_index = index - 1;
if(back_index >=0){
images[index] = images[back_index]; 
images[back_index] = temp;
load_images();
}


}


function down(index)
{
let temp = images[index];

var back_index = index + 1;
if(back_index <= images.length-1){
images[index] = images[back_index]; 
images[back_index] = temp;
load_images();
}
}
function topfunction(index)
{
let temp = images[index];
var i=0,flag;
for(i=0;i<=index;i++){
flag = images[i];
images[i] = temp;
temp = flag;
}
load_images();



}

function bottom(index)
{
var i,flag;
for(i=index;i<images.length-1;i++){
flag = images[i];
images[i] = images[i+1];
images[i+1] = flag;
}
load_images();
}

