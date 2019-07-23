class TimesTable extends React.Component{
    render(){
        let components = [];
        for(let i=1;i<=this.props.range;i++){
            components.push(
                React.createElement("h3",null,this.props.timestable + "x" + i + "=" + 
                (this.props.timestable * i)));
            
        }
        let result = React.createElement("h1",null,components);
        return result;
    }
}

let timestable = React.createElement(TimesTable,{timestable:7,range:25});
let tt = React.createElement("div",null,timestable);
ReactDOM.render(tt,document.getElementById("parentOne"));