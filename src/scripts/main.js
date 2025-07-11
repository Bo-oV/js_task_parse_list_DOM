'use strict';

// write code here
const list = document.querySelector('ul');

function sortList(sort) {
  const mas = Array.from(sort.querySelectorAll('li'));

  mas.sort((a, b) => {
    return Number(b.dataset.salary) - Number(a.dataset.salary);
  });

  sort.innerHTML = '';

  mas.forEach((m) => {
    list.appendChild(m);
  });
}

function getEmployees(emp) {
  const items = emp.querySelectorAll('li');

  return Array.from(items).map((item) => ({
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: Number(item.dataset.age),
  }));
}

sortList(list);

getEmployees(list);
