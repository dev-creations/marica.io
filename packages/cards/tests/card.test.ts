import { Card } from "../src";

describe("Card", () => {
  test("Card can be stringified", () => {
    const card = new Card({ value: "2", suit: "♠" });
    expect(String(card)).toBe("♠2");
  });

  test("Initialize Card face down", () => {
    const card = new Card({ value: "2", suit: "♠", facing: "down" });
    expect(card.getCardAsUnicode()).toBe("🂠");
  });

  test("Card can be flipped", () => {
    const card = new Card({ value: "2", suit: "♠", facing: "down" });
    expect(card.getCardAsUnicode()).toBe("🂠");
    card.setCardFacing("up");
    expect(card.getCardAsUnicode()).toBe("🂢");
  });

  test("getCardAsUnicode ♠2", () => {
    const card = new Card({ value: "2", suit: "♠" });
    expect(card.getCardAsUnicode()).toBe("🂢");
  });

  test("getCardAsUnicode ♠K", () => {
    const card = new Card({ value: "K", suit: "♠" });
    expect(card.getCardAsUnicode()).toBe("🂮");
  });

  test("getCardAsUnicode ♠10", () => {
    const card = new Card({ value: "10", suit: "♠" });
    expect(card.getCardAsUnicode()).toBe("🂪");
  });

  test("getCardAsUnicode ♠J", () => {
    const card = new Card({ value: "J", suit: "♠" });
    expect(card.getCardAsUnicode()).toBe("🂫");
  });
});
