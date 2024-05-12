import { Card, Deck } from "../src";

describe("Deck", () => {
  test("Standard Deck has 52 cards", () => {
    const deck = new Deck();
    expect(deck.getCards().length).toBe(52);
  });

  test("Standard Deck is unshuffled", () => {
    const deck = new Deck();
    expect(String(deck.getCards()).replace(/,/g, "")).toBe(
      "♠A♠2♠3♠4♠5♠6♠7♠8♠9♠10♠J♠Q♠K♥A♥2♥3♥4♥5♥6♥7♥8♥9♥10♥J♥Q♥K♦A♦2♦3♦4♦5♦6♦7♦8♦9♦10♦J♦Q♦K♣A♣2♣3♣4♣5♣6♣7♣8♣9♣10♣J♣Q♣K"
    );
  });

  test("1 Card should be drawn from bottom", () => {
    const deck = new Deck();
    const hand = deck.drawCards();

    expect(hand.length).toBe(1);
    expect(String(hand[0])).toBe("♣K");
  });

  test("2 Cards should be drawn from bottom", () => {
    const deck = new Deck();
    const hand = deck.drawCards(2);

    expect(hand.length).toBe(2);
    expect(String(hand[0])).toBe("♣K");
    expect(String(hand[1])).toBe("♣Q");
  });

  test("Should be able to shuffle", () => {
    const deck = new Deck();
    deck.shuffle();

    expect(deck.getCards().length).toBe(52);
    expect(String(deck.getCards()).replace(/,/g, "")).not.toBe(
      "♠A♠2♠3♠4♠5♠6♠7♠8♠9♠10♠J♠Q♠K♥A♥2♥3♥4♥5♥6♥7♥8♥9♥10♥J♥Q♥K♦A♦2♦3♦4♦5♦6♦7♦8♦9♦10♦J♦Q♦K♣A♣2♣3♣4♣5♣6♣7♣8♣9♣10♣J♣Q♣K"
    );
  });

  test("Should be able to add a card back to the deck without changing the order", () => {
    const deck = new Deck();
    const cards = deck.drawCards();

    deck.addCards(cards);

    expect(deck.getCards().length).toBe(52);
    expect(String(deck.getCards()).replace(/,/g, "")).toBe(
      "♠A♠2♠3♠4♠5♠6♠7♠8♠9♠10♠J♠Q♠K♥A♥2♥3♥4♥5♥6♥7♥8♥9♥10♥J♥Q♥K♦A♦2♦3♦4♦5♦6♦7♦8♦9♦10♦J♦Q♦K♣A♣2♣3♣4♣5♣6♣7♣8♣9♣10♣J♣Q♣K"
    );
  });

  test("Should be able to add multiple cards back to the deck in reverse order", () => {
    const deck = new Deck();
    const cards = deck.drawCards(5);

    deck.addCards(cards);

    expect(deck.getCards().length).toBe(52);
    expect(String(deck.getCards()).replace(/,/g, "")).toBe(
      "♠A♠2♠3♠4♠5♠6♠7♠8♠9♠10♠J♠Q♠K♥A♥2♥3♥4♥5♥6♥7♥8♥9♥10♥J♥Q♥K♦A♦2♦3♦4♦5♦6♦7♦8♦9♦10♦J♦Q♦K♣A♣2♣3♣4♣5♣6♣7♣8♣K♣Q♣J♣10♣9"
    );
  });

  test("adding cards without drawing should raise the card count", () => {
    const deck = new Deck();
    deck.addCards([new Card({ value: "5", suit: "♥" })]);

    expect(deck.getCards().length).toBe(53);
    expect(String(deck.getCards()).replace(/,/g, "")).toBe(
      "♠A♠2♠3♠4♠5♠6♠7♠8♠9♠10♠J♠Q♠K♥A♥2♥3♥4♥5♥6♥7♥8♥9♥10♥J♥Q♥K♦A♦2♦3♦4♦5♦6♦7♦8♦9♦10♦J♦Q♦K♣A♣2♣3♣4♣5♣6♣7♣8♣9♣10♣J♣Q♣K♥5"
    );
  });

  test("adding cards is not possible when allowAddingCards is set to false", () => {
    const deck = new Deck({ allowAddingCards: false });

    expect(() => deck.addCards([new Card({ value: "5", suit: "♥" })])).toThrow(
      Error
    );
    expect(deck.getCards().length).toBe(52);
    expect(String(deck.getCards()).replace(/,/g, "")).toBe(
      "♠A♠2♠3♠4♠5♠6♠7♠8♠9♠10♠J♠Q♠K♥A♥2♥3♥4♥5♥6♥7♥8♥9♥10♥J♥Q♥K♦A♦2♦3♦4♦5♦6♦7♦8♦9♦10♦J♦Q♦K♣A♣2♣3♣4♣5♣6♣7♣8♣9♣10♣J♣Q♣K"
    );
  });

  test("cards cannot be manipulated with side-effects", () => {
    const deck = new Deck();
    const card = deck.getCards()[0];
    (card["value"] as any) = "4";

    expect(deck.getCards().length).toBe(52);
    expect(String(deck.getCards()).replace(/,/g, "")).toBe(
      "♠A♠2♠3♠4♠5♠6♠7♠8♠9♠10♠J♠Q♠K♥A♥2♥3♥4♥5♥6♥7♥8♥9♥10♥J♥Q♥K♦A♦2♦3♦4♦5♦6♦7♦8♦9♦10♦J♦Q♦K♣A♣2♣3♣4♣5♣6♣7♣8♣9♣10♣J♣Q♣K"
    );
  });

  test("decks cannot be manipulated with side-effects", () => {
    const deck = new Deck();
    deck.getCards()[0] = deck.getCards()[1];

    expect(deck.getCards().length).toBe(52);
    expect(String(deck.getCards()).replace(/,/g, "")).toBe(
      "♠A♠2♠3♠4♠5♠6♠7♠8♠9♠10♠J♠Q♠K♥A♥2♥3♥4♥5♥6♥7♥8♥9♥10♥J♥Q♥K♦A♦2♦3♦4♦5♦6♦7♦8♦9♦10♦J♦Q♦K♣A♣2♣3♣4♣5♣6♣7♣8♣9♣10♣J♣Q♣K"
    );
  });

  test("all cards of a deck can be initialized face down", () => {
    const deck = new Deck({ initialCardFacing: "down" });

    expect(deck.getCards().length).toBe(52);
    expect(deck.getCards()[0].getCardAsUnicode()).toBe("🂠");
  });
});
