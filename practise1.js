var a = document.getElementById('txt12');
    var btn = document.getElementById('btn1'); 

    btn.onclick = function () {                         //click事件
        var val1 = document.getElementById('txt1').value;           //text1的值
        var val2 = document.getElementById('txt2').value;           //text2的值
        var reslt = "";
        if (val1.length < val2.length) {                        //判斷長度哪一個比較短
            for (i = 0; i < val1.length; i++) {                 
                reslt += val1[i] + val2[i];                     //將2個text的值交錯,將較長的text值另外加進合併完的字串
            }
                 reslt +=val2.substring(val1.length, val2.length);
        }
        else {
            for (i = 0; i < val2.length; i++) {
                reslt += val1[i] + val2[i];
            }
                reslt +=val1.substring(val2.length, val1.length);
        }
        a.innerHTML = reslt;
    };