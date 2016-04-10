//Beats Kuku Kube, paste this script in console and it chooses the correct answer every 10 miliseconds
//http://106.186.25.143/kuku-kube/en-3/
window.setInterval(function(){
var boxes = document.getElementById('box').childNodes;
var box_array = [];
var color_array = [];
var unique;

//Loop through all of the boxes
for( i = 0; i < boxes.length; i++)
 {
 	//Assigns the current item's color to the current_box_color variable
 	var current_box_color = boxes[i].style.backgroundColor;

		// Checks the current items color against the first and second values in color_array. It must be unique to both
		if(color_array[0] !== current_box_color && color_array[1] !== current_box_color ){

			//If it doesn't match both of these add it to the color_array, the first time around it will fill this array
			color_array.push(current_box_color);

			//Store this box in the box_array
			box_array.push(boxes[i]);
	 }
}
	box_array[0].click();
  box_array[1].click();
}, 5);
