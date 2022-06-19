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

