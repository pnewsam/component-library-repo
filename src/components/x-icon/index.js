import { LitElement, html } from 'lit-element';

class XIcon extends LitElement {
  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-airplay"
      >
        <path
          d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
        ></path>
        <polygon points="12 15 17 21 7 21 12 15"></polygon>
      </svg>
    `;
  }
}

customElements.define('x-icon', XIcon);
