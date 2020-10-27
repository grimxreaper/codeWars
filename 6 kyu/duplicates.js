const removeDuplicateIds = (obj) => {
    const existingValues = []
    const reverseSortedKeys = Object.keys(obj).sort((v,  n) => n - v);
    
    for(const key of reverseSortedKeys) {
       obj[key] = obj[key].filter(v => {
            if(existingValues.includes(v)) return false;
             else {
               existingValues.push(v);
               return true;
             }
       })
    };
  return obj;
};
