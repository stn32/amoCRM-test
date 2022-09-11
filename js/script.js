// pop Up

function popUp() {
    let startBtn = document.querySelector('.start_btn');
    let mainPopup = document.querySelector('.popup');
    let closeBtn = document.querySelector('.popup__close_btn');

    function openMainPopup() {
        mainPopup.classList.add('active');
        startBtn.classList.add('none');
    }
    startBtn.addEventListener('click', openMainPopup);

    function closeMainPopup() {
        mainPopup.classList.remove('active');
        startBtn.classList.remove('none');
    }
    closeBtn.addEventListener('click', closeMainPopup);
}
popUp();



// phone mask

function phoneMask() {

    let input = document.querySelector('.popup__form_mask');
    let prefixNumber = (str) => {
        if (str === "7") {
            return "7 (";
        }
        if (str === "8") {
            return "8 (";
        }
        if (str === "9") {
            return "7 (9";
        }
        return "7 (";
    };

    input.addEventListener("input", (e) => {
        let value = input.value.replace(/\D+/g, "");
        let numberLength = 11;

        let result;
        if (input.value.includes("+8") || input.value[0] === "8") {
            result = "";
        } else {
            result = "+";
        }

        for (let i = 0; i < value.length && i < numberLength; i++) {
            switch (i) {
                case 0:
                    result += prefixNumber(value[i]);
                continue;
                case 4:
                    result += ") ";
                break;
                case 7:
                    result += "-";
                break;
                case 9:
                    result += "-";
                break;
                default:
                break;
            }
            result += value[i];
        }
        input.value = result;
    });
}
phoneMask();