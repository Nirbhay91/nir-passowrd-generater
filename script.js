
//============================javasxript code =================================
document.addEventListener('DOMContentLoaded', function() {
    // Function to generate a random password
    function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
      let charset = '';
      
      if (includeUppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }
      
      if (includeLowercase) {
        charset += 'abcdefghijklmnopqrstuvwxyz';
      }
      
      if (includeNumbers) {
        charset += '0123456789';
      }
      
      if (includeSymbols) {
        charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
      }
      
      let password = '';
      console.log("passord",charset);  
      
      for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      
      if (includeSymbols && length < 9) {
        let symbolIndex = Math.floor(Math.random() * password.length);
        let symbolChar = charset.charAt(Math.floor(Math.random() * charset.length));
        
        password = password.slice(0, symbolIndex) + symbolChar + password.slice(symbolIndex + 1);
      }
      
      return password;
      
    }
    

    // Event listener for the generate password button
    document.getElementById('generate').addEventListener('click', function() {
      const length = parseInt(document.getElementById('length').value);
      const includeUppercase = document.getElementById('uppercase').checked;
      const includeLowercase = document.getElementById('lowercase').checked;
      const includeNumbers = document.getElementById('numbers').checked;
      const includeSymbols = document.getElementById('symbols').checked;
      
      const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
      
      document.getElementById('result').textContent = password;
    });
  });
  
  