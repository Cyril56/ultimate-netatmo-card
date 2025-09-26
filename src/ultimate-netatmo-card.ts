import { LitElement, html, css, TemplateResult, CSSResultGroup } from "lit";

export class UltimateNetatmoCard extends LitElement {
  static properties = {
    hass: { type: Object },
    config: { type: Object }
  };

  hass!: any;
  config!: any;

  static styles: CSSResultGroup = css`
    :host {
      display: block;
      padding: 16px;
    }
    .title {
      font-weight: bold;
      margin-bottom: 8px;
    }
  `;

  setConfig(config: any): void {
    if (!config.entity) {
      throw new Error("You need to define an entity");
    }
    this.config = config;
  }

  render(): TemplateResult {
    if (!this.hass || !this.config) {
      return html`<ha-card><div>Loading...</div></ha-card>`;
    }

    const state = this.hass.states[this.config.entity];
    if (!state) {
      return html`<ha-card><div>Entity not found: ${this.config.entity}</div></ha-card>`;
    }

    return html`
      <ha-card>
        <div class="title">Ultimate Netatmo Card</div>
        <div>Entity: ${this.config.entity}</div>
        <div>State: ${state.state}</div>
      </ha-card>
    `;
  }
}

customElements.define("ultimate-netatmo-card", UltimateNetatmoCard);
