function showtime(){
    const date =new Date();
    return date.getHours()+":hrs"+date.getMinutes()+":min"+date.getSeconds()+":secs";
}
function showSessionExpire(){
console.log("Activity B expired at :"+showtime());
}
console.log("Activity A triggering activity B at :"+showtime());
setTimeout(showSessionExpire,5000);
console.log("Activity A triggering activity B at :"+showtime()+" will executed after 5 secs");