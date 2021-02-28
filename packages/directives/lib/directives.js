import draggable from './draggable';
import scale from './scale';

const directives = {
    draggable,
    scale
}

// 注册指令
const install = (app) => {
    for (const item in directives) {
        app.directive(item, directives[item])
    }
}

export default install