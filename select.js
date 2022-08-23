let count = 0;
function addToList(element) {
  count++;
  const playerName = element.parentNode.children[0].innerText;
  console.log(playerName);
  const mainContainer = document.getElementById("list");
  const tableContainer = document.createElement("tr");
  if (count > 5) {
    alert("select only five player");
    return;
  }
  tableContainer.innerHTML = `
    <th scope="row text-white">${count}</th>
    <td class="text-white">${playerName}</td>
  `;
  mainContainer.appendChild(tableContainer);
}
