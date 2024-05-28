// class
class BoxShadowGenerator{

    constructor(
        horizontalInput,
        horizontalInputValue,
        verticalInput,
        verticalInputValue,
        blurInput,
        blurInputValue,
        spreadInput,
        spreadInputValue,
        colorInput,
        colorInputValue,
        opacityInput,
        opacityInputValue,
        insetInput,
        previewBox,
        ruleSpan,
        webkitRuleSpan,
        mozRuleSpan){
            this.horizontalInput = horizontalInput
            this.horizontalInputValue = horizontalInputValue
            this.verticalInput = verticalInput
            this.verticalInputValue = verticalInputValue
            this.blurInput = blurInput
            this.blurInputValue = blurInputValue
            this.spreadInput = spreadInput
            this.spreadInputValue = spreadInputValue
            this.colorInput = colorInput
            this.colorInputValue = colorInputValue
            this.opacityInput =opacityInput
            this.opacityInputValue = opacityInputValue
            this.insetInput = insetInput
            this.insetInputValue = insetInput.checked
            this.previewBox = previewBox
            this.ruleSpan = ruleSpan
            this.webkitRuleSpan = webkitRuleSpan
            this.mozRuleSpan = mozRuleSpan
    }

    initialize() {

        this.horizontalInputValue.value = this.horizontalInput.value;
        this.verticalInputValue.value = this.verticalInput.value;
        this.blurInputValue.value = this.blurInput.value;
        this.spreadInputValue.value = this.spreadInput.value;
        this.colorInputValue.value = this.colorInput.value;
        this.opacityInputValue.value = this.opacityInput.value;

        this.applyRule();
        this.showRule();
        
    }

    applyRule(){
        const rgbValue = this.hexToRgb(this.colorInputValue.value);

        const shadowRule = `${this.insetInputValue ? "inset" : "" } ${this.horizontalInputValue.value}px ${this.verticalInputValue.value}px ${this.blurInputValue.value}px ${this.spreadInputValue.value}px rgba(${rgbValue},${this.opacityInputValue.value})`

        this.previewBox.style.boxShadow = shadowRule;
        this.currentRule = this.previewBox.style.boxShadow;
    }

    showRule(){
        this.ruleSpan.innerHTML = this.currentRule;
        this.webkitRuleSpan.innerHTML = this.currentRule;
        this.mozRuleSpan.innerHTML = this.currentRule;
    }

    updateValue(type, value){
        
        switch (type) {
            case "horizontalInput":
                this.horizontalInputValue.value = value;
                break;
            case "verticalInput" :
                this.verticalInputValue.value = value;
                break;
            case "blurInput" :
                this.blurInputValue.value = value;
                break;
            case "spreadInput":
                this.spreadInputValue.value = value;
                break;
            case "colorInput":
                this.colorInputValue.value = value;
                break;
            case "opacityInput":
                this.opacityInputValue.value = value;
                break;
            case "insetInput":
                this.insetInputValue = value;
                break;
            default:
                break;
        }

        this.applyRule();
        this.showRule();
    }

    hexToRgb(hex){
        return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, ${
            ("0x" + hex[5] + hex[6]) | 0
          }`;
    }
}

// Seleção de elementos
const horizontalInput = document.querySelector("#horizontal");
const horizontalInputValue = document.querySelector("#horizontal-value");

const verticalInput = document.querySelector("#vertical");
const verticalInputValue = document.querySelector("#vertical-value");

const blurInput = document.querySelector("#blur");
const blurInputValue = document.querySelector("#blur-value");

const spreadInput = document.querySelector("#spread"); 
const spreadInputValue = document.querySelector("#spread-value"); 

const colorInput = document.querySelector("#color");
const colorInputValue = document.querySelector("#color-value");

const opacityInput =document.querySelector("#opacity");
const opacityInputValue =document.querySelector("#opacity-value");

const insetInput =document.querySelector("#inset");


const previewBox = document.querySelector("#box");

const ruleSpan = document.querySelector("#rule span");
const webkitRuleSpan = document.querySelector("#webkit-rule span");
const mozRuleSpan = document.querySelector("#moz-rule span");

const boxShadow = new BoxShadowGenerator(
    horizontalInput,
    horizontalInputValue,
    verticalInput,
    verticalInputValue,
    blurInput,
    blurInputValue,
    spreadInput,
    spreadInputValue,
    colorInput,
    colorInputValue,
    opacityInput,
    opacityInputValue,
    insetInput,
    previewBox,
    ruleSpan,
    webkitRuleSpan,
    mozRuleSpan
);

 boxShadow.initialize();

// Eventos
horizontalInput.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("horizontalInput",value)
});

verticalInput.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("verticalInput",value)
});

blurInput.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("blurInput",value)
});

spreadInput.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("spreadInput",value)
});

colorInput.addEventListener("input", (e) => {
    const value = e.target.value;

  boxShadow.updateValue("colorInput",value)
})

opacityInput.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("opacityInput",value)
});

insetInput.addEventListener("input", (e) => {
  const value = e.target.checked;

  boxShadow.updateValue("insetInput",value)
});


// Copiar regra
const rulesArea = document.querySelector("#rules-area");
const copyInstructions = document.querySelector("#copy-instruction");

rulesArea.addEventListener("click", (e) =>{
   
    const rules =rulesArea.innerText.replace(/^\s*\n/gm, "");

    navigator.clipboard.writeText(rules).then(() =>{

        copyInstructions.innerHTML ="Regras copiadas com sucesso!"

        setTimeout(() => {
            copyInstructions.innerHTML = "Clique no quadra acima para copiar as regras"
        }, 1500);
    })
})
