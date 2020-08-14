import * as d3 from "d3";

const data = [20, 12, 16, 25, 20],
    width = 500,
    height = 300;

export default class D3Chart {
    constructor(element) {
        const svg = d3.select(element)
            .append("svg")
                .attr("width", width)
                .attr("height", height)

        const rects = svg.selectAll("rect")
            .data(data)

        rects.enter()
            .append("rect")
                .attr("x", (d, i) => i * 100)
                .attr("y", (d, i) => height - d)
                .attr("width", 50)
                .attr("height", d => d)
                .attr("fill", "gray")
            
        // console.log(d3.select(element))
    }
}