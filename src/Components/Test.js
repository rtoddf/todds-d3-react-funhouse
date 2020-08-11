import React from 'react';

const Test = (props) => {
    const { person } = props;
    return (
        <div onClick={props.personClicked}>hello {person}</div>
    )
}

export default Test;


// export default function Test() {
//     return (<div>hello world</div>)
// }