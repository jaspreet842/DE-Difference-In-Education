let content = document.querySelectorAll(".filter");
let search = document.getElementById('searchtxt');
search.addEventListener("input", function () {
    let inputvalue = search.value;
    for (let i = 0; i < content.length; i++) {
        let str = content[i].innerHTML;
        if (str.includes(inputvalue, 0))
            content[i].setAttribute("style", "display: flex");
        else
            content[i].setAttribute("style", "display: none");
    }
})

let inp = document.querySelectorAll(".btnfilter");
for (let i = 0; i < inp.length; i++) {
    inp[i].addEventListener("click", function () {
        let str = inp[i].innerHTML;
        console.log(str);
        for (let i = 0; i < content.length; i++) {
            if (content[i].innerHTML.includes(str, 0))
                content[i].setAttribute("style", "display: flex");
            else
                content[i].setAttribute("style", "display: none");
        }
    })
}

let rmvFilter = document.querySelector(".rmvFilter");
rmvFilter.addEventListener("click", () => {
    for(let i=0;i<content.length;i++){
        content[i].setAttribute("style", "display: flex");
    }
});