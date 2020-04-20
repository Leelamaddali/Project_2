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
var images = [	"Maddali_images/L1.jpg", "Maddali_images/L2.jpg", "Maddali_images/L3.jpeg", "Maddali_images/L4.jpg", "Maddali_images/L5.jpg", "Maddali_images/L7.jpg",
"Maddali_images/L8.jpg", "Maddali_images/L9.jpg", "Maddali_images/L10.jpg", "Maddali_images/L11.jpg", "Maddali_images/L12.jpg", "Maddali_images/L13.jpg",
"Maddali_images/L14.jpg", "Maddali_images/L15.jpeg", "Maddali_images/L16.jpg", "Maddali_images/L17.jpeg", "Maddali_images/L18.png", "Maddali_images/L19.jpg",
"Maddali_images/L20.jpg", "Maddali_images/L21.jpg", "Maddali_images/L22.jpg", "Maddali_images/L23.jpg", "Maddali_images/L24.jpg", "Maddali_images/L25.jpg",
"Maddali_images/L26.jpg", "Maddali_images/L27.jpg", "Maddali_images/L28.jpg", "Maddali_images/L29.jpg", "Maddali_images/L30.jpg"];


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

