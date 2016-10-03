import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';
import {Employees} from '../../imports/collections/employees';
import EmployeeDetail from './EmployeeDetail';


const PER_PAGE = 10;

class EmployeeList extends Component
{

    componentWillMount()
    {
        this.page=1;
    }

    handleButtonClick()
    {
           Meteor.subscribe('employees',PER_PAGE * this.page  + 1);
           this.page +=1; 
    }

    render(){
        //props.employees => an array of employees
        return (
            <div>
                <div className="emlpoyee-list">
                    {this.props.employees.map(employee=><EmployeeDetail key={employee._id} employee={employee}/>)}
                </div>
                <button onClick={ () => this.handleButtonClick().bind(this)} 
                    className="btn btn-primary">Load more
                </button>
            </div>

        );
 }
};

export default createContainer (() =>
{

    //setup subscription
    Meteor.subscribe('employees', PER_PAGE);


    //return an object to the Employeelist as props
    return {employees:Employees.find({}).fetch({})};

}, EmployeeList);

