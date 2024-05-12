 // Palindrom 01
 let word = 'saas';
 word = word.split('')
 console.log(word.reverse === word.forward)
 if(word.forward == word.reverse)
 {
     // alert('It Palindrome')
 }
 else
 {
     // alert('it not Palindrome')
 }
 // FizzBuzz 02
 
 function FizzBuzz(num)
 {
     for(let i = 1;i<=num;i++)
 {
     if(i%3 == 0 && i%5 == 0)
     {
         console.log('FizzBuzz');
     }
     else if(i%3 == 0)
     {
         console.log("Fizz");
     }
     else if(i%5 == 0)
     {
         console.log("Buzz");
     }
     else if(3*5 == i)
     {
         console.log("FizzBuzz")
     }
     else
     {
     console.log(i);
     }
 }
 
 }
 FizzBuzz(20);

 // 3. Reverse a String

 // function reverseString(n){
 //     let val = n.split('');
 //     alert(val.reverse())
 // }
 // let word1 = "king";
 // reverseString(word1);

 function reverseString(n){
     let reverseWord = '';
     for(let i = n.length-1;i>=0;i--)
     {
         reverseWord += n[i];
     }
     return reverseWord;
 }
 let word1 = 'King';
 console.log(word1.length)
 let reverseAll = reverseString(word1);
 // alert(reverseAll);

 // Largest Number in Array 

 function largestNumber(n)
 {

     let max = n[0];
     for(let i = 0;i<num.length;i++)
     {
         if(n[i]>max)
         {
             max = n[i];
         }
     }
     return max;

 }

 let num = [1,3,5,40,111,33];

 let largeNumber = largestNumber(num);
 console.log(largeNumber)

 // Count Vowel in String

 function VowelString(st)
 {
     let str = st.split('');
     let num = 0;
     for(let i = 0;i<str.length;i++)
     {
         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' )
         {
             num++;
         }
     }
     return num;
 }

 let string = 'salman is my best friend and will be';
 console.log(VowelString(string));

 // Find Factorial

 function Factorial(num)
 {
     let n = 1;
     for(let i = num;i>=1;i--)
     {
         n = n * i;
     }
     return n;
 }
 let n1 = 2;
 console.log(Factorial(n1))