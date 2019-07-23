class customComponent extends React.Component{
    render(){
        let component = React.createElement("h1",null,"Hello World!");
        return component;
    }
}

let thisComponent = React.createElement(customComponent,null);
ReactDOM.render(thisComponent,document.getElementById("parentOne"));