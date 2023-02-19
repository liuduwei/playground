"use strict";

class MyButton extends HTMLButtonElement {

  constructor() {
    super();
    this.addEventListener('click', () => {
      console.log('dfe');
    });
  }

  connectedCallback() {
  }

  static get observedAttributes() {
    return ["color"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();  
  }
}
customElements.define("my-button", MyButton, {extends: 'button'});

class card extends HTMLElement {
  constructor() {
    super(); 
    this.addEventListener('click', () => {
      console.log('card');
    })
  }

  connectedCallback() {
    console.log('dfe');
    const shadowRoot = this.attachShadow({mode: 'open'});
    const tmpl = document.querySelector('#temp');
    // shadowRoot.innerHTML = `
    // <style>
    //   div {
    //     width:50px;
    //     height:50px;
    //     background-color:red;
    //   }
    // </style>
    // <div>
    //   dfe
    // </div>
    // `;
    shadowRoot.append(tmpl.content.cloneNode(true));
  }
}

customElements.define('card-movie', card);

customElements.define('drop-down', class extends HTMLElement {
  constructor() {
    super();
    this.tmpl = document.querySelector('#dropdown');
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode:'open'});
    shadowRoot.appendChild(this.tmpl.content.cloneNode(true));
    shadowRoot.querySelector('slot[name="title"]').addEventListener('click', () => {
      console.log('click');
    })
  }
})