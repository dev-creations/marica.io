import type { Deck } from "./deck";

export class Card {
  public readonly value: Deck["values"][number];
  public readonly suit: Deck["suits"][number];
  private facing: "up" | "down" = "up";

  constructor({
    value,
    suit,
    facing = "up",
  }: {
    value: Deck["values"][number];
    suit: Deck["suits"][number];
    facing?: Card["facing"];
  }) {
    this.value = value;
    this.suit = suit;
    this.facing = facing;
  }

  toString() {
    return this.suit + this.value;
  }

  public setCardFacing(face: Card["facing"]) {
    this.facing = face;
  }

  public getCardAsUnicode() {
    if (this.facing === "down") {
      return String.fromCodePoint(0x1f0a0);
    }

    const suitMapper = {
      "♠": "A",
      "♥": "B",
      "♦": "C",
      "♣": "D",
    };

    const valueMapper = {
      10: "A",
      A: "1",
      J: "B",
      Q: "D",
      K: "E",
    };

    return String.fromCodePoint(
      Number(
        `0x1f0${suitMapper[this.suit]}${valueMapper[this.value] || this.value}`
      )
    );
  }
}
