$( "#password_check" ).keyup(function(){
    checkPasswords();
});
$("#password").change(function (e) { 
    checkPasswords();
    
});

  function checkPasswords(){
      if(!($("#password").val() === $("#password_check").val())){
        $("#password").addClass("is_invalid");
        $("#password_check").addClass("is_invalid")
        $(".invalid-feedback:hidden").show();
        $("#submit").prop('disabled', true);
      }else{
        $("#password").removeClass("is_invalid");
        $("#password_check").removeClass("is_invalid")
        $(".invalid-feedback").hide();
        $("#submit").prop('disabled', false);
      }

  }

  function submitForm(){
   alert("Form Succesfully submitted!");
  }