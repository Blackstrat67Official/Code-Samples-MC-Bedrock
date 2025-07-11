import { EntityComponentTypes } from "@minecraft/server";

export class PlayerUtils {
  /**
   * Imposta la salute massima di un giocatore.
   * @param {Player} player — l'oggetto Player su cui operare.
   * @param {number} maxHealth — il valore intero della salute massima da assegnare.
   */
  static setMaxHealth(player, maxHealth) {
    if (!player.isValid()) {
      console.warn("Player non valido: impossibile impostare la salute");
      return;
    }
    const healthComp = player.getComponent(EntityComponentTypes.Health);
    if (!healthComp) {
      console.warn("Componente salute non trovato sul giocatore");
      return;
    }
    healthComp.max = maxHealth;
    healthComp.currentValue = maxHealth;
  }
}
