const cube = document.getElementById("cube");

let angle = 60;

document.addEventListener("keypress", (e) => {
    // console.log(cube_3d.style.transform)

    let position = cube.style.transform.split(" ");

    console.log(position)

    position_x = position[0];
    position_y = position[1];

    position_x = parseInt(position_x.slice(8, 11));
    position_y = parseInt(position_y.slice(8, 11));

    switch(e.key) {
        case "w":
            console.log("W");
            cube.style.transform = `rotateX(${Math.abs(position_x + angle)}deg) rotateY(${position_y}deg)`;
            cube.style.transitionDuration = "2s";
            console.log("x:" + position_x + " ; y:" + position_y)
            // console.log(cube_3d.style.transform[8]);
            break;
        case "a":
            console.log("A");
            cube.style.transform = `rotateX(${position_x}deg) rotateY(${Math.abs(position_y - angle)}deg)`;
            cube.style.transitionDuration = "2s";
            console.log("x:" + position_x + " ; y:" + position_y)
            break;
        case "s":
            console.log("S");
            cube.style.transform = `rotateX(${position_x - angle}deg) rotateY(${position_y}deg)`;
            cube.style.transitionDuration = "2s";
            console.log("x:" + position_x + " ; y:" + position_y)
            break;
        case "d":
            console.log("D");
            cube.style.transform = `rotateX(${position_x}deg) rotateY(${Math.abs(position_y + angle)}deg)`;
            cube.style.transitionDuration = "2s";
            console.log("x:" + position_x + " ; y:" + position_y)
            break;

        default:
            console.log("ANI JEDNO");
    } 

    // console.log(`Key "${e.key}"`)
})

// let cubeBoundingRect = cube.getBoundingClientRect();
// let cubeCenter= {
//     x: cubeBoundingRect.left + cubeBoundingRect.width / 2, 
//     y: cubeBoundingRect.top + cubeBoundingRect.height / 2
// };

// cube.addEventListener("mousedown", () => {
//     document.addEventListener("mousemove", (e) => {
//         let angleX = Math.atan2(e.pageX - cubeCenter.x, - (e.pageY - cubeCenter.y) ) * (180 / Math.PI);      
//         let angleY = Math.atan2(e.pageY - cubeCenter.y, - (e.pagex - cubeCenter.x) ) * (180 / Math.PI);      
//         cube.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;  
//     })
// })
