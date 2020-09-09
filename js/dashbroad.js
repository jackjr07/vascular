function quiz_com(){
    let quiz_completed = 5;
    document.getElementById("quiz_complete").innerHTML = quiz_completed;
    console.log(quiz_completed);
}

function task_com(){
    let task_completed = 10;
    document.getElementById("task_complete").innerHTML = task_completed;
    console.log(task_completed);
}

function prep_com(){
    let prep_completed = 70;
    document.getElementById("prep_complete").innerHTML = prep_completed;
    console.log(prep_completed);
    document.getElementById('prep_prog_bar').setAttribute('style', 'width:'+ prep_completed + '%');
}

function reminder(){
    let reminder = 5;
    document.getElementById("reminder").innerHTML = reminder;
    console.log(reminder);

}