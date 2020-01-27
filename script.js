let createButton = function(){
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Start";
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
    data1.innerText = "X";
    data2.innerText = "X";
    data3.innerText = "X";
    data4.innerText = "X";
    data5.innerText = "X";
    data6.innerText = "X";
    data7.innerText = "X";
    data8.innerText = "X";
    data9.innerText = "X";

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

    let image = document.createElement ("IMG");
    image.src = "image1.png";
    image.onclick

};

