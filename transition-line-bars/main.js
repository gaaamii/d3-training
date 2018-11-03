const app = () => {
  setInterval(() => {
    draw();
  }, 2000)
}

const randomInt = () => Math.floor(Math.random() * 100);

let dataset = [];

updateDataset = () => {
  dataset = [
    randomInt(),
    randomInt(),
    randomInt(),
    randomInt(),
    randomInt()
  ]
}

const draw = () => {
  updateDataset();
  d3.selectAll("rect").remove();
  d3.select('svg')
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", 200)
    .attr("y", (d, i) => (i + 1) * 100)
    .attr("height", 50)
    .transition()
    .attr("width", (d, i) => d * 5)
    .attr("fill", '#eee')
    .transition()
    .attr("fill", '#6fbadd')
}

window.onload = () => {
  app();
}
