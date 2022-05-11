import ToggleButton from '@vueform/toggle';
import Tool from './pages/Tool';

Nova.booting((Vue, store) => {
    Vue.use(ToggleButton);
    Vue.component('menu-builder', require('./components/BuilderResourceTool').default);

    Nova.inertia('MenuBuilder', Tool);
});
