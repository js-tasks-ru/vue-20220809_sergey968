import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const App = defineComponent({
    // Имя позволяет программно получать имя компонента.
    // Используется в devtools,
    name: 'App',

    data() {
        return {
            leftOperand: 0,
            rightOperand: 0,
            operator:"sum"
        };
    },

    computed: {
        calculationResult(){
            switch(this.operator){
                case "sum":
                    return this.leftOperand + this.rightOperand;
                case "subtract":
                    return this.leftOperand - this.rightOperand;
                case "multiply":
                    return this.leftOperand * this.rightOperand;
                case "divide":
                    return this.leftOperand / this.rightOperand;                    
            }
            return undefined;
        }
    }
});

// Создаём новое приложение по корневому компоненту
const app = createApp(App);

const vm = app.mount('#app');

window.vm = vm;