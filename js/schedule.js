if(typeof(Handlebars) !== 'undefined'){
  Handlebars.registerHelper('hbTime', function(fullDate) {
    var momentDate = moment(fullDate, 'YYYY-MM-DD HH:mm:ss');

    return momentDate.format('hh:mm A');
  });

  Handlebars.registerHelper('hbDate', function(fullDate) {
    var momentDate = moment(fullDate, 'YYYY-MM-DD HH:mm:ss');

    return momentDate.format('DD MMM');
  });
}

var Schedule = function(){

  var showSchedule = function() {
    //Course from JSON
    $.get('schedule.json', function(data){

      var source   = $("#tmpl-schedule-item").html();
      var template = Handlebars.compile(source);
      var html = template(data);

      $('#ulSchedule').html(html);
    });
  };

  return {
    init: function() {
      showSchedule();
    }
  }
}

$(document).ready(function(){
  var objSched = new Schedule();
  objSched.init();
});
