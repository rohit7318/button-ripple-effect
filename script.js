const ripple = document.querySelectorAll(".ripple");


ripple.forEach((button) => {


    button.addEventListener("click" , function (e) {

        let x = e.clientX;
        let y = e.clientY;

        let leftBtn = e.target.offsetLeft;
        let topBtn = e.target.offsetTop;

        const xInside = x - leftBtn;
        const yInside = y - topBtn;


        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.left = xInside + 'px';
        circle.style.top = yInside + 'px';

        this.appendChild(circle);

        setInterval( () => circle.remove() , 500);

        

    })
})