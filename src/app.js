import { page, render } from './lib.js'
import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';

/*debug*/
import * as api from './api/data.js';
window.api = api; 

const root = document.querySelector('main');

page(decorateContex);
page('/', homePage);
page('/memes', catalogPage);

page.start();

function decorateContex(ctx, next) {
ctx.render = (content) => render(content, root)
    
    next()
}
