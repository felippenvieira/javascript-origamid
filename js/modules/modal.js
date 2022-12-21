export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaofechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function clickForaModal(event) {
    if (event.target === this) toggleModal(event);
  }

  if (botaoAbrir && botaofechar && containerModal) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaofechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickForaModal);
  }
}
