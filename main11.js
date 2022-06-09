let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            // Here we added break after end of case C because it was leaving C
            // we stopped its execution after printing'' so it left default case
            case 'C':
                display.innerText = '';
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1);
                break;
            // here eval is used to evaluate mathematical operations
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                    break;
                }
                catch {
                    display.innerText = 'Error!';
                    break;
                }
                case'sin(Rad)':
                {
                var x = display.innerText;
                display.innerText = Math.sin(x);
                break;
                }
                case'cos(Rad)':
                {
                var x = display.innerText;
                display.innerText = Math.cos(x);
                break;
                }
                case'tan(Rad)':
                {
                var x = display.innerText;
                display.innerText = Math.tan(x);
                break;
                }
                case'sec(Rad)':
                {
                var x = display.innerText;
                display.innerText = 1/Math.cos(x);
                break;
                }
                case'cosec(Rad)':
                {
                var x = display.innerText;
                display.innerText = 1/Math.sin(x);
                break;
                }
                case'sin(-1)(rad)':
                {
                var x = display.innerText;
                display.innerText = Math.asin(x);
                break;
                }
                case'cos(-1)(rad)':
                {
                var x = display.innerText;
                display.innerText = Math.acos(x);
                break;
                }
                case'tan(-1)(rad)':
                {
                var x = display.innerText;
                display.innerText = Math.atan(x)
                break;
                }
                case'cot(Rad)':
                {
                var x = display.innerText;
                x = x * Math.PI / 180;
                display.innerText = 1/Math.tan(x);
                break;
                }
                case'log':
                {
                    var x = display.innerText;
                display.innerText = Math.log(x)/Math.log(10);
                break;
                }
                case'√':
                {
                    var x = display.innerText;
                display.innerText = Math.sqrt(x);
                break;
                }
                
            default:
                display.innerText += e.target.innerText;
        }
    });
});