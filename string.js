//mail
function mail(){
    let userInput=prompt("Enter the Email");
    let input1=document.getElementById("input1").innerText=`Entered mail : ${userInput}`;
    if(userInput.includes('@')){
        let index=userInput.indexOf('@');
        let mail=userInput.substring(index+1);
        console.log(mail);
        let output11=document.getElementById("output1").innerText=`Domain : ${mail}`;
    }
    else{
        output1=document.getElementById("output1").innerText=`Enter the vail mail id`;
    }
}

//username check
function userName(){
    let userName=prompt("Enter the name");
    let input2=document.getElementById("input2").innerText=`Name : ${userName}`;
    if(!userName.includes(' ') && userName==userName.toLowerCase()){
        let output2=document.getElementById("output2").innerText=`Valid name`;
    }
    else{
        output2=document.getElementById("output2").innerText=`Invalid name`;
    }
}

//Palindrome Checker
function palinChecker(){
    let word=prompt("Enter the word");
    let input3=document.getElementById("input3").innerText=`Word : ${word}`;
    let word1="";
    for(i=(word.length)-1;i>=0;i--){
        word1+=word[i]; 
    }
    if(word==word1){
        let output3=document.getElementById("output3").innerText=`The given word is palindrome`;
    }
    else{
        let output3=document.getElementById("output3").innerText=`The given word is not a palindrome`;
    }
    console.log(word1);
}

function secretCodeGenerator(){
    let vow=['a','e','i','o','u'];
    let str=prompt("Enter the code");
    let input4=document.getElementById("input4").innerText=`Code : ${str}`;
    let str1="";
    for(i=0;i<str.length;i++){
        let char=str[i];
        if(vow.includes(char)){
           str1+='*'; 
        }
        else{
            str1+=str[i]
        }    
    }
    let output4=document.getElementById("output4").innerText=`Secret Code : ${str1}`;
    console.log(str1)
}

function wordCounter(){
    let str=prompt("Enter the paragraph");
    let newArr=str.split(" ").length;
    let input5=document.getElementById("input5").innerText=`Paragraph : ${str}`;
    let output5=document.getElementById("output5").innerText=`Count : ${newArr}`;
}

function numFormat(){
    let num=prompt("Enter the Mobile number");
    if(num.length==10 && !isNaN(num)){
        let num1=num.substring(0,3);
        let num2=num.substring(3,6);
        let num3=num.substring(6)
        let mobNum=`(${num1})${num2}-${num3}`
        console.log(mobNum)
        let input6=document.getElementById("input6").innerText=`Phone number : ${mobNum}`;
    }
    else{
        let output6=document.getElementById("output6").innerText="Enter the valid number";
    }
}

function passwordCheck(){
    let pass=prompt("Enter the password");
    if(pass.length>=8){
        if(pass.includes('#')||pass.includes('@')){
            if(pass!=pass.toLowerCase())
            {
                let output7=document.getElementById("output7").innerText="the password is strength password";
            }
            else{
                let output7=document.getElementById("output7").innerText="The password should need uppercase";
            }
        }
        else{
            let output7=document.getElementById("output7").innerText="the password should need special character";
        }
    }
    else{
        let output7=document.getElementById("output7").innerText="Enter the valid password";
    }
}

function revEachWord(){
    let str=prompt("Enter the sentence");
    let input8=document.getElementById("input8").innerText= `${str}`;

    let wrdArr=str.split(" ");
    function rev(n){
        return n.split("").reverse().join("")
    }
    let newArr=wrdArr.map(rev).join(" ");
    console.log(wrdArr);
    let output8=document.getElementById("output8").innerText= `${newArr}`;
}

function isogram(){
    let count=0;
    let str=prompt("Enter the string");
    let input9=document.getElementById("input9").innerText= `${str}`;
    for(i=0;i<str.length;i++){
        if(str[i]==''||str[i]=='-'){
            continue;
        }
        if(str.indexOf(str[i])!=str.lastIndexOf(str[i])){
            count+=1;
            let output9=document.getElementById("output9").innerText= `The given string is not an isogram`;
            break;
        }
    }
    if(count==0){
        let output9=document.getElementById("output9").innerText= `The given string is an isogram`;
    }
}

function cyclopsNum(){
    let num=Number(prompt("Enter the number"));
    let input10=document.getElementById("input10").innerText= `${num}`;
    let n=num.toString(2);
    console.log(num.toString(2))
    if(n.length%2!=0){
        if(n[Math.floor(n.length/2)]==0){
            if(n.indexOf("0")==n.lastIndexOf("0")){
                result="The given number is cyclops Number";
            }
            else{
                result="The given number is not cyclops Number";
            }
        }
        else{
            result="The given number is not cyclops Number";
        }
    }
    else{
        result="The given number is not cyclops Number";
    }
    let output10=document.getElementById("output10").innerText= `${result}`;
}

function removeExclamationMarks(){
    let str=prompt("Enter the sentence");
    let input11=document.getElementById("input11").innerText= `${str}`;
    let ans=str.replaceAll('!',"")
    let output11=document.getElementById("output11").innerText= `${ans}`;
    console.log(ans)
}

function alternateCase(){
    let str=prompt("Enter the sentence");
    let input12=document.getElementById("input12").innerText= `Given: ${str}`;
    let newStr="";
    for(let i=0;i<str.length;i++){
        if(str[i]==str[i].toLowerCase()){
            newStr+=str[i].toUpperCase();
        }
        else{
            newStr+=str[i].toLowerCase();
        }
    }
    let output12=document.getElementById("output12").innerText= `${newStr}`;
}

function frdName(){
    let str=prompt("Enter your friends name seperated by space");
    let frdArr=str.split(" ");
    let input13=document.getElementById("input13").innerText= `Input: ${frdArr}`;
    let newArr=[];
    let len=frdArr.length;
    for(i=0;i<len;i++){
        if(frdArr[i].length==4){
            newArr.push(frdArr[i])
        }
       
    }
    let output13=document.getElementById("output13").innerText= `Output: ${newArr}`;
    console.log(newArr);
}

function encryptMsg(){
    let str=prompt("Enter the string");
    let input14=document.getElementById("input14").innerText= `Input: ${str}`;
    let msg1="GDRPLKgdrplk";
    let msg2="AEYOUIaeyoui";
    let result="";
    for(let i=0;i<str.length;i++){
        let ch=str[i];
        if(msg1.includes(ch)){
            result+=msg2[msg1.indexOf(ch)];
        }
        else if(msg2.includes(ch)){
            result+=msg1[msg2.indexOf(ch)];
        }
        else{
            result+=ch;
        }
    }
    let output14=document.getElementById("output14").innerText= `Output: ${result}`;
}

function listOfStrings(){
    let str=prompt("Enter the word");
    let input15=document.getElementById("input15").innerText= `Given: ${str}`;
    let len=str.length
    if(len>=3){
        let newArr=[];
        while(len>0){
            let a=str.slice(0,len);
            newArr.push(a.split("").reverse().join(""));
            len--;
        }
        let output15=document.getElementById("output15").innerText= `${newArr}`;
    }
    
    
}