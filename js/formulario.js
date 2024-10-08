const formulario = document.querySelector('form');

function formularioEnviado(resposta) {
	if (resposta.ok) {
		formulario.innerHTML =
			"<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7'><span style='color: #317a00;'>Mensagem enviada!</span><br>Em breve retornaremos o contato. Geralmente respondemos em 24 horas</p>";
	} else {
		formulario.innerHTML =
			"<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7'><span style='color: #e00000;'>Erro no envio da mensagem!</span><br>Você pode enviar diretamente para o nosso email: <b>contato@bikcraft.net</b></p>";
	}
}

function enviarFormulario(event) {
	event.preventDefault();

	const botao = document.querySelector('form button');
	botao.disabled = true;
	botao.innerText = 'Enviando...';

	const data = new FormData(formulario);

	fetch('./enviar.php', {
		method: 'POST',
		body: data,
	}).then(formularioEnviado);
}

formulario.addEventListener('submit', enviarFormulario);
