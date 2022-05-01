import ToggleButton from 'vue-js-toggle-button';

Nova.booting((app, store) => {
    app.use(ToggleButton);
    app.component('menu-builder', require('./components/BuilderResourceTool'));

    Nova.inertia('MenuBuilder', Tool);
});
