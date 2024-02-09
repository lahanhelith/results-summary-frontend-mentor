const listDiv = document.getElementById("summary-list");


const renderSummary = async () => {
    try{
        const response = await fetch("./data.json");
        const data = await response.json();
        listDiv.innerHTML = data.map((el) => `<div class="list-flex-container">
        <span class="list-item-flex ${el.category.toLowerCase()}"><img src="${el.icon}"> ${el.category}</span>
        <span><span class="bold">${el.score}</span> <span class="light">/ 100</span></span>
        </div>`).join("");
    }catch{
        alert("Please reload the page");
    }
}

Window.onload = renderSummary();