You are given an array(list) strarr of strings and an integer k.
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {

  if (strarr[0] === undefined) {return ""} // if empty arr, return empty str
  if (k < 1) {return ""} // if 0 or negative num, return empty str
  if (k > strarr.length) {return ""} // if k is greater than arr.length, return empty ""

  // create variable longest to hold longest string combination
    // use slice to extract strings from array, then use join to convert to string
  let longest = strarr.slice(0, k).join("") // (0, 2)
  // console.log("longest: " + longest)
  // console.log("STRARR:" + strarr)
  let consecutive = "";
  
  // iterate through strarr
  for (let i = 1; i < strarr.length; i++) {
    // assign next string combo to consecutive
    consecutive = strarr.slice(i, i + k).join(""); // incl (1, 3)
    // console.log(strarr.slice(i, i + k))
    // console.log(consecutive)
    // console.log("STRARR:" + strarr)
    // if consecutive is greater than longest, reassign longest to consecutive;
    if (consecutive.length > longest.length) {
      longest = consecutive;
    }
  }
  return longest;
}


longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) // , "abigailtheta")
longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) //, "oocccffuucccjjjkkkjyyyeehh")
longestConsec([], 3)//, "")
longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) //, "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)//, "wlwsasphmxxowiaxujylentrklctozmymu")
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)//, "")
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) //, "ixoyx3452zzzzzzzzzzzz")
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)// , "")
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) //, "")
