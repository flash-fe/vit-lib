// 拖拽指令
import './draggable.css';

const draggable = {
    mounted(el) {
        let startX = 0, startY = 0;
        // 绑定点击拖拽事件
        el.classList.add('draggable');

        el.addEventListener('mousedown', handleMouseDown);

        function handleMouseDown(ev) {
            startX = ev.clientX - el.offsetLeft;
            startY = ev.clientY - el.offsetTop;
            el.style.position = 'absolute';
            el.style.left = `${el.offsetLeft}px`;
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }
        
        function handleMouseMove(ev) {
            const moveX = ev.clientX - startX;
            const moveY = ev.clientY - startY;
            el.style.left = `${moveX}px`;
            el.style.top = `${moveY}px`;
        }

        function handleMouseUp(ev) {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    }
}

export default draggable