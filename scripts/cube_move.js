const cube = document.getElementById("cube");

let angle = 60;
let position;
let position_x;
let position_y;
let position_z;

document.addEventListener("keypress", (e) => {
    position = cube.style.transform.split(" ");

    // console.log(position);

    position_x = position[0];
    position_y = position[1];
    position_z = position[2];

    position_x = parseInt(position_x.slice(8));
    position_y = parseInt(position_y.slice(8));
    position_z = parseInt(position_z.slice(8));

    switch(e.key) {
        case "w":
            if (selected_color === "white" || selected_color === "red" || selected_color === "yellow" || selected_color === "orange" || selected_color === "none") {
                //
                cube.style.transform = `rotateX(${position_x + angle}deg) rotateY(${position_y}deg) rotateZ(0deg)`; // hotovo
                //
            } else if (selected_color === "green") {
                //
                cube.style.transform = `rotateX(${position_x + angle}deg) rotateY(0deg) rotateZ(${position_z}deg)`; // hotovo
                //
            } else if (selected_color === "blue") {
                //
                cube.style.transform = `rotateX(${position_x + angle}deg) rotateY(0deg) rotateZ(${position_z}deg)`; // hotovo
                //
            }

            cube.style.transitionDuration = "2s";
            break;
        case "a":
            if (selected_color === "white" || selected_color === "red" || selected_color === "yellow" || selected_color === "orange" || selected_color === "none") {
                //
                cube.style.transform = `rotateX(${position_x}deg) rotateY(${position_y - angle}deg) rotateZ(0deg)`; // hotovo
                //
            } else if (selected_color === "green") {
                //
                cube.style.transform = `rotateX(${position_x}deg) rotateY(0deg) rotateZ(${position_z + angle}deg)`; // hotovo
                //
            } else if (selected_color === "blue") {
                //
                cube.style.transform = `rotateX(${position_x}deg) rotateY(0deg) rotateZ(${position_z - angle}deg)`; // hotovo
                //
            }

            cube.style.transitionDuration = "2s";
            break;
        case "s":
            if (selected_color === "white" || selected_color === "red" || selected_color === "yellow" || selected_color === "orange" || selected_color === "none") {
                //
                cube.style.transform = `rotateX(${position_x - angle}deg) rotateY(${position_y}deg) rotateZ(0deg)`; // hotovo
                //
            } else if (selected_color === "green") {
                //
                cube.style.transform = `rotateX(${position_x - angle}deg) rotateY(0deg) rotateZ(${position_z}deg)`; // hotovo
                //
            } else if (selected_color === "blue") {
                //
                cube.style.transform = `rotateX(${position_x - angle}deg) rotateY(0deg) rotateZ(${position_z}deg)`; // hotovo
                //
            }

            cube.style.transitionDuration = "2s";
            break;
        case "d":
            if (selected_color === "white" || selected_color === "red" || selected_color === "yellow" || selected_color === "orange" || selected_color === "none") {
                //
                cube.style.transform = `rotateX(${position_x}deg) rotateY(${position_y + angle}deg) rotateZ(0deg)`; // hotovo
                //
            } else if (selected_color === "green") {
                //
                cube.style.transform = `rotateX(${position_x}deg) rotateY(0deg) rotateZ(${position_z - angle}deg)`; // hotovo
                //
            } else if (selected_color === "blue") {
                //
                cube.style.transform = `rotateX(${position_x}deg) rotateY(0deg) rotateZ(${position_z + angle}deg)`; // hotovo
                //
            }

            cube.style.transitionDuration = "2s";
            break;
    } 
    // console.log(`Key: "${e.key}"`);
})
