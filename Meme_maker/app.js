const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // canvas에서 사용할 brush
canvas.width = 800;
canvas.height = 800;

//ctx.fillRect(50, 50, 100, 200);
/* fillRect 함수는 fill + Rect 함수의 단축함수
    Rect 함수는 ctx에 선을 미리 그려넣어 놓고
    fill을 통해 색칠을 할 수 있다. (색칠을 해야 display 된다.)
*/

/* 
ctx.rect(50,50,100,100);
ctx.rect(150,150,100,100);
ctx.rect(250,250,100,100);
ctx.fill();

ctx.beginPath() // Path를 새로 시작해야 다른 그림을 그릴 수 있다, canvas는 path단위로 생각
ctx.rect(350,350,100,100);
ctx.rect(450,450,100,100);
ctx.fillStyle = "purple";
ctx.fill();
*/

/* rect역시 shortcut function이었다. 그렇다면 직선은 어떻게 그릴 수 있을까?
바로 lineTo함수와 moveTo함수를 이용해서 그릴 수 있다.
function moveTo(x,y) : ctx(Brush)의 위치를 x,y좌표로 옮긴다.
function lineTo(x,y) : 현재 ctx의 위치에서 (x,y) 좌표까지 직선을 그린다.
rect함수는 stroke()나 fill()로 display시켜야 했지만 lineTo는 그냥 display된다.
*/

ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.fill();

ctx.beginPath();
ctx.rect(150,150,100,100);
ctx.stroke();