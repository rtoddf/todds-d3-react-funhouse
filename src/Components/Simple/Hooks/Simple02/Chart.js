import React, { useRef, useState, useEffect } from "react";
import * as d3 from "d3";

interface IProps {
    data?: number[];
}

const width = 500,
    height = 300

const colors = {
    gray: "gray",
    orange: "orange"
}

const dataUrl = "https://udemy-react-d3.firebaseio.com/ages.json";

const Chart = (props: IProps) => {
    /* The useRef Hook creates a variable that "holds on" to a value across rendering
    passes. In this case it will hold our component's SVG DOM element. It's
    initialized null and React will assign it later (see the return statement) */
    const d3Container = useRef(null);

    console.log("props.data: ", props.data)

    /* The useEffect Hook is for running side effects outside of React,
        for instance inserting elements into the DOM using D3 */
    useEffect(
        () => {
            if (props.data && d3Container.current) {
                const svg = d3.select(d3Container.current)

                const update = svg
                    .append("g")
                    .selectAll("rect")
                    .data(props.data)

                update.enter()
                    .append("rect")
                        .attr("x", (d, i) => i * 100)
                        .attr("y", (d, i) => height - (d.age * 10))
                        .attr("width", 50)
                        .attr("height", d => (d.age * 10))
                        .attr("fill", (d) => {
                            return d.age > 10 ? colors.gray : colors.orange
                        })
                        
                update
                    .attr("x", (d, i) => i * 100)
                    .attr("y", (d, i) => height - (d.age * 10))
                    .attr("width", 50)
                    .attr("height", d => (d.age * 10))
                    .attr("fill", (d) => {
                        return d.age > 10 ? colors.gray : colors.orange
                    })
                
            }
        },

        /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */
        [props.data, d3Container.current])

    return (
        <svg
            className="d3-component"
            width={width}
            height={height}
            ref={d3Container}
        />
    );
}

export default Chart;