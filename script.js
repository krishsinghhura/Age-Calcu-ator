let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    let input=document.querySelector(".input input").value;
    let year=parseInt(input.substring(0,4));
    let month=parseInt(input.substring(5,7));
    let day=parseInt(input.substring(8,10));

    let today= new Date();
    let tday=today.getDate();
    let tmonth=today.getMonth();
    let tyear=today.getFullYear();
    let uyear=document.querySelector(".years");
    let umonth=document.querySelector(".months");
    let uday=document.querySelector(".days");
    uyear.innerHTML=tyear-year;
    umonth.innerHTML=tmonth-month;
    uday.innerHTML=tday-day;
});