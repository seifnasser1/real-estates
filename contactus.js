// const name=document.getElementById('cname')
//  const phone=document.getElementById('cphone')

// function validate(field){
//     if(field=='')
//         return 'You must enter all required fields';
//     else
//         return '';
// }

// function validatePassword(field1, field2){
//     if(field1=='' || field2=='')
//         return 'You Must Enter a Password.';
//     else if(field1!=field2)
//         return 'You must Enter a matching Password.';
//     else
//         return '';
// }
// function validateDOB(field){
//     let dob = new Date(field);  
//     let diff_ms = Date.now() - dob.getTime();
//     let age_dt = new Date(diff_ms); 
//     if( Math.abs(age_dt.getUTCFullYear() - 1970)>=18)
//         return '';
//     else
//         return 'You Must be older than 18 years.';
// }
// function validate(form){
//     let fail='';
//     fail+=validateUserName(form.UserName.value);
//     fail+=validatePassword(form.Password.value, form.ConfirmPassword.value);
//     fail+=validateDOB(form.dob.value);
//     if(fail=='')
//         return true;
//     else{
//         alert(fail);
//         return false;
//     }
// }
let namein=document.querySelector("[name='cname']");
let phin=document.querySelector("[name='cphone']");
let emailin=document.querySelector("[name='cmail']");
let mesin=document.querySelector("[name='cmes']");



document.forms[0].onsubmit=function(c){
let namev=false;
let phv=false;
let emailv=false;
let mesv=false;
 
if(namein.value !==""){
   namev=true;
}
if(phin.value !==""){
    phv=true;
 }
 if(emailin.value !==""){
    emailv=true;
 }
 if(mesin.value !==""){
    mesv=true;
 }


if(namev===false || phv===false || emailv=== false || mesv===false){
    c.preventDefault();
}

}
