// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("text/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

// // usage:
// readTextFile("file:///D:/EDUTHON/DIE-Difference-In-Education/JSON/liveEvents.json", function(text){
//     var data = JSON.parse(text);
//     console.log(data);
// });
let liveEvents = {
    "test1": {
        "testname": "Codathon",
        "type": "hackathon",
        "end": "09-07-2020"
    },
    "test2": {
        "testname": "Recruit-a-thon",
        "type": "Contest",
        "end": "11-07-2020"
    },
    "test3": {
        "testname": "Assessment",
        "type": "Examination",
        "end": "07-07-2020"
    },
    "test4": {
        "testname": "Class-11",
        "type": "Examination",
        "end": "17-07-2020"
    }
}
let receive = JSON.stringify(liveEvents);
let t = JSON.parse(receive);
let row1 = document.querySelector('.row1'), str = "", count = 0;
for (key in t) {
    name = t[key].testname;
    let type = t[key].type;
    if (type[0] == 'C' || type[0] == 'c')
        src = 'https://wpshopmart.com/wp-content/uploads/2016/10/Code-It-Logical-HD-Wallpaper.jpg';
    else if (type[0] == 'E' || type == 'e')
        src = 'https://marketingland.com/wp-content/ml-loads/2014/06/test-quiz-shutterstock-e1420659305719-800x450.jpg';
    else if (type[0] == 'H' || type[0] == 'h')
        src = 'https://hackernoon.com/hn-images/1*AXF8IYKqC3Y7JxYRaUrCPQ.png';
    let end = t[key].end;
    str += `<div class="card my-3" style="width: 18rem;">
        <img src=${src} class="card-img-top" alt="..">
            <div class="card-body">
            <h6 class="card-subtitle text-muted mb-2" id="type">${type}</h6>
            <h5 class="card-title mb-3" id="name">${name}</h5>
            <h6 class="card-subtitle text-muted mb-2" id="type">ENDS IN</h6>
            <h4 class="card-title mb-2" id="name">${end}</h4>
                <a href="#" class="btn btn-outline-primary mt-1">Go somewhere</a>
                </div>
                </div>`;
    count++;
}
row1.innerHTML = str;
document.querySelector('#liveCount').innerHTML = count;


// UPCOMING

let data1 = {
    test1: {
        testname: "Assessment",
        type: "Examination",
        start: "07-07-2020",
    },
    test2: {
        testname: "Codathon",
        type: "hackathon",
        start: "09-07-2020",
    },
    test3: {
        testname: "Recruit-a-thon",
        type: "Contest",
        start: "11-07-2020",
    }
}
let receive1 = JSON.stringify(data1);
let t1 = JSON.parse(receive1);
let row2 = document.querySelector('.row2'), str1 = "", count1=0;
for (key in t1) {
    name = t1[key].testname;
    let type = t1[key].type;
    let start = t1[key].start;
    if (type[0] == 'C' || type[0] == 'c')
        src = 'https://wpshopmart.com/wp-content/uploads/2016/10/Code-It-Logical-HD-Wallpaper.jpg';
    else if (type[0] == 'E' || type == 'e')
        src = 'https://marketingland.com/wp-content/ml-loads/2014/06/test-quiz-shutterstock-e1420659305719-800x450.jpg';
    else if (type[0] == 'H' || type[0] == 'h')
        src = 'https://news.codecademy.com/content/images/2018/10/hackathon-cover-16-9-1.png#full';
    str1 += `<div class="card my-3" style="width: 18rem;">
            <img src=${src} class="card-img-top" alt="..">
            <div class="card-body">
            <h6 class="card-subtitle text-muted mb-2" id="type">${type}</h6>
            <h5 class="card-title mb-3" id="name">${name}</h5>
            <h6 class="card-subtitle text-muted mb-2" id="type">STARTS ON</h6>
            <h4 class="card-title mb-2" id="name">${start}</h4>
                <a href="#" class="btn btn-outline-primary mt-1">Go somewhere</a>
                </div>
                </div>`;
    count1++;
}
row2.innerHTML = str1;
document.querySelector('#upcomingCount').innerHTML = count1;