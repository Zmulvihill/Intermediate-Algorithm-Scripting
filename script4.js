//Wherefore art thou
function whatIsInAName(collection, source) {
    let result = []; // initialize an empty array to hold the matching objects
    let keys = Object.keys(source); // get all keys in the source object and store them in an array
  
    for (let i = 0; i < collection.length; i++) { // loop through each object in the collection array
      let obj = collection[i]; // get the current object from the collection array
      let match = true; // initialize a boolean variable to true, assuming it's a match until proven otherwise
  
      for (let j = 0; j < keys.length; j++) { // loop through each key in the keys array
        let key = keys[j]; // get the current key
  
        if (obj[key] !== source[key]) { // check if the current object's property value does not match the corresponding value in the source object
          match = false; // if there is no match, set match to false
          break; // stop checking other properties in source
        }
      }
  
      if (match) { // if there is a match, push the object to the result array
        result.push(obj);
      }
    }
  
    return result; // return the result array containing all the matching objects from the collection array
  }