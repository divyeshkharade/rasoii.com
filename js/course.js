var Course = function(){
  var transform = function ( arr ) {
    var result = [], temp = [];
    arr.forEach( function ( elem, i ) {
        if ( i > 0 && i % 3 === 0 ) {
            result.push( temp );
            temp = [];
        }
        temp.push( elem );
    });
    if ( temp.length > 0 ) {
        result.push( temp );
    }
    return result;
}
  var showCourses = function(){
    //Course from JSON
    $.get('course.json', function(data){

      var objNewCourses = {};
      objNewCourses.rows = transform(data.courses);
      var source   = $("#tmpl-course-item").html();
      var template = Handlebars.compile(source);
      var html = template(objNewCourses);

      $('#features').html(html);
    });
  }

  return {
    init: function(){
      showCourses();
    }
  }
}

$(document).ready(function(){
  var objCourse = new Course();
  objCourse.init();
});
