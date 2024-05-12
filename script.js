function get(id){
  return document.getElementById(id);
}

function student_info(value){
  $.ajaxSetup({async: false});
  let data = "students.js";
  students_data = $.getJSON(data).responseJSON;

  let build = ``;
  build +=  `<div>
            <center><h1>${students_data[value].name}</h1></center>
            <img src="${students_data[value].photo}">
            </div>`

  get("section").innerHTML = build;
  
}
