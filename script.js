let createButton = function(){
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Start";
    btn.onclick = createTable();
    let content = document.getElementById("content");
    content.appendChild(btn);
};

let createTable = function(){
    let table = document.createElement("BOARD");
    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");
    let row4 = document.createElement("TR");
    let colHeading1 = document.createElement("TH");
    let colHeading2 = document.createElement("TH");
    colHeading2.innerText = "";
    let colHeading3 = document.createElement("TH");
    colHeading3.innerText = "";
    let colHeading4 = document.createElement("TH");
    colHeading4.innerText = "";
    let rowHeading2 = document.createElement("TH");
    rowHeading2.innerText = "";
    let rowHeading3 = document.createElement("TH");
    rowHeading3.innerText = "";
    let rowHeading4 = document.createElement("TH");
    rowHeading4.innerText = "";
    let data1 = document.createElement("TD");
    let data2 = document.createElement("TD");
    let data3 = document.createElement("TD");
    let data4 = document.createElement("TD");
    let data5 = document.createElement("TD");
    let data6 = document.createElement("TD");
    let data7 = document.createElement("TD");
    let data8 = document.createElement("TD");
    let data9 = document.createElement("TD");
    data1.innerText = "XO";
    data2.innerText = "XO";
    data3.innerText = "XO";
    data4.innerText = "XO";
    data5.innerText = "XO";
    data6.innerText = "XO";
    data7.innerText = "XO";
    data8.innerText = "XO";
    data9.innerText = "XO";

    row1.appendChild(colHeading1);
    row1.appendChild(colHeading2);
    row1.appendChild(colHeading3);
    row1.appendChild(colHeading4);

    row2.appendChild(rowHeading2);
    row2.appendChild(data1);
    row2.appendChild(data2);
    row2.appendChild(data3);

    row3.appendChild(rowHeading3);
    row3.appendChild(data4);
    row3.appendChild(data5);
    row3.appendChild(data6);

    row4.appendChild(rowHeading4);
    row4.appendChild(data7);
    row4.appendChild(data8);
    row4.appendChild(data9);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);
    table.appendChild(row4);


    let content = document.getElementById("content");
    content.appendChild(table);



};

let image = document.createElement("IMG");
