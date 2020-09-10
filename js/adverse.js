function followup(){
    followup_val  = document.querySelector('#follow_up');    
    followup_selected = followup_val.options[followup_val.selectedIndex].value; 
    console.log(followup_selected);
    if (followup_selected == 'other'){
        document.getElementById('followup_other').style.display ='block';
    }
    else{
        document.getElementById('followup_other').style.display ='none';
    }
}

function lossfu(){
    loss_fu_val  = document.querySelector('#loss_fu');    
    loss_fu_selected = loss_fu_val.options[loss_fu_val.selectedIndex].value; 
    console.log(loss_fu_selected);
    if (loss_fu_selected == 'refer_uc'){
        document.getElementById('refer_uc_name').style.display ='block';
    }
    else{
        document.getElementById('refer_uc_name').style.display ='none';
    }
    if (loss_fu_selected == 'admit_other'){
        document.getElementById('admit_other_name').style.display ='block';
    }
    else{
        document.getElementById('admit_other_name').style.display ='none';
    }

}

function limb_event(){
    ma_limb_val  = document.querySelector('#major_limb');    
    ma_limb_selected = ma_limb_val.options[ma_limb_val.selectedIndex].value; 
    if (ma_limb_selected == 'above_knee' || ma_limb_selected == 'below_knee' ){
        document.getElementById('ma_knee').style.display = 'block'
    }
    else{
        document.getElementById('ma_knee').style.display ='none';
    }
    if(ma_limb_selected == 'reintervention'){
        document.getElementById('ma_reintervention').style.display = 'block';
    }
    else{
        document.getElementById('ma_reintervention').style.display ='none';
    }
}

function cardiac_event(){
    ma_cardiac_val = document.querySelector('#major_cardiac')
    ma_cardiac_selected = ma_cardiac_val.options[ma_cardiac_val.selectedIndex].value; 
    console.log(ma_cardiac_selected);
    if(ma_cardiac_selected == 'cardiac'|| ma_cardiac_selected == 'dead_cardiac'){
        document.getElementById('ma_cardiac').style.display = 'block';
    }
    else{
        document.getElementById('ma_cardiac').style.display ='none';
    }
    if(ma_cardiac_selected == 'dead_other'){
        document.getElementById('ma_death').style.display = 'block';
    }
    else{
        document.getElementById('ma_death').style.display ='none';
    }

    
}

function cause_death(){
    // let cause_death_val = document.querySelector('#ma_death')
    // let cause_death_selected = cause_death_val.options[cause_death_val.selectedIndex].value; 
    // console.log(cause_death_selected);
    let death_val = document.querySelector('#ma_death');
    let death_selected = death_val.options[death_val.selectedIndex].value;

    console.log(death_selected);
}