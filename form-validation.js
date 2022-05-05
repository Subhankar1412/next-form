
function fvalidate() 
{ 
  var yes=confirm("are you sure to submit ?")
    if(yes)
    {
       var namecheck=/^[a-zA-Z]+$/;
        var first_name = document.getElementById('fname').value;
        if (namecheck.test( first_name ))
        {
            if (/^\s+$/.test(first_name)) {
                document.getElementById("message_fname").innerHTML = " you cannot write last name hare";
                document.getElementById('fname').focus();
                return false;
            }
        }
        else
        {
            document.getElementById("message_fname").innerHTML = " enter a valid name";
            document.getElementById('fname').focus();
            return false;
        }

        //contact no
        var contact_number = document.getElementById('contact_no').value;
        var cno=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6-9]\d{9}$/;
        if (cno.test(contact_number)) 
        {
           //return true
        } 
        else 
        {
            document.getElementById("message_contact").innerHTML = "Invalid number";
            document.getElementById('contact_no').focus();
            return false;
        }
        //email validation
        var emailid = document.getElementById('email').value;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(emailid))
        {
            var regex_sec=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if(!regex_sec.test(emailid))
            {
            document.getElementById("message_email").innerHTML = "Invalid email";
            document.getElementById('email').focus();
            return false;
            }
        }
        //password validation
        var passw = document.getElementById('user_pass').value;
        var fname_pass = document.getElementById('fname').value;
        var contact_pass = document.getElementById('contact_no').value;
        if (passw.match(/[a-z]/g) && passw.match(/[A-Z]/g) && passw.match(/[0-9]/g) && passw.match(/[^a-zA-Z\d]/g) && passw.length >= 8 && passw.length <= 15)
        {
            if ( passw==fname_pass || passw==contact_pass) 
            {
                document.getElementById("message_pass").innerHTML = "** you can not use name or contact  as password";  
                document.getElementById('user_pass').focus();
                return false;
            }
        }
        else
        {
            document.getElementById("message_pass").innerHTML = "** use strong password between 8 to 15 charecter";
            document.getElementById('user_pass').focus();
            return false;
        }
        alert("submited");
        document.form1.submit();
    }
}



















// var pattern=/^((0091)|(\+91)|0?)[789]{1}\d{9}$/;
//            if (!pattern.test(contact_number)) {
//             document.getElementById("message_contact").innerHTML = "Invalid number";
//             document.getElementById('contact_no').focus();
//             return false;
//            }


 // var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        // var first_name = document.getElementById('fname').value;
        // if (regName.test(first_name)) 
        // {
        //     for (let i = 0; i < first_name.length; i++)
        //     {
        //         var cfname = first_name[i];  
        //         var white = "/^\s+$/";
        //         if (white.test(cfname)) {
        //             document.getElementById("message_fname").innerHTML = " Enter only first name here";
        //             return false;
        //         } 
        //     }
        // } 
        // else
        // {
        //     document.getElementById("message_fname").innerHTML = " Enter a valid name";
        // }




// function is_contact()
// {
//   var contact_number = document.getElementById('contact_no').value;
//   if(contact_number.value == "") 
//   {
//     document.getElementById("message_contact").innerHTML = "this field must not be null";
//     return false;
//   }
//   else
//   {
//     var cno=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6-9]\d{9}$/;
//     if (cno.test(contact_number)) 
//       {
//         // value is ok, use it
//       } 
//       else 
//       {
//         document.getElementById("message_contact").innerHTML = "Invalid number";
//         return false
//       }
//   }
// }

// function is_email()
// {
//   var emailid = document.getElementById('email').value;
//     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if(!regex.test(emailid))
//     {
//       document.getElementById("message_email").innerHTML = "Invalid email";
//       document.getElementById('email').focus();
//       return false;
//     }
// }
  
// function is_pass(){
//   var passw = document.getElementById('user_pass').value;
//   var fname_pass = document.getElementById('fname').value;
//   var contact_pass = document.getElementById('contact_no').value;
//   if (passw.match(/[a-z]/g) && passw.match(/[A-Z]/g) && passw.match(/[0-9]/g) && passw.match(/[^a-zA-Z\d]/g) && passw.length >= 8)
//   {
//     if ( passw==fname_pass || passw==contact_pass) {
//         document.getElementById("message_pass").innerHTML = "** you can not use name or contact  as password";  
    
//     }
//   }
//     else{
//         document.getElementById("message_pass").innerHTML = "** use strong password";
//     } 
// }
  
  
// //   var res;
// //   var str =
// //       document.getElementById("t1").value;
// //   if (str.match(/[a-z]/g) && str.match(
// //           /[A-Z]/g) && str.match(
// //           /[0-9]/g) && str.match(
// //           /[^a-zA-Z\d]/g) && str.length >= 8)
// //       res = "TRUE";
// //   else
// //       res = "FALSE";
// //   document.getElementById("t2").value = res;


  

// //   if(passw.length < 8) 
// //   {  
// //   document.getElementById("message_pass").innerHTML = "**Password length must be atleast 8 characters";  
// //   return false;  
// //   }  

// // //maximum length of password validation  
// // if(passw.length > 15) {  
// //   document.getElementById("message_pass").innerHTML = "**Password length must not exceed 15 characters";  
// //   return false;  
// //}