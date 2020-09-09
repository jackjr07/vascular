let admin_user = 'admin_sri_7';
let admin_pass = 'admin_sri_7';

let jack_user = 'jack7';
let jack_pass = 'jack7';

function check_user(){
let login_user = document.getElementById('login').value;
let login_pass = document.getElementById('password').value;
console.log(login_user + ':' + login_pass);

if(login_user == admin_user && login_pass == admin_pass){
    window.location.href = 'admin.html';
}
else if (login_user == jack_user && login_pass == jack_pass){
    window.location.href = 'dashbroad.html';
}
}
