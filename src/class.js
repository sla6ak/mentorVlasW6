// id: "us-news/2021/oct/18/colin-powell-iraq-reaction-death", type: "article", sectionId: "us-news",
// apiUrl: "https://content.guardianapis.com/us-news/2021/oct/18/colin-powell-iraq-reaction-death"
// id: "us-news/2021/oct/18/colin-powell-iraq-reaction-death"
// isHosted: false
// pillarId: "pillar/news"
// pillarName: "News"
// sectionId: "us-news"
// sectionName: "US news"
// type: "article"
// webPublicationDate: "2021-10-18T19:36:40Z"
// webTitle: "‘The court of God will be waiting for him’: Iraqis react to Colin Powell’s death"
// webUrl: "https://www.theguardian.com/us-news/2021/oct/18/colin-powell-iraq-reaction-death"

export class News {
  constructor(URL_BASE, refs) {
    this.url = URL_BASE;
    this.refs = refs;
    this.pagesCounter = 1;
    this.query = '';
  }

  fetchNews = async () => {
    const urlLom = this.url + `&page=${this.pagesCounter}&q=${this.query}`;
    const respons = await fetch(urlLom);
    const data = await respons.json();
    if (respons.status === 200) {
      this.renderNews(data.response.results);
    }
    return respons;
  };
  clearPages() {
    this.refs.list.innerHTML = '';
  }
  incrementPages() {
    this.pagesCounter += 1;
  }
  decrementPages() {
    this.pagesCounter -= 1;
  }
  onPrevButton = () => {
    this.decrementPages();
    this.fetchNews();
  };
  onNextButton = () => {
    this.incrementPages();
    this.fetchNews();
  };

  renderNews = newsArr => {
    this.clearPages();
    let newsArrLi = newsArr.map(({ webUrl, webTitle, webPublicationDate }) => {
      return `<li>
        <a href="${webUrl}">${webTitle}</a>
        <p>${webPublicationDate}</p>
      </li>`;
    });
    console.log(this.refs.list);
    this.refs.list.insertAdjacentHTML('beforeend', newsArrLi.join(''));
    console.log(newsArr);
  };
  onInputPages = event => {
    this.pagesCounter = event.target.value;
    this.fetchNews();
  };
  onSendSubmit = event => {
    event.preventDefault();
    this.query = event.target.elements.search.value;
    this.clearPages();
    this.fetchNews();
  };

  addListeners = () => {
    window.addEventListener('load', this.fetchNews);
    this.refs.prev.addEventListener('click', this.onPrevButton);
    this.refs.next.addEventListener('click', this.onNextButton);
    this.refs.inputNumber.addEventListener('input', this.onInputPages);
    this.refs.form.addEventListener('submit', this.onSendSubmit);
  };

  init = () => {
    this.addListeners();
  };
}
