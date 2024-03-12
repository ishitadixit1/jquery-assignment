var students = [];
function validateForm() {
  let first = document.forms["studentForm"]["fname"].value;
  let last = document.forms["studentForm"]["lname"].value;
  let dob = document.forms["studentForm"]["dob"].value;
  let age = document.forms["studentForm"]["age"].value;
  var genders = document.forms["studentForm"]["gender"].value;
  let hobby = document.forms["studentForm"]["hobbies"].value;
  let rollNo = document.forms["studentForm"]["rollNo"].value;
  let stud = {
    firstName : first,
    lastName : last,
    dob : dob,
    age : age,
    gender : genders,
    rollNumber : rollNo,
    hobbies : hobby.split(','),
  };
  if (first == "") {
    var fmsg = '<span style="color:rgb(240, 60, 60);;">You must enter first name!</span><br /><br />';
    document.getElementById('fmsg').innerHTML = fmsg;
    return false;
  }
  else if (last == "") {
    var fmsg = '<span style="color:rgb(240, 60, 60);;">You must enter last name!</span><br /><br />';
    document.getElementById('lmsg').innerHTML = fmsg;
    return false;
  }
  else if(age == ""){
    var msg = '<span style="color:rgb(240, 60, 60);">Enter age </span><br /><br />';
    document.getElementById('age-error').innerHTML = msg;
    return false;
  }
  else if (genders == "") {
    var msg = '<span style="color:rgb(240, 60, 60);;">You must select your gender!</span><br /><br />';
    document.getElementById('msg').innerHTML = msg;
    return false;
    } 
  else if(dob == ""){
      var msg = '<span style="color:rgb(240, 60, 60);;">Enter date </span><br /><br />';
      document.getElementById('dd').innerHTML = msg;
      return false;
    }
  else if(rollNo == ""){
      var rollMsg = '<span style="color:rgb(240, 60, 60);;">Enter roll number </span><br /><br />';
      document.getElementById('roll').innerHTML = rollMsg;
      return false;
    }
   else if(hobby == ""){
    var hobbyError = '<span style="color:rgb(240, 60, 60);;">Enter your hobbies </span><br /><br />';
    document.getElementById('hobby').innerHTML = hobbyError;
    return false;
   }
  else{
        document.getElementById('lmsg').innerHTML = '';
        document.getElementById('fmsg').innerHTML = '';
        document.getElementById('dd').innerHTML = '';
        document.getElementById('msg').innerHTML = '';
        document.getElementById('age-error').innerHTML = '';
        document.getElementById('hobby').innerHTML = '';
        document.getElementById('roll').innerHTML = '';
        students.push(stud);
        alert("Form submitted successfully");
        console.log(students);
        return false;
    }
}
function getStudent(){
  $(document).ready(function() {
    let x = $('#sname').val();
    let flag = false;
  
    $.each(students, function(index,data) {
      if (data.rollNumber === x) {
        console.log(data);
        flag = true;
      }
    });
    if(!flag){
      alert('No student found!!');
    }
});  
}