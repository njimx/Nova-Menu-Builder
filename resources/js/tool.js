import { default as ToggleButton } from '@vueform/toggle';
import Tool from './pages/Tool';

Nova.booting((Vue, store) => {
    Vue.use(ToggleButton);
    Vue.component('builder-resource-tool', require('./components/BuilderResourceTool').default);

    Nova.inertia('MenuBuilder', Tool);
});
