import '../../../css/main.css';

const testMain=(str)=>{ 
    alert(str);
}
testMain('hello js');

import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
    <h1>hello, react!</h1>,
    document.getElementById("root")
);