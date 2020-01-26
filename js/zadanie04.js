//1

function getTagsOfElements(elements) {
    var tags = [];
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].tagName != null) tags.push(elements[i].tagName)
    }
    return tags;
}

console.table(getTagsOfElements(document.getElementsByClassName("sample_class")));

//2

function getClassesOfElement(element) {
    var className = element.className.split(' ');
    return className;
}

console.table(getClassesOfElement(document.getElementById("sample_id")));

//3

function getInnerTextsOfElements(elements) {
    var texts = elements[0].innerText.split('\n');
    return texts;
}
console.table(getInnerTextsOfElements(document.getElementsByClassName("sample_class_2")));

//4

function getAddressesOfElements(elements) {
    var links = []
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("href") != null)
            links.push(elements[i].getAttribute("href"));
    }
    return links;
}

console.table(getAddressesOfElements(document.getElementsByTagName("a")));

//5
var children = []
var sample_class3 = document.getElementsByClassName("sample_class_3");
for (const key in sample_class3) {
    for (const child in sample_class3[key].children) {
        children.push(sample_class3[key].children[child]);
    }
}

console.table(getTagsOfElements(children));