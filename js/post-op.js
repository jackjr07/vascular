function readmission_date(){
    
    readmission_val = document.querySelector('#readmission');       
    readmission_selected =  readmission_val.options[readmission_val.selectedIndex].value; 
    
    if (readmission_selected == 'yes'){
        document.getElementById('readmission_date').style.display ='block';
    }
    else{
        document.getElementById('readmission_date').style.display ='none';
    }
    
}