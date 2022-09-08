function $(selector) {
    let elementsFound = [];
    // If the selector starts with a period...
    if (selector[0] === ".") {
        const className = selector.slice(1);
        // Grab the element by its class...
        elementsFound = document.getElementsByClassName(className);
    }
    // If the selector starts with a hashtag...
    if (selector[0] === "#") {
        const idName = selector.slice(1);
        // Grab the element by its id...
        elementsFound = document.getElementsById(idName);
    }

    return elementsFound;
}

$("#pageTitle") // [h1#pageTitle]
$(".pageTitle") // [h1.pageTitle]
