const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // canvas에서 사용할 brush
canvas.width = 800;
canvas.height = 800;

//ctx.fillRect(50, 50, 100, 200);
/* fillRect 함수는 fill + Rect 함수의 단축함수
    Rect 함수는 ctx에 선을 미리 그려넣어 놓고
    fill을 통해 색칠을 할 수 있다. (색칠을 해야 display 된다.)
*/

ctx.rect(50,50,100,100);
ctx.rect(150,150,100,100);
ctx.rect(250,250,100,100);
ctx.fill();

ctx.beginPath() // Path를 새로 시작해야 다른 그림을 그릴 수 있다, canvas는 path단위로 생각
ctx.rect(350,350,100,100);
ctx.rect(450,450,100,100);
ctx.fillStyle = "purple";
ctx.fill();
