let element = React.createElement("a", 
{
    href:"http://www.bbc.co.uk",
    target:"_blank",
    title:"BBC News"
}, 
    "News");

ReactDOM.render(element, document.getElementById("parent"));