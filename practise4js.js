fetch('./data.json').then(function(response) {          // 直接轉成JSON格式
    return response.json()
}).then(function(data) {                              //將JSON文件丟入function執行

  var aa=(data['data'])
  let tbody = document.querySelector('tbody')          //做出一個tbody

  function del(tr){
    let td = document.createElement('td')               //做出一個td
  td.innerHTML = `<a href='javascript:;'>刪除</a>`    //將超連結標籤放進td標籤內
  console.log(td)
  let a = td.children[0]                              //
  tr.appendChild(td);                               //將td標籤放入tr標籤內 ->a的td
  a.addEventListener('click', () => {                 //觸發的事件監聽器
    let parent = a.parentNode.parentNode              //將超連結標籤的父標籤的父標籤 tr
    parent.remove();                                  //刪除tr標籤     
  })

};

  for (let i = 0; i < aa.length; i++) {               
    var tr = document.createElement('tr')               //做出tr
    tbody.appendChild(tr)                               //將tr標籤放入tbody裡面
    for( var key in aa[i]) {
      let td = document.createElement('td')             //做出一個td
      td.innerHTML = aa[i][key]                         //將JSON文件的每一個值，各別放入td
      tr.appendChild(td)                                //將td標籤放入tr標籤內
    } 
    del(tr);
  }

  var btn = document.getElementById('btn');            //按鈕的ID
  var er = document.getElementById('err');            //錯誤訊息的ID
  btn.onclick = function () {                         //點擊按鈕觸發事件
    var s = document.getElementById('list');          //tbody的ID
    console.log(s);                                   //將目前tbody所有的資料顯示在consolo
    var number = document.getElementById("no").value;   //編號輸入框的ID中的值
    var na = document.getElementById("name").value;     //姓名輸入框的ID中的值
    var gd = document.getElementById('gender').selectedIndex;//性別選擇器的index
    var gender = document.getElementById('gender').value;    //性別選擇器的值
    var massage = "";
    var newdata = [];
    var re = new RegExp('[0-9]');           //new只能輸入0~9的數字的變數(用來辨識輸入編號是否為數字)
    var arr = [];
    var dd = "";
    console.log(s.rows.length,'s.rows.length')
    for (i = 0; i < s.rows.length; i++) {         //將tbody中所有的值用一個空的陣列儲存
      dd = s.rows[i].cells[0].innerText;
      arr.push(dd);                           
    }
    console.log(arr);
    if (!number)                            //判斷編號
      massage += '編號不可為空\n';
    if (!na)                                //判斷姓名
      massage += '姓名不可空白\n';
    if (gd == 0)                            //判斷性別
      massage += '請選擇性別\n';
    if (arr.includes(number))               //判斷編號是否重複
      massage = "編號重複";
    if (!re.test(number))                   //判斷編號是否是數字
      massage = "請輸入數字";
    if (!arr.includes(number) && na && gd != 0 && re.test(number)) {
      newdata.push(number);                 //以上條件都符合就新增資料到陣列中
      newdata.push(na);
      newdata.push(gender);
      arr.push(newdata);
      console.log(arr);
      let tr = document.createElement('tr')           //新增tr
      for (let i = 0; i < newdata.length; i++) {
        let td = document.createElement('td')         //新增td
        td.innerHTML = newdata[i]                     //將新增的內容依序放入td
        tr.appendChild(td)
      }
      let td = document.createElement('td')           //新增td
      td.innerHTML = `<a href='javascript:;'>刪除</a>`    //新增刪除的超連結
      let a = td.children[0]                            //將超連結放入td
      a.addEventListener('click', () => {               //刪除事件
        let parent = a.parentNode.parentNode
        console.log(parent);
        parent.remove()
      })
      tr.appendChild(td)
      console.log(tr);
      tbody.appendChild(tr)
    }
    er.textContent = massage;             //顯示錯誤訊息
    console.log(massage)
  }
    // `j`會是一個JavaScript物件
    console.log(data)
}).catch(function(err) {           //fecth失敗
  // Error :(
})


 