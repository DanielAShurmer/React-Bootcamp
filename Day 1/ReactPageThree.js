let elementOne = React.createElement("a",
    {
        href: "http://www.bbc.co.uk",
        target: "_blank",
        title: "BBC News"
    },
    "BBC News");

let elementTwo = React.createElement("a",
    {
        href: "http://www.cnn.com",
        target: "_blank",
        title: "CNN News"
    },
    "CNN News");

let div1 = React.createElement("div",{style:{"background-color":"red"}},[elementOne,elementTwo]);
let div2 = React.createElement("div",{style:{"background-color":"green"}},[elementOne,elementTwo]);
let div3 = React.createElement("div",{style:{"background-color":"pink"}},[elementOne,elementTwo]);

ReactDOM.render(div1, document.getElementById("parentOne"));
ReactDOM.render(div2, document.getElementById("parentTwo"));
ReactDOM.render(div3, document.getElementById("parentThree"));