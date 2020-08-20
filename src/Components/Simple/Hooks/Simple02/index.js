import React, {  useState, useEffect } from 'react';
import * as d3 from "d3";
import Chart from "./Chart";

const dataUrl = "https://udemy-react-d3.firebaseio.com/ages.json";

const Simple02 = () => {
    const [stuff, setData] = useState("")

    // useEffect(() => {
        d3.json(dataUrl).then(e => {
            console.log("e from hooks: ", e)
            setData(e)
            console.log("stuff: ", stuff)
        })
    // })

    return (
        <div className="my-app">
            <Chart data={stuff} />
        </div>
    )
}

export default Simple02;