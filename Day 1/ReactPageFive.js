class customComponent extends React.Component{
    render(){
        let part1 = React.createElement("h1",null,"Nationwide");
        let part2 = React.createElement("pre",null,"Nationwide Is In Manchester");
        let component = React.createElement("div",null,[part1,part2]);
        return component;
    }
}

let thisComponent = React.createElement(customComponent,null);
ReactDOM.render(thisComponent,document.getElementById("parentOne"));