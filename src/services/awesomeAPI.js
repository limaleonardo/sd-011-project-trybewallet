async function awesomeAPI() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');

  return (response.ok
    ? response.json()
    : new Error(`Requisição falhou com erro: ${response.status} - ${response.text}`));
}

export default awesomeAPI;
