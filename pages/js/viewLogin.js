// Função 
function fetchJSON(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
    });
}


fetchJSON('../settings/config.json')
  .then(data => {
    const body = document.querySelector("body");
    const name = document.querySelector(".LogoName");
    const fundo = document.querySelector(".fundo");
    const logo = document.querySelector(".logo");
    body.style.backgroundSize = "100% 100%";
    body.style.backgroundImage = `url('${data.Background}')`;
    logo.style.height = data.Logo.TanY;
    logo.style.width = data.Logo.TanX;
    fundo.style.height = data.Logo.Fundo.TanY;
    fundo.style.width = data.Logo.Fundo.TanX;
    logo.style.backgroundImage = `url('${data.Logo.Img}')`;
    name.innerHTML  = data.Logo.NameLogo || "MTplus";
  });

// Requisição para verificar dados
fetchJSON('http://138.118.175.42:5550/check/Fabricio')
  .then(data => {
    console.log(data.username);
  });
