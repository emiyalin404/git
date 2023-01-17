var er1 = document.getElementById('err1');
var er2 = document.getElementById('err2');
var er3 = document.getElementById('err3');
var er4 = document.getElementById('err4');              //錯誤訊息
var btn1 = document.getElementById('btn');              //按鈕
var reslt = "";
var pass = "";
var reEmail = "";
var phone_no = "";
btn1.onclick = function () {                            //click事件
    var nme = document.getElementById('name').value;        
    var password = document.getElementById('pawd').value;
    var mail = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;           //輸入值
    var re = new RegExp('[0-9_]');                                //可以輸入0~9含_
    var pattern = new RegExp('[^a-zA-Z0-9_]');                    //可以輸入英文大小寫,0~9數字
//----------------------------用戶名------------------------------------------
    if (nme.length < 6 || nme.length > 18)                          //判斷字串長度是否在6~18之間
        reslt = '長度應為6~18個字符';
    else if (re.test(nme.substring(0, 1)))                          //判斷開頭是否為字母
        reslt = '需以字母開頭'
    else if (pattern.test(nme))                                     //特殊字元不可使用
        reslt = '不可使用特殊字元';
    else
        reslt = "";
    er1.textContent = reslt;
    console.log(nme.substring(0, 1));
//-------------------------------密碼-------------------------------
    var patd = new RegExp('[^a-z0-9~!@#$%^&*()_]');                 //可以輸入英文小寫,數字,特殊字元
    var pats = new RegExp('[^A-Z0-9~!@#$%^&*()_]');                 //可以輸入英文大寫,數字,特殊字元
    if (password.length < 6 || password.length > 18)                //判斷字串長度是否在6~18之間
        pass = '長度應為6~18個字符';
    if (patd.test(password))                                        //大小寫判斷
        pass = "大小寫需要有區別(0)" //-----------------------------表示都是小寫
    if (pats.test(password)) //------------------------------------表示都是大寫
        pass = "大小寫需要有區別(1)"
    if (patd.test(password) && pats.test(password))
        pass = "";
    er2.textContent = pass;
    console.log(pass);
    console.log(password);
//----------------------------------信箱------------------------------
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(mail))                          //判斷email的正規表達式
        reEmail = "Email格式錯誤";
    else
        reEmail = "";
    er3.textContent = reEmail;
    console.log(mail);
//--------------------------------手機號碼-------------------------------
    var reg = /^09[0-9]{8}$/;                   //手機的正規表達式
    if (!reg.test(phone))
        phone_no = "手機號碼格式錯誤"
    else
        phone_no = "";
    er4.textContent = phone_no;
    console.log(phone)
}