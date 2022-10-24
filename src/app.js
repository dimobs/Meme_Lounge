import { page, render } from './lib.js'
import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { detailsPage } from './views/details.js';
import { profilePage } from './views/profile.js';
import { logout } from './api/api.js';
import { getUserData } from './util.js';
import { greet } from './api/greetings.js';

const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContex);
page('/', homePage);
page('/memes', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);
page('/profile', profilePage);

updateUserNav()
page.start();

function decorateContex(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next()
}

function onLogout(ctx) {
    logout();
    updateUserNav();
  page.redirect('/login')
}

function updateUserNav() {
    const userData = getUserData();
    const time = greet();

    if (userData) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user span').textContent = `Welcome, ${time},  ${userData.email}`;
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
        document.querySelector('.user span').textContent = `Welcome, ${time}, Anonymous`;
    }

}

