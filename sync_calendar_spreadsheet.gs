function addEventsToCalendar(){
  var sht, i, eventStartDay, eventname, runner, place, distance, done_entry, duedate, app_format, url, added;

  sht = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("sheet1");
  for(i = 2; i <= sht.getLastRow(); i++){
    added = sht.getRange(i,10).getValue();
    if(added == "登録する"){
      eventStartDay = sht.getRange(i,1).getValue();
      // eventEndDay   = sht.getRange(i,3).getValue();
      eventname     = sht.getRange(i,2).getValue();
      runner        = sht.getRange(i,3).getValue();
      place         = sht.getRange(i,4).getValue();
      distance      = sht.getRange(i,5).getValue();
      done_entry    = sht.getRange(i,6).getValue();
      duedate       = sht.getRange(i,7).getValue();
      app_format    = sht.getRange(i,8).getValue();
      url           = sht.getRange(i,9).getValue();

      var eventdate = Utilities.formatDate(eventStartDay,"JST","yyyy-MM-dd");
      var start = new Date(eventdate);　
      
      var MILLIS_PER_DAY = 1000 * 60 * 60 * 24;
      var endTemp = new Date(eventdate);
      var end = new Date(endTemp.getTime() + MILLIS_PER_DAY);

      Cal = CalendarApp.getCalendarById("%calname%@gmail.com");
      Cal.createAllDayEvent(eventname+'('+runner+')', start, end, {location:place,description:distance+'\n'+url});
      
      sht.getRange(i,10).setValue("登録完了");
    }
  }
}
