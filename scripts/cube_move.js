const cube = document.getElementById("cube");

document.addEventListener("keypress", (e) => {
    // console.log(cube_3d.style.transform)

    let position = cube.style.transform;
    position = position.split(" ");

    console.log(position)

    position_x = position[0];
    position_y = position[1];

    position_x = parseInt(position_x.slice(8, 11));
    position_y = parseInt(position_y.slice(8, 11));

    switch(e.key) {
        case "w":
            console.log("W");
            cube.style.transform = `rotateX(${position_x + 30}deg) rotateY(${position_y}deg)`;
            cube.style.transitionDuration = "2s";
            // console.log(cube_3d.style.transform[8]);
            break;
        case "a":
            console.log("A");
            cube.style.transform = `rotateX(${position_x}deg) rotateY(${position_y + 30}deg)`;
            cube.style.transitionDuration = "2s";
            break;
        case "s":
            console.log("S");
            cube.style.transform = `rotateX(${position_x - 30}deg) rotateY(${position_y}deg)`;
            cube.style.transitionDuration = "2s";
            break;
        case "d":
            console.log("D");
            cube.style.transform = `rotateX(${position_x}deg) rotateY(${position_y - 30}deg)`;
            cube.style.transitionDuration = "2s";
            break;

        default:
            console.log("ANI JEDNO");
    } 

    // console.log(`Key "${e.key}"`)
})
