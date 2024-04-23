import { Card } from "./card";

export type DeckOptions = Partial<{
  allowAddingCards: boolean;
  initialCardFacing: Card["facing"];
}>;

export class Deck {
  private readonly values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ] as const;
  private readonly suits = ["♠", "♥", "♦", "♣"] as const;
  private cards: Card[] = [];
  private allowAddingCards = true;
  private initialCardFacing: Card["facing"] = "up";

  constructor(props: DeckOptions = {}) {
    const deckOfCards: Card[] = [];

    if ("allowAddingCards" in props) {
      this.allowAddingCards = props.allowAddingCards as boolean;
    }

    if ("initialCardFacing" in props) {
      this.initialCardFacing = props.initialCardFacing as Card["facing"];
    }

    for (let i = 0; i < this.suits.length; i++) {
      deckOfCards.push(
        ...this.values.map(
          (v) =>
            new Card({
              value: v,
              suit: this.suits[i],
              facing: this.initialCardFacing,
            })
        )
      );
    }

    this.cards = deckOfCards;
    return this;
  }

  public getCards() {
    return this.cards.map((c) => new Card({ ...c }));
  }

  public drawCards(n = 1) {
    const drawnCards: Card[] = [];

    for (let i = 0; i < n; i++) {
      const c = this.cards.pop();
      if (c) {
        drawnCards.push(c);
      }
    }

    return drawnCards;
  }

  public addCards(cards: Card[]) {
    if (!this.allowAddingCards) {
      throw new Error("Adding cards to this deck is not allowed");
    }

    this.cards.push(...cards);
  }

  public shuffle() {
    let currentIndex = this.cards.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[currentIndex],
      ];
    }

    return this;
  }
}
