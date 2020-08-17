import Header from '../templates/Header';
import Footer from '../templates/Footer';
import home from '../pages/home';
import character from '../pages/character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': home,
    '/:id': character,
    '/contact': 'Contact',
    '/:pages': home,
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;

    header.innerHTML = await Header();
    content.innerHTML = await render();
    footer.innerHTML = await Footer();
};

export default router;