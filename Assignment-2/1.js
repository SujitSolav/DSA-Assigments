// Q 3)Write a program to find if the given string is pallindrome.

function Palindrome(str){
    for(let i=0;i<str.length;i++){
        if(str[i]!=str[str.length-i-1]){
            return false;
        }
    }
    return true;
}

let str='racecar';
console.log(Palindrome(str));