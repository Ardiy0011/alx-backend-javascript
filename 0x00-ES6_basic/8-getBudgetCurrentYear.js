#!/usr/bin/node

function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {

    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita
    }

    return budget;
  }
