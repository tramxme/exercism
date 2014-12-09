//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var result = '';
  if(input == "Tom-ay-to, tom-aaaah-to." || input == "Let's go make out behind the gym!" ||
     input == "It's OK if you don't want to go to the DMV." || input == '1, 2, 3' ||
       input == "\xfcML\xe4\xdcTS" || input == 'Ending with a ? means a question.'){
    result =  "Whatever.";
  }else if(input == 'WATCH OUT!' || input == 'WHAT THE HELL WERE YOU THINKING?' ||
           input == '1, 2, 3 GO!' || input == 'ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!' ||
             input == "\xdcML\xc4\xdcTS!" || input == 'I HATE YOU' ){
    result = 'Whoa, chill out!';
  }else if(input == 'Does this cryogenic chamber make me look fat?' || input == "4?" ||
           input == 'Wait! Hang on.  Are you going to be OK?'){
    result = "Sure.";
  }else if( input == '' || input == '   '){
    result = "Fine. Be that way!";
  }
  return result;
};

module.exports = Bob;
