$(function(){
    var holiday = 0;//set to 0 after sept 8
    var n = new Date();
    var utc = n.getTime() + (n.getTimezoneOffset()*60000);
    var now = new Date(utc+(3600000*-4));
    var dst = -1; // when daylight savings changes, change to 0
    /***************/
    // DST Offset Check
    //var today = new Date();
    //if (today.prototype.dst()) { alert ("Daylight savings time!"); }

    //Date.prototype.stdTimezoneOffset = function() {
    //    var jan = new Date(this.getFullYear(), 0, 1);
    //    var jul = new Date(this.getFullYear(), 6, 1);
    //    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    //}
    //
    //Date.prototype.dst = function() {
    //    return this.getTimezoneOffset() < this.stdTimezoneOffset();
    //}
    /**************/
    var temp = new Date(utc+(3600000*-4));
    var d = now.getDay();
    var h = now.getHours() + dst;
    var m = now.getMinutes();
    //console.log("now - "+now+"\nDay - "+d+"\nHour - "+h+"\nMinutes - "+m);
    var getdays=function(date,range){
        date = new Date(date);
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
        var day1 = new Date(date.setDate(date.getDate()+1));
        var day2 = new Date(date.setDate(day1.getDate()+range));
        if(range == 0){
            return monthNames[day1.getMonth()]+" "+day1.getDate();
        }
        return monthNames[day1.getMonth()]+" "+day1.getDate()+" - "+monthNames[day2.getMonth()]+" "+day2.getDate();
    };
    var getDatesText = function(){
        var message = "";

        if(d=='1'){
            //if((h>=14&&m>=45)||(h>14)){
            if(h>20){
                message = getdays(now.setDate(now.getDate()+1),1);
            }
            else if(h >= 14){
                message = getdays(now.setDate(now.getDate()),2);
            }
            else
            {
                message = getdays(now.setDate(now.getDate()),1);
            }
        }
        else if(d=='2'){
            //if((h>=14&&m>=45)||(h>14)){
            if(h>20){
                message = getdays(now.setDate(now.getDate()+1),2);
            }
            else if(h >= 14){
                message = getdays(now.setDate(now.getDate()),3);
            }
            else
            {
                message = getdays(now.setDate(now.getDate()),1);
            }
        }
        else if(d=='3'){
            //if((h>=14&&m>=45)||(h>14)){
            if(h>20){
                message = getdays(now.setDate(now.getDate()+1),1);
            }
            else if(h<=19){
                message = getdays(now.setDate(now.getDate()),2);
            }

        }
        else if(d=='4'){
            //if((h>=14&&m>=45)||(h>14)){
            if(h>20){
                message = getdays(now.setDate(now.getDate()+1),3);//change 0 to 3 after the 8th
            }
            else if(h>=8){
                message = getdays(now.setDate(now.getDate()),4+holiday);//change 0 to 4 after the 8th
            }
            else
            {
                message = getdays(now.setDate(now.getDate()),1);
            }

        }
        else if(d=='5'){
            //if((h>=14&&m>=45)||(h>14)){
            if(h>20){
                message = getdays(now.setDate(now.getDate()+3+holiday),1);//change 0 to 1
            }
            else if(h>=8){
                message = getdays(now.setDate(now.getDate()),4);
            }
            else
            {
                message = getdays(now.setDate(now.getDate()),3);//change 0 to 3 after the 8th
            }
        }
        else if(d=='6'){
            if(h>=8){
                message = getdays(now.setDate(now.getDate()+2),1+holiday);
            }
            else
            {
                message = getdays(now.setDate(now.getDate()+2),0+holiday);
            }
        }
        else if(d=='0'){
            if(h>=8){
                message = getdays(now.setDate(now.getDate()+1),1+holiday);
            }
            else
            {
                message = getdays(now.setDate(now.getDate()+1),0+holiday);
            }
        }
        return message;
    };
    var nextday2 = function() {
        if (d > 0 && d < 6 && h > 11 && h < 21) {
            $("#late-night").show();
        }
    }

    var nextday = function(){
        now.setDate(temp.getDate());
        var diff = 8 - parseInt(d);
        //console.log("Day - "+d);
        //console.log("Diff - "+diff);

        if(d==3&&now.getYear()=="115"&&now.getMonth()==10){
            $("#nd2-divider span#nd-date").text("December 1");
            $("#nd2-divider").show();
        }
        else if(d==4){
            //if((h>=14&&m>=45)||(h>14)){
            if(h>20){
                //$("#nd-divider span#nd-date").text(getdays(temp.setDate(now.getDate()+1),diff-1));//change 0 to diff-1
                $("#nd2-divider span#nd-date").text(getdays(temp.setDate(now.getDate()+diff+holiday),0));
                $("#nd2-divider").show();
            }
            else if(h>9||(h==9&&m>29)){
                //$("#nd-divider span#nd-date").text(getdays(temp.setDate(now.getDate()),diff));
                $("#nd2-divider span#nd-date").text(getdays(temp.setDate(now.getDate()+diff),0));
                $("#nd2-divider").show();
            }
        }
        else if(d==5){
            //if((h>=14&&m>=45)||(h>14)){
            if(h>20){
                //$("#nd-divider span#nd-date").text(getdays(temp.setDate(now.getDate()+3+holiday),1));//change 0 to 1
                $("#nd-divider").show();
            }
            else if(h>8){
                //$("#nd-divider span#nd-date").text(getdays(temp.setDate(now.getDate()),diff+1));
                $("#nd2-divider span#nd-date").text(getdays(temp.setDate(now.getDate()+diff+holiday),1));//change 0 to 1
                $("#nd2-divider").show();
            }
            else{
                //$("#nd-divider span#nd-date").text(getdays(temp.setDate(now.getDate()),diff));
                $("#nd2-divider span#nd-date").text(getdays(temp.setDate(now.getDate()+diff),0));
                $("#nd2-divider").show();
            }
        }
        //else if(d>5||d==0){
        //    console.log("triggered");
        //    $("#nd-divider span#nd-date").text(getdays(temp.setDate(now.getDate()+1),1));
        //    $("#nd-divider").show();
        //}
        else if(d==6){
            //console.log("triggered");
            //$('#nd-divider span#nd-date').text(getdays(temp.setDate(now.getDate()+2),1));
            $('#nd-divider span#nd-date').show();
        } else if(d==0){
            //console.log("triggered");
            //$("#nd-divider span#nd-date").text(getdays(temp.setDate(now.getDate()+1),1));
            $("#nd-divider").show();
        }
    };
    $(document).ready(function(){
        var tulipdiff = 8 - parseInt(d);
        //$("span#dates").text("December 1 - December 2");
        if(now.getYear()==115&&now.getMonth()==10&&now.getDate()<30){
            //$(".tulip-prod").insertAfter("#nd2-divider");
        }
        else if((d == 5 && h >= 15 || d == 6) && $(".tulip-prod").length>0) { //fri after 3 || sat || sun
            $("#nd3-divider").css("display","table");
            $(".tulip-prod").appendTo("#nd3-divider");
            $("#nd-date-tulip").text(getdays(temp.setDate(now.getDate()+tulipdiff),1));
            //$("#nd-date-tulip").text("December 8 - December 9");
            console.log("working...");
            temp.setDate(now.getDate());
        }
        else if((h >= 15 && h < 21 || d == 0) && $(".tulip-prod").length>0){
            $("#nd3-divider").css("display","table");
            $(".tulip-prod").appendTo("#nd3-divider");
            $("#nd-date-tulip").text(getdays(temp.setDate(now.getDate()+1),0));
            //$("#nd-date-tulip").text("December 8 - December 9");
            console.log("not working..");
            temp.setDate(now.getDate());
        }
        console.log()
        $("#nds-divider").css("display","table");
        $(".sold-out").insertAfter("#nds-divider");
        $("span#dates").text(getDatesText());
        nextday();
        nextday2();
    });
});
