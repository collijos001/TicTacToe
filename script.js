let createButton = function(){
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Start";
    btn.onclick = createBoard;
    let content = document.getElementById("content");
    content.appendChild(btn);
};

let createBoard = function(){
    let board = document.createElement("BOARD");
    let row1 = document.createElement("ROW1");
    let row2 = document.createElement("ROW2");
    let row3 = document.createElement("ROW3");
    let row4 = document.createElement("ROW4");
    let colHeading1 = document.createElement("TH");
    let colHeading2 = document.createElement("TH");
    colHeading2.innerText = "L";
    let colHeading3 = document.createElement("TH");
    colHeading3.innerText = "L";
    let colHeading4 = document.createElement("TH");
    colHeading4.innerText = "L";
    let rowHeading2 = document.createElement("TH");
    rowHeading2.innerText = "L";
    let rowHeading3 = document.createElement("TH");
    rowHeading3.innerText = "L";
    let rowHeading4 = document.createElement("TH");
    rowHeading4.innerText = "L";
    let data1 = document.createElement("D1");
    let data2 = document.createElement("D2");
    let data3 = document.createElement("D3");
    let data4 = document.createElement("D4");
    let data5 = document.createElement("D5");
    let data6 = document.createElement("D6");
    let data7 = document.createElement("D7");
    let data8 = document.createElement("D8");
    let data9 = document.createElement("D9");
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

    board.appendChild(row1);
    board.appendChild(row2);
    board.appendChild(row3);
    board.appendChild(row4);


    let content = document.getElementById("content");
    content.appendChild(board);



};