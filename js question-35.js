  var dictionary = new Set();
     
 
        // array of strings to be added in dictionary set.
        var temp_dictionary = ["apple","pen"];
 
        // loop to add all strings in dictionary set
        for (var temp of temp_dictionary) {
            dictionary.add(temp);
        }
 
        // sample input cases
         

         
 
 
    // returns true if the word can be segmented into parts such
    // that each part is contained in dictionary
    function newword( word) {
        var size = word.length;
 
        // base case
        if (size == 0)
            return true;
 
        // else check for all words
        for (var i = 1; i <= size; i++) {
            // Now we will first divide the word into two parts ,
            // the prefix will have a length of i and check if it is
            // present in dictionary ,if yes then we will check for
            // suffix of length size-i recursively. if both prefix and
            // suffix are present the word is found in dictionary.
 
            if (dictionary.has(word.substring(0, i)) && newword(word.substring(i, size-i)))
                return true;
        }
 
        // if all cases failed then return false
        return false;
}
console.log((newword("applepenapple")));