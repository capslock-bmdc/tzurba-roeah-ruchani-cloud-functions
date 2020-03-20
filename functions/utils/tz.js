//Made by Ephraim Haber
const validateTz = (tz) => {
    var tzNumber = prompt("What's your TZ number?");
    var id_s = tzNumber;
    var sum = 0;
    var id = new Array();
    var validID = new Array();
    var asistID = [1, 2, 1, 2, 1, 2, 1, 2, 1];
    if (!goodLength(id_s) || !allnumeric(id_s)){
        id_s = "INVALID";
    }
    id = convertStringToIntArray(id_s);          
    validID = multipliedArr(id, asistID);       
    validID = organizeMultipliedArr(validID);   
    sum = arraySum(validID);
    if (finalCheck(sum)) {
      return true;
    }
    else{
        return false;
    }
    
}
function finalCheck (number_){
    if ((number_ % 10) == 0) return true;
    else return false;
  }
  function arraySum (d = new Array){
    let sum = 0;
    for (let i = 0; i < d.length; i++) {
        sum += d[i];
    }
    return sum;
  }
  
  function organizeMultipliedArr (c = new Array){
      let temp1 = 0;
      let temp2 = 0;
      let temp3 = 0;
    for (let i = 0; i < c.length; i++) {
        if(c[i]>9){
            temp2 = c[i]%10;
            temp3 = ((c[i]-temp2)%10);
            temp1 += temp2;
            temp1 +=temp3;
            c[i] = temp1;
        }
    }
    return c;
  }
  function multipliedArr (a, b){
    var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < a.length; i++) {
        var temp = (a[i]*b[i]);
        temp = temp - (temp%1);
        arr[i] = temp;
    }
    return arr;
  }
  function convertStringToIntArray (s){
    let intarr = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        intarr[i] = s.charAt(i) - '0';
    }
        return intarr;
  }
  function goodLength (str){
    if (str.length == 0 || str.length >9){
      return false;
    }
    else
    {
      return true;
    }
  }
  function allnumeric(str)
     {
       let c = 0;
      for (let i = 0; i < str.length; i++) {
        if(str.charAt(i)>='0' && str.charAt(i)<='9'){
          c++;
        }
      }
      if (c==str.length) {
        return true;
      } else {
        return false;
      }
     }
  

module.exports = { validateTz }