export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tabmenu='tabMenu'] li");
  const tabContent = document.querySelectorAll(
    "[data-tab-content='tabContent'] section"
  );

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo", tabContent[index].dataset.anime);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
