document.getElementById("resultContainer").style.display='none';
function handleSubmit(event){
    event.preventDefault();
    let question = document.getElementById("query").value;
    let result = document.getElementById("result");
    result.innerHTML = '<img src="../img/loading.gif" />';
    document.getElementById("resultContainer").style.display='block';
    const options = {
        method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '9fdd93225bmshce1d588bde9d2a1p110157jsn0c255acff796',
                'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
            },
        body: '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"'+question+'"}]}'
    };

    fetch('https://openai80.p.rapidapi.com/chat/completions', options)
    .then(response => response.json())
    .then(response => result.innerText = response.choices[0].message.content)
    .catch(err => console.error(err));
      
}

