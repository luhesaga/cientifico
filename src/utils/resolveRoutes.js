const resolveRoutes = (route) => {
    console.log(route);
    if (route === '/') {
        return route;
    } else if (route.length <= 3) {
        return '/:id';
    } else if (route.includes('page')) {
        return '/:pages';
    }

    return `/${route}`;
};

export default resolveRoutes;