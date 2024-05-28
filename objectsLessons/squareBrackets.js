let menu = {
    width: 200,
    height: 300,
    title: "my menu",
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        let val = obj[key];
        if (typeof val === 'number') {
            obj[key] = val * 2;
        }
    }
}

multiplyNumeric(menu);
alert(menu.width);
alert(menu.height);
alert(menu.title);