var ms;
var sec;
var min;
var hr;
var mils=0;
var seconds=0;
var mins=0;
var hour=0;
var timeOut;
function pause()
{
    clearInterval(timeOut);
}
function reset()
{
    mils="00";
    ms=$("h1.ms").text(mils.toString());
    seconds="00";
    sec=$("h1.sec").text(seconds.toString());
    mins="00";
    min=$("h1.min").text(mins.toString());
}
function start()
{
    timeOut=setInterval(function ()
{
    mils++;
    ms=$("h1.ms").text(mils.toString());
    if(mils===100)
    {
        mils=0;
        seconds++;
        sec=$("h1.sec").text(seconds.toString());

    }
    if(seconds===60)
    {
        seconds=0;
        mins++;
        min=$("h1.min").text(mins.toString());

    }
},10);

}
var ts;
var th;
var tm;
var timerSeconds=$("card-body.s").text(ts.toString());
var timerMins=$("card-body.m").text(tm.toString());
var timerHours=$("card-body.h").text(th.toString());
function timer()
{

    timeOut=setInterval(function ()
    {
        timerSeconds--;
        ts=$("h1.seconds").text(timerSeconds.toString());
        if(ts===0)
        {
            timerSeconds=0;
            timerMins--;
            tm=$("h1.mi").text(timerMins.toString());
    
        }
        if(tm===0)
        {
           timerMins=0;
            timerHours--;
           th=$("h1.min").text(timerHours.toString());
    
        }
    },100);
}

