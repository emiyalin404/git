let new_year = new Date("2023-01-22 00:00:00");             //設春節時間

function time() {
    let dt = new Date();
    let day = dt.getDate();                                 //現在時間
    var d = document.getElementById('dd');                   //天
    var h = document.getElementById('hh');                   //小時
    var m = document.getElementById('mm');                   //分
    var s = document.getElementById('ss');                   //秒
    console.log(new_year);
    console.log(new_year.getDate());
    console.log(dt);

    let total = Date.parse(new_year) - Date.parse(dt);         //距離春節剩餘時間
    var clock_d = document.getElementById('dd');                //天
    var clock_h = document.getElementById('hh');                //小時
    var clock_m = document.getElementById('mm');                //分
    var clock_s = document.getElementById('ss');                //秒
    clock_d.textContent = Math.floor(total / (1000 * 60 * 60 * 24));        //換算
    clock_h.textContent = Math.floor((total / (1000 * 60 * 60)) % 24);
    clock_m.textContent = Math.floor((total / 1000 / 60) % 60);
    clock_s.textContent = Math.floor((total / 1000) % 60);
    console.log(Math.floor(total / (1000 * 60 * 60 * 24)));
    console.log(Math.floor((total / (1000 / 60 / 60)) % 24));
    console.log(Math.floor((total / 1000 / 60) % 60));
    console.log(Math.floor((total / 1000) % 60));
}

setInterval(time, 1000);                    //每1000毫秒執行一次