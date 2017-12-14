/*
function setup() { 
	createCanvas(640, 360);
    background("#CD2C00");
    fill("white");
    
//    var space = 50;
//    for (var x = 50; x < width; x += space) {
//        ellipse(x, height/2, 40);
//    }

    var columnSize = width/4;
    var rowSize = height/4;
    for (var x = 0; x <= width; x += columnSize) {
        rect(x,y,50,50)
        line(x, 0, x, height);
        ellipse(x, y, 50);
        for (var y = 0; y <= height; y += rowSize) {
            line(0, y, width, y);
            fill(x, y, y-x)
            //ellipse(x, y, x/10)
            rect(x, y, y/10, y/10)
        }
    }
}
*/


function setup() { 
    createCanvas(640, 360);
    background("#CD2C00");
    rectMode(CENTER);

    var column = width/3;
    var row = height/3;
    for (var x = 0; x <= width; x += column) {
        

        for (var y = 0; y <= height; y += row) {
            ellipse(x, y-25, 60)

            fill("white");
            rect(x, y, 60, 70);
            
            fill("gray");
            rect(x, y, 5, 70);
            
            fill("gray");
            rect(x, y, 60, 5);

            fill("#FFBA68");
            rect(x, y+40, 65, 10);
     
        }
    }
}
