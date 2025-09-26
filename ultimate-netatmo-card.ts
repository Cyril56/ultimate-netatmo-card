
import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';

export interface CardConfig {
  entity: string;
  name?: string;
  custom_attributes?: {
    window_open?: string;
    night_mode?: string;
    summer_mode?: string;
  };
}

class UltimateNetatmoCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: CardConfig;

  public setConfig(config: CardConfig): void {
    if (!config.entity) {
      throw new Error('L\'entité climate est requise.');
    }
    this.config = config;
  }

  public getCardSize(): number {
    return 3;
  }

  protected render(): TemplateResult {
    if (!this.hass || !this.config) {
      return html``;
    }

    const stateObj = this.hass.states[this.config.entity];
    if (!stateObj) {
      return html`<ha-card>Entité introuvable : ${this.config.entity}</ha-card>`;
    }

    const windowOpen = this.config.custom_attributes?.window_open
      ? stateObj.attributes[this.config.custom_attributes.window_open]
      : undefined;

    const nightMode = this.config.custom_attributes?.night_mode
      ? stateObj.attributes[this.config.custom_attributes.night_mode]
      : undefined;

    const summerMode = this.config.custom_attributes?.summer_mode
      ? stateObj.attributes[this.config.custom_attributes.summer_mode]
      : undefined;

    return html`
      <ha-card header="${this.config.name || stateObj.attributes.friendly_name}">
        <div class="card-content">
          <div class="temperature">
            <span class="label">Température actuelle :</span>
            <span class="value">${stateObj.attributes.current_temperature}°C</span>
          </div>
          <div class="temperature">
            <span class="label">Consigne :</span>
            <span class="value">${stateObj.attributes.temperature}°C</span>
          </div>
          ${windowOpen !== undefined
            ? html`<div class="status">Fenêtre ouverte : ${windowOpen ? 'Oui' : 'Non'}</div>`
            : ''}
          ${nightMode !== undefined
            ? html`<div class="status">Mode nuit : ${nightMode ? 'Activé' : 'Désactivé'}</div>`
            : ''}
          ${summerMode !== undefined
            ? html`<div class="status">Mode été : ${summerMode ? 'Activé' : 'Désactivé'}</div>`
            : ''}
        </div>
      </ha-card>
    `;
  }

  static styles = css`
    ha-card {
      padding: 16px;
    }
    .card-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .temperature {
      display: flex;
      justify-content: space-between;
      font-size: 1.1em;
    }
    .label {
      font-weight: bold;
    }
    .status {
      font-size: 0.95em;
      color: var(--secondary-text-color);
    }
  `;
}

customElements.define('ultimate-netatmo-card', UltimateNetatmoCard);
