console.log("running...");
const app = document.getElementById("app");
console.log(app);

// 난수생성
const randomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const addBokeh = () => {
    const bokeh = document.createElement('div')
    const size = randomGenerator(50, 120)
    bokeh.style.left = randomGenerator(0,100) + '%' // 0~100%
    bokeh.style.top = randomGenerator(0,100) + '%' // 0~100%
    bokeh.style.animationDelay = randomGenerator(1, 10) + 's'
    bokeh.style.animationDuration = randomGenerator(10 , 30) + 's'
    bokeh.style.width = size + 'px'
    bokeh.style.height = size + 'px'
    bokeh.style.backgroundColor = `hsl(${randomGenerator(0,360)}, ${randomGenerator(50,60)}%, 50%)`
    bokeh.style.filter = `blur(${randomGenerator(0,1)}px)`
    bokeh.classList.add('bokeh')
    app.append(bokeh)
}

for(let i = 0; i < 30; i++){
    addBokeh()
}

