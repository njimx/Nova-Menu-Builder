import ToggleButton from '@vueform/toggle';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Tool from './pages/Tool';

Nova.booting((Vue, store) => {
    Vue.use(ToggleButton);
    Vue.use(VueAxios, axios);
    Vue.component('builder-resource-tool', require('./components/BuilderResourceTool').default);

    Nova.inertia('MenuBuilder', Tool);
});
