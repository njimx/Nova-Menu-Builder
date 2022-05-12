const axios = require('axios').default;

export default {
    getItems(menu) {
        return axios
            .post('/nova-vendor/menu-builder/items', {
                menu: menu,
            })
            .then((response) => response.data);
    },

    saveItems(menu, menuItems) {
        return axios
            .post('/nova-vendor/menu-builder/save-items', {
                menu: menu,
                items: menuItems,
            })
            .then((response) => response.data);
    },

    create(menuItem) {
        return axios
            .post('/nova-vendor/menu-builder/new-item', menuItem)
            .then((response) => response.data);
    },

    edit(menu) {
        return axios
            .get('/nova-vendor/menu-builder/edit/' + menu)
            .then((response) => response.data);
    },

    update(menuItemId, menuItem) {
        return axios
            .post('/nova-vendor/menu-builder/update/' + menuItemId, menuItem)
            .then((response) => response.data);
    },

    destroy(menuItemId) {
        return axios
            .post('/nova-vendor/menu-builder/destroy/' + menuItemId)
            .then((response) => response.data);
    },
};
