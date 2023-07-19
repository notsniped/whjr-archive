name_of_students_array = [];
function submit() {
    name_1 = document.getElementById("name_of_student_1").value;
    name_2 = document.getElementById("name_of_student_2").value;
    name_3 = document.getElementById("name_of_student_3").value;
    name_4 = document.getElementById("name_of_student_4").value;
    name_of_students_array.push(name_1);
    name_of_students_array.push(name_2);
    name_of_students_array.push(name_3);
    name_of_students_array.push(name_4);
    console.log(name_of_students_array);
    document.getElementById("display_names").innerHTML = name_of_students_array;
    document.getElementById("button_submit").style.display = "none";
    document.getElementById("button_sort").style.display = "inline-block";
}

function sort() {
    name_of_students_array.sort();
    console.log(name_of_students_array);
    document.getElementById("display_names").innerHTML = name_of_students_array;
}