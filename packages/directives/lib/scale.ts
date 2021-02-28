// 双击放大指令
const scale = {
    mounted(el: HTMLElement) {
        const maxScale = 2; // 最大放大尺寸
        let curScaleRadio = 1;
        el.addEventListener('dblclick', handleDbClick);
        function handleDbClick(ev) {
            const centerX = ev.clientX - el.offsetLeft;
            const centerY = ev.clientY - el.offsetTop;

            if (curScaleRadio <= maxScale) {
                curScaleRadio += 0.5;
            } else {
                curScaleRadio = 1;
            }

            el.style.transformOrigin = `${centerX}px ${centerY}px`;
            el.style.transition = 'transform .2s ease';
            el.style.transform = `scale(${curScaleRadio})`;

        }
    }
}

export default scale