const convertObjectToArray = (object) => {
    let array = []
    Object.keys(object).map((keyName, keyIndex) => {
      array.push({...object[keyName], name: keyName})      
    })
    return array
  }
  const stringifyError = (err, filter, space) => {
    let plainObject = {};
    Object.getOwnPropertyNames(err).forEach( (key) => {
      plainObject[key] = err[key];
    });
    return JSON.stringify(plainObject, filter, space)  
  }
  export {
    convertObjectToArray, stringifyError
  }