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
var images = [	"Anugula_images/1.jpg", "Anugula_images/2.jpg", "Anugula_images/3.jpg", "Anugula_images/4.jpg", "Anugula_images/5.jpg", "Anugula_images/7.jpg",
"Anugula_images/8.jpg", "Anugula_images/9.jpg", "Anugula_images/10.jpg", "Anugula_images/11.jpg", "Anugula_images/12.jpg", "Anugula_images/13.jpg",
"Anugula_images/14.jpg", "Anugula_images/15.jpg", "Anugula_images/16.jpg", "Anugula_images/17.jpg", "Anugula_images/18.jpg", "Anugula_images/19.jpg",
"Anugula_images/20.jpg", "Anugula_images/21.jpg", "Anugula_images/22.jpg", "Anugula_images/23.jpg", "Anugula_images/24.jpg", "Anugula_images/25.jpg",
"Anugula_images/26.jpg", "Anugula_images/27.jpg", "Anugula_images/28.jpg", "Anugula_images/29.jpg", "Anugula_images/30.jpg"];


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

