setInterval(()=>{
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();

    hrotation=30*h+m/2;
    mrotation=6*m;
    srotation=6*s;

    hour.style.transform =`rotate(${hrotation}deg)`;
    minut.style.transform =`rotate(${mrotation}deg)`;
    second.style.transform =`rotate(${srotation}deg)`;
},1000);

// setInterval(() => {
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();
//     hrotation = 30*htime + mtime/2;
//     mrotation = 6*mtime;
//     srotation = 6*stime;

//     hour.style.transform = `rotate(${hrotation}deg)`;
//     minut.style.transform = `rotate(${mrotation}deg)`;
//     second.style.transform = `rotate(${srotation}deg)`;
// }, 1000);