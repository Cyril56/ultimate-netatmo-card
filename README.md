# Ultimate Netatmo Card

Une carte Lovelace personnalisée pour Home Assistant et Netatmo, inspirée de `better-thermostat-ui-card`, mais entièrement configurable et compatible avec toutes les entités `climate`.

## Installation

1. Copier le fichier `ultimate-netatmo-card.js` dans `www/custom_cards/`
2. Ajouter la ressource dans `configuration.yaml` ou via l’interface graphique

## Exemple de configuration

```yaml
type: custom:ultimate-netatmo-card
entity: climate.salon
name: Thermostat Salon
custom_attributes:
  window_open: fenetre_ouverte
  night_mode: mode_nuit
