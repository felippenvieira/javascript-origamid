import TabNav from "./modules/tabnav.js";
import Accordion from "./modules/accordion.js";
import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/scroll-anima.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropDownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="list"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-accordiond="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  "[data-tabmenu='tabMenu'] li",
  "[data-tab-content='tabContent'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima("[data-scroll]");
scrollAnima.init();

const dropdownMenu = new DropDownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

fetchAnimais("../../animaisAPI.json", ".numeros-grid");
fetchBitcoin(".btc-preco", "https://blockchain.info/ticker");

initFuncionamento();
