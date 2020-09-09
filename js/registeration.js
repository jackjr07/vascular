function date(){
    var timestamp = new Date();
    timestamp = moment(timestamp).format('MMMM Do YYYY, h:mm:ss a');
    document.getElementById("date_reg").innerHTML = "Date: " + timestamp.toString();
}

function uqid(){
    var fname = document.getElementById('fname').value;
    fname = fname.toLowerCase();
    var lname = document.getElementById('lname').value[0]+document.getElementById('lname').value[1];
    lname = lname.toLowerCase();
    var pid = document.getElementById('pid').value;
    let result = new Boolean(true) 
    const uqid = (fname+'-'+lname+'-'+pid);
    for (var i = 0; i<fname.length ; i++){
        if(!isNaN(fname[i])){
            document.getElementById('error').innerHTML = "Error! First name can only contains alphabeth";
            result = false;
        }
    }
    
    if (pid.length < 5 || pid.length > 5){
        document.getElementById('error').innerHTML = "ID didn't meet requirement, required 5 digits";
        result = false;
    }
    
    if(result == true){
        document.getElementById('error').innerHTML = "";
        document.getElementById('uqid').innerHTML = uqid;
    }
    
}

function insurance(){
    insurance_val = document.querySelector('#insurance');       
    insurance_val_selected =  insurance_val.options[insurance_val.selectedIndex].value; 
     
    if (insurance_val_selected == 'ss' || insurance_val_selected == 'spsc' ){
        document.getElementById('insurance_hospital_name').style.display ='block';
    }
    else{
        document.getElementById('insurance_hospital_name').style.display ='none';
    }
    
}

function occupation_other(){
    occupation_val = document.querySelector('#occupation');       
    occupation_selected =  occupation_val.options[occupation_val.selectedIndex].value; 
     
    if (occupation_selected == 'occ_other'){
        document.getElementById('occ_other').style.display ='block';
    }
    else{
        document.getElementById('occ_other').style.display ='none';
    }
    
}

function living_other(){
    living_val = document.querySelector('#living');       
    living_selected =   living_val.options[ living_val.selectedIndex].value; 
     
    if (living_selected == 'living_other'){
        document.getElementById('living_other').style.display ='block';
    }
    else{
        document.getElementById('living_other').style.display ='none';
    }
    
}

