function sipac_problem_other(){
    sipac_problem_val = document.querySelector('#sipac_problem');       
    sipac_problem_selected =   sipac_problem_val.options[sipac_problem_val.selectedIndex].value; 
     
    if (sipac_problem_selected == 'problem_other'){
        document.getElementById('problem_other').style.display ='block';
    }
    else{
        document.getElementById('problem_other').style.display ='none';
    }
    
}

function sipac_risk(){
    sipac_risk_val = document.querySelector('#sipac_risk');       
    sipac_risk_selected =   sipac_risk_val.options[sipac_risk_val.selectedIndex].value; 
     
    if (sipac_risk_selected == 'smoking'){
        document.getElementById('sipac_smoking').style.display ='block';
    }
    else{
        document.getElementById('sipac_smoking').style.display ='none';
    }
    if (sipac_risk_selected == 'cad'){
        document.getElementById('sipac_cad').style.display ='block';
    }
    else{
        document.getElementById('sipac_cad').style.display ='none';
    }

    if (sipac_risk_selected == 'ckd'){
        document.getElementById('sipac_ckd').style.display ='block';
    }
    else{
        document.getElementById('sipac_ckd').style.display ='none';
    }
}

function pre_cta(){
    sipac_cta_val = document.querySelector('#sipac_cta');       
    sipac_cta_selected =   sipac_cta_val.options[sipac_cta_val.selectedIndex].value; 

    if (sipac_cta_selected == 'yes'){
        document.getElementById('sipac_cta_yes').style.display ='block';
    }
    else{
        document.getElementById('sipac_cta_yes').style.display ='none';
    }
}

function cta_rq(){
    sipac_ctarq_val = document.querySelector('#sipac_cta_rq');       
    sipac_ctarq_selected =   sipac_ctarq_val.options[sipac_ctarq_val.selectedIndex].value; 

    if (sipac_ctarq_selected == 'yes'){
        document.getElementById('cta_rq_yes').style.display ='block';
    }
    else{
        document.getElementById('cta_rq_yes').style.display ='none';
    }
}


