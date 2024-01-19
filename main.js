async function addExpense(event) {
    try {
    event.preventDefault();
    const expense = event.target.amount.value;
    const description = event.target.descrip.value;
    const selecting = event.target.category.value;
    const obj = {
        expense,
        description,
        selecting
    }
        const response = await axios.post("https://crudcrud.com/api/e2535e2213654404909a8ae54b4a239e/addProduct", obj)

        showUserOnScreen(response.data)
        console.log(response) 

    }
    catch (err) {
        console.log(err)
    }
}

window.addEventListener("DOMContentLoaded", () => {
    async function reload() {
        try {
            const response = await axios.get("https://crudcrud.com/api/e2535e2213654404909a8ae54b4a239e/addProduct")

            for (let i = 0; i < response.data.length; i++) {
                showUserOnScreen(response.data[i])
            }
        }
        catch (err) {
            console.log(err)
        }

    }
    reload()
})
let totalAmount = 0;
function showUserOnScreen(user) {
    let parentNode;
    if (user.selecting == "Electronics") {
        parentNode = document.getElementById('listOfUser1');
    }
    else if (user.selecting == "FoodItem") {
        parentNode = document.getElementById('listOfUser2');
    } 
    else if (user.selecting == "Shopping") {
        parentNode = document.getElementById('listOfUser3');
    }
    else if (user.selecting == "Travel") {
        parentNode = document.getElementById('listOfUser4');
    }
    else if (user.selecting == "Loan") {
        parentNode = document.getElementById('listOfUser5');
    }
    else if (user.selecting = "Other") {
        parentNode = document.getElementById('listOfUser6');
    }
    const childHTML = `<li id=${user._id}> ${user.expense} - ${user.description} - ${user.selecting}
        <button onclick = deleteUser('${user._id}')> Delete User </button>
        </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;

    totalAmount += parseFloat(user.expense);
    document.getElementById('totalAmount').textContent = `Total Amount: Rs${totalAmount.toFixed(2)}`;

}

async function deleteUser(userId) {
    try {
        const response = await axios.delete(`https://crudcrud.com/api/e2535e2213654404909a8ae54b4a239e/addproduct/${userId}`)
        console.log(response)
        removeUserFromScreen(userId)
    }
    catch (err) {
        console.log(err)
    }
}

function removeUserFromScreen(userId) {
    const childNodeToBeDeleted = document.getElementById(userId)
    if (childNodeToBeDeleted) {
        childNodeToBeDeleted.parentNode.removeChild(childNodeToBeDeleted)
    }
}