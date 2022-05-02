import ToggleButton from 'vue-js-toggle-button';
import Tool from './pages/Tool';

Nova.booting((app, store) => {
    app.use(ToggleButton);
    app.component('menu-builder', require('./components/BuilderResourceTool'));

    Nova.inertia('MenuBuilder', Tool);
});
