
var quick_draw_data_set = ["aircraft carrier", "airplane", "yoga", "zebra", "zigzag"];


var random_number = Math.floor(Math.random() * quick_draw_data_set.length);


console.log("Random Sketch Name:", quick_draw_data_set[random_number]);


var sketch = quick_draw_data_set[random_number];


document.getElementById("sketch_to_be_drawn").textContent = "Sketch To be Drawn: " + sketch;


var timer_counter = 0;
var timer_check = "";
var drawn_sketch = "";
var answer_holder = "";
var score = 0;


