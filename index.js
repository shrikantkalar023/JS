const num = [1, 2, -1, 3];

const filtered = num.filter((val) => val >= 0);

const items = filtered.map((val) => "<li>" + val + "</li>");

const html = "<ul>" + items.join("") + "<ul>";
console.log(items);
console.log(html);
