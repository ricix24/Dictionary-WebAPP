// searcinput
// seachbtn

const dictionary = async (word) => {
    const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '41ff927d98msh0b7500a7b183c75p107b24jsn49a7c8081478',
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse response as JSON
    
      console.log(result); // Log parsed result object to the console
    
      wordheading.innerHTML = "Here is the meaning of: " + result.word; // Access the properties from parsed result object
      defination.innerHTML = result.definition.replace("2","<br>2.").replace("3","<br>3.").replace("4","<br>4.");
    } catch (error) {
      console.error(error);
    }
  };
  
    searchbtn.addEventListener("click", (e)=>{
        e.preventDefault(); //From preventing not to submit i.e. not to reload to supress the default behaviour
        dictionary(searchinput.value) // But if sombody clicks it just grab the value of the search input and execute
                                     // the dictionary funcion written above.
    })
