export default {
    getItems(menu) {
        return this.axios
            .post('/nova-vendor/menu-builder/items', {
                menu: menu,
            })
            .then((response) => response.data);
    },

    saveItems(menu, menuItems) {
        return this.axios
            .post('/nova-vendor/menu-builder/save-items', {
                menu: menu,
                items: menuItems,
            })
            .then((response) => response.data);
    },

    create(menuItem) {
        return this.axios
            .post('/nova-vendor/menu-builder/new-item', menuItem)
            .then((response) => response.data);
    },

    edit(menu) {
        return this.axios
            .get('/nova-vendor/menu-builder/edit/' + menu)
            .then((response) => response.data);
    },

    update(menuItemId, menuItem) {
        return this.axios
            .post('/nova-vendor/menu-builder/update/' + menuItemId, menuItem)
            .then((response) => response.data);
    },

    destroy(menuItemId) {
        return this.axios
            .post('/nova-vendor/menu-builder/destroy/' + menuItemId)
            .then((response) => response.data);
    },
};
