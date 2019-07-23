class SalaryCalculations extends React.Component{
    render(){

        let tax = this.props.salary;

        if (tax < 1000){
            tax = 0;
        }

        else if (tax < 2000){
            tax = tax * 17 / 100;
        }

        else if (tax < 3000){
            tax = tax * 18 / 100;
        }

        else{
            tax = tax * 21 / 100;
        }
        
        let compName = React.createElement("h1",null,"Name: " + this.props.name);
        let compSalary = React.createElement("h2",null,"Salary: " + this.props.salary);
        let compTax = React.createElement("h3",null,"Tax: " + tax);
        let compNet = React.createElement("h3",null,"Net Salary: " + (this.props.salary - tax));

        let component = React.createElement("div",null,[compName,compSalary,compTax,compNet]);
        return component;
    }
}

let salaryInfo = React.createElement(SalaryCalculations,{name:"Gregory",salary:2450});
ReactDOM.render(salaryInfo,document.getElementById("parentOne"));