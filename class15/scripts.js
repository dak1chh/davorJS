let btnCharacters = document.getElementById("btnCharacters");
let btnShips =documenter.getElementById("btnShips");

let buildTable = (param1, param2, param3, param4, param5, param6) =>
{ 
    return
    `
<table>
    <tr>
        <td>Name</td>
        <td>${param1}</td>
    </tr>
    <tr>
        <td>Height</td>
        <td>${param2}</td>
    </tr>
    <tr>
        <td>Mass</td>
        <td>${param3}</td>
    </tr>
    <tr>
        <td>Gender</td>
        <td>${param4}</td>
    </tr>
    <tr>
        <td>Birthyear</td>
        <td>${param5}</td>
    </tr>
    <tr>
        <td>Appearance</td>
        <td>${param6}</td>
    </tr>
</table> `
}
btnShips.addEventListener("click", () =>
{

});