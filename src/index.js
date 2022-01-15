import { News } from './class';
// You can try this key by accessing https://content.guardianapis.com/search?api-key=70b136a5-24c0-4b52-8948-8938c58976b1 in your browser.

// For more details on how to use the open platform API, check out the documentation available at http://open-platform.theguardian.com/documentation/ https://content.guardianapis.com/search?q=react&api-key=test

const apiKey = '70b136a5-24c0-4b52-8948-8938c58976b1';
const URL_BASE = `https://content.guardianapis.com/search?q=react&api-key=${apiKey}`;
const refs = {
  form: document.querySelector('.js-form'),
  list: document.querySelector('.list'),
  prev: document.querySelector('#prev'),
  next: document.querySelector('#next'),
  inputNumber: document.querySelector('input[name="pageNumber"]'),
  pageSpan: document.querySelector('span'),
};
// console.log(refs);
const news = new News(URL_BASE, refs);

news.init();
