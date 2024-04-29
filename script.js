document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();

  // Check word limit for name
  var nameWords = name.split(/\s+/).length;
  if (nameWords > 3) {
      alert('O nome deve ter no máximo 3 palavras.');
      return;
  }

  // Check if phone contains only numbers
  if (!/^\d+$/.test(phone)) {
      alert('O número de telefone deve conter apenas números.');
      return;
  }

  // Form validation passed, do something with the data (e.g., submit to server)
  // Aqui você pode enviar os dados para o servidor ou fazer qualquer outra ação necessária
  
  // Exemplo de envio para o servidor (substitua por sua lógica real)
  console.log('Nome:', name);
  console.log('E-mail:', email);
  console.log('Telefone:', phone);
  
  // Reset form
  document.getElementById('registrationForm').reset();
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Obter valores do formulário
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var item = document.getElementById('item').value;

  // Simples validação dos campos
  if (!name || !email || !phone || !item) {
      alert('Por favor, preencha todos os campos.');
      return;
  }

  // Aqui você pode fazer algo com os dados, como enviá-los para um servidor
  // Neste exemplo, apenas exibimos os dados no console
  console.log('Nome:', name);
  console.log('E-mail:', email);
  console.log('Telefone:', phone);
  console.log('Item:', item);

  // Limpar o formulário
  document.getElementById('orderForm').reset();
});


document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Obter valores do formulário
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var item = document.getElementById('item').value;

  // Simples validação dos campos
  if (!name || !email || !phone || !item) {
      alert('Por favor, preencha todos os campos.');
      return;
  }

  // Aqui você pode fazer algo com os dados, como enviá-los para um servidor
  // Neste exemplo, apenas exibimos os dados no console
  console.log('Nome:', name);
  console.log('E-mail:', email);
  console.log('Telefone:', phone);
  console.log('Item:', item);

  // Limpar o formulário
  document.getElementById('orderForm').reset();
});


// Função para inicializar o mapa
function initMap() {
  // Coordenadas do Burger King
  var burgerKingLocation = { lat: -23.5505, lng: -46.6333 };
  
  // Opções do mapa
  var mapOptions = {
      center: burgerKingLocation,
      zoom: 15
  };
  
  // Criar o mapa
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  // Adicionar marcador no Burger King
  var marker = new google.maps.Marker({
      position: burgerKingLocation,
      map: map,
      title: 'Burger King'
  });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar o envio padrão do formulário
  
  // Obter valores do formulário
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  // Simples validação dos campos
  if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
  }

  // Aqui você pode fazer algo com os dados, como enviá-los para um servidor
  // Neste exemplo, apenas exibimos os dados no console
  console.log('Nome:', name);
  console.log('E-mail:', email);
  console.log('Mensagem:', message);

  // Limpar o formulário
  document.getElementById('contactForm').reset();
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar o envio padrão do formulário
  
  // Obter valores do formulário
  var username = document.getElementById('username').value.trim();
  var password = document.getElementById('password').value.trim();

  // Simples validação dos campos
  if (!username || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
  }

  // Aqui você pode fazer algo com os dados, como autenticar o usuário
  // Neste exemplo, apenas exibimos os dados no console
  console.log('Usuário:', username);
  console.log('Senha:', password);

  // Redirecionar para a página principal após o login (substitua por sua lógica real)
  window.location.href = 'index.html';
});
