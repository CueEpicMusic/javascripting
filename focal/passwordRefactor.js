let input = process.argv[2];

const obfuscate = function(password){
  let newStr = ''
  for (let i = 0; i < password.length; i++) {
    if (password[i] === 'a') {
      newStr += '4'
    }
    else if (password[i] === 'e') {
      newStr += '3'
    }
    else if (password[i] === 'o') {
      newStr += '0'
    }
    else if (password[i] === 'l') {
      newStr += '1'
    }
    else { (password[i]!== 'l' || password[i] !== 'o' || password[i] !== 'e' || password[i] !== 'a') 
      newStr += password[i]
    }
  }
  return newStr
}


if (input)
  console.log(obfuscate(input));