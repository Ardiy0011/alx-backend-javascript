#!/usr/bin/node

function createReportObject(employeesList) {
    return {
      allEmployees: {
        ...employeesList,
      },
      getNumberOfDepartments: ()=> {
        return Object.keys(this.allEmployees).length;
      },
    };
  }
