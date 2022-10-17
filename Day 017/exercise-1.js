// Given two strings, return true if they are anagrams of one another.

// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// If both strings are anagrams of each other than return true otherwise return false.

function isAnagram(first, second){
    let str1 = first.split('').sort().join();
   let str2 = second.split('').sort().join();
  
    if (str1 === str2){
        return true;
    } else {
        return false;
    }

}

console.log(isAnagram("cinema", "iceman")); // true 
console.log(isAnagram("organge", "yellow")); //false
