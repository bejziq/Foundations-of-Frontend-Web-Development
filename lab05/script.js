const users = [
  { id: 1, name: 'Dzanan Musa', country: 'Spain', email: 'musa@example.com' },
  { id: 2, name: 'Amel Tuka', country: 'Bosnia', email: 'tuka@example.com' },
  { id: 3, name: 'Jusuf Nurkic', country: 'USA', email: 'nurk@example.com' },
  { id: 4, name: 'Lana Pudar', country: 'Bosnia', email: 'lana@example.com' },
  { id: 5, name: 'Edin Dzeko', country: 'Turkey', email: 'dzko@example.com' },
  { id: 6, name: 'Emir Spahic', country: 'Slovenia', email: 'spahak@example.com' },
];

const table = document.getElementById('userTable');
const userRows = document.getElementById('userRows');
let ascending = true;

function populateTable() {
  userRows.innerHTML = '';
  users.forEach(user => {
      const row = `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.country}</td><td>${user.email}</td><td><button onclick="showModal('${user.name}')">Click</button></td></tr>`;
      userRows.innerHTML += row;
  });
}

function sortTable(column) {
  users.sort((a, b) => {
      const aValue = a[Object.keys(a)[column]];
      const bValue = b[Object.keys(b)[column]];
      return ascending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });
  ascending = !ascending;
  populateTable();
}

function showModal(userName) {
  const modal = document.getElementById('myModal');
  const clickedUserName = document.getElementById('clickedUserName');
  clickedUserName.textContent = userName;
  modal.style.display = 'block';
}

populateTable();