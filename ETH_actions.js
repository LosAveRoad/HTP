var mousx = nevent.clientX;
console.log(mousx);
class inv {
    constructor() {
        this.lastTimestamp = 0;
    }
    /* python�е�init*/

    printTimestamp() {
        /*����һ��method this�൱��self*/
        for (let i = 1; i <= 10000; i++) {
            const currentTimestamp = Date.now();
            if (currentTimestamp - this.lastTimestamp >= 6000) {
                console.log(currentTimestamp);
                this.lastTimestamp = currentTimestamp;
            }
            setTimeout(() => {
                this.printTimestamp();
            }, 1000);
        }
    }
}

const invObj1 = new inv();
/* ��ʼ�� */
invObj1.printTimestamp();

class MouseFunction {
    constructor(elementType) {
        this.ET = elementType;
    }
    highlight() {
        const pElements = document.querySelectorAll(this.ET);
        pElements.forEach(pElement => {
            const x = window.event.clientX;
            const y = window.event.clientY;
            const pElementRect = pElement.getBoundingClientRect();
            const pElementWidth = pElementRect.width;
            const pElementHeight = pElementRect.height;
            if (x >= pElementRect.left && x <= pElementRect.right && y >= pElementRect.top && y <= pElementRect.bottom) {
                pElement.classList.add("highlight");
            }
            else {
                pElement.classList.remove("highlight");
            }
        });
    }
}

phighlight = new MouseFunction('p');
phighlight.highlight();


