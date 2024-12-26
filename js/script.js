function addElements() {
    let formData = document.forms.form;
    let b = formData.elements.category;
    let a = formData.elements.name;
    let n = formData.elements.number;
    let c = "";
    console.log(b.value);
    if (b.value == "Дизайн") {
        c = "design";
    } else if (b.value == "HTML&CSS") {
        c = "html";
    } else {
        c = "js";
    }
    ul.insertAdjacentHTML(
        "afterbegin",
        `<li id="item" class="list__item">
        <label>
        <input type="checkbox">
        <svg width="24" height="24"><use href="#${c}"></use></svg>
        <p class="list__name">${a.value}</p>
        <p class="list__number">${n.value}</p>
        <button class="del btn" onclick="deleteItem()">Удалить</button>
        </label>
        </li>`
    );
    document.form.reset();
    }
    function deleteItem() {
    let node = document.getElementById("item");
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
