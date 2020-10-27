/*Could you make a program that 
	•	makes this string uppercase
	•	gives it sorted in alphabetical order by last name. 
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
*/

function meeting(s) {

    const output = s
    .toUpperCase()
    .split(';')
    .sort((a, b) => {
      const [aFirst, aLast] = a.split(':');
      const [bFirst, bLast] = b.split(':');
      return aLast.localeCompare(bLast) ||  aFirst.localeCompare(bFirst);
    })
    .map((name) => {
      const [first, last] = name.split(':');
      return `(${last} ${first})`;
    })
    .join(' ');
  console.log(output);
  return output


  }
  s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
  console.log(meeting(s))
  
  //result: "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
  
