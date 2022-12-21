import initTabNav from "./modules/initTabNav.js";
import Accordion from "./modules/accordion.js";
import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/initAnimacaoScroll.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/menuDropDown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="list"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-accordiond='accordion'] dt");
accordion.init();

initTabNav();
initAnimacaoScroll();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
