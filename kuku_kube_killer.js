//Beats Kuku Kube, paste this script in console and it chooses the correct answer every 10 miliseconds
//http://106.186.25.143/kuku-kube/en-3/
window.setInterval(function(){
var boxes = document.getElementById('box').childNodes;
var box_array = [];
var color_array = [];
var unique;

//Loop through all of the boxes
for( i = 0; i < boxes.length + 1; i++)
 {
 	//Assigns the current item's color to the current_box_color variable
 	var current_box_color = boxes[i].style.backgroundColor;

		// Checks the current items color against the first and second values in color_array.
		if(color_array[0] !== current_box_color  && color_array[1] !== current_box_color ){

			//If it doesn't match both of these add it to the color_array, the first time around it will fill this array
			color_array.push(current_box_color);

			//Store this box in the box_array
			box_array.push(boxes[i]);
	 }

 	//If a box has been pushed to the first position of the box array
	if(box_array[0]){

		//Check if box_array[0] matches the current boxes background color, if it does, then it isn't unique
		if(box_array[0].style.backgroundColor == boxes[i].style.backgroundColor){

			// If it doesn't then put it in box_array[1], we now have 2 colors stored which are different
			unique = box_array[1];
		}
	}

	 //If there is a value in box_array[1], the loop has looped at least 2x
	if(box_array[1]){

		// If box_array[1] background color matches the current iteration it isn't unique
		if(box_array[1].style.backgroundColor == boxes[i].style.backgroundColor){

			// Since box_array[1] is not unique, the value in box_array[0] must be
			unique = box_array[0] ;
		}
	}
}
	console.log(unique.style.backgroundColor);
	unique.style.backgroundColor == "#fff";
	unique.click();
}, 10);
