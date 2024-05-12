"use client";
import { Card, Deck } from "@marica.io/cards";
import { useState } from "react";

const handValueMapper = {
  J: 10,
  Q: 10,
  K: 10,
  A: 1,
} as const;

const rules = (currentHand: Card[]) => {
  const currentValue = currentHand.reduce(
    (prev, cur) =>
      prev +
      Number(
        handValueMapper[cur.value as keyof typeof handValueMapper] || cur.value
      ),
    0
  );

  return currentValue;
};

export default function BlackJackPage() {
  const deck = new Deck({
    allowAddingCards: false,
    initialCardFacing: "down",
  }).shuffle();
  const [cards, setCards] = useState(deck.getCards());
  const [hand, setHand] = useState<Card[]>([]);

  const currentValue = rules(hand);

  return (
    <>
      <div className="relative w-32">
        {cards.map((c) => {
          return (
            <button
              type="button"
              className="absolute left-0 top-0 cursor-pointer bg-white text-9xl disabled:text-gray-300"
              key={c.value + c.suit}
              disabled={currentValue >= 21}
              onClick={() => {
                const drawCards = deck.drawCards();

                setHand((old) => {
                  return [
                    ...old,
                    ...drawCards.map((dc) => {
                      dc.setCardFacing("up");
                      return dc;
                    }),
                  ];
                });
                setCards(deck.getCards());
              }}
            >
              {c.getCardAsUnicode()}
            </button>
          );
        })}
      </div>

      <div className="flex pt-44">
        {hand.map((c) => {
          return (
            <div
              className="cursor-pointer bg-white text-9xl"
              key={"hand-" + c.value + c.suit}
            >
              {c.getCardAsUnicode()}
            </div>
          );
        })}
      </div>

      {currentValue > 21
        ? "Game Over"
        : currentValue === 21
          ? "Game Won"
          : "Click on the deck to draw a card"}
    </>
  );
}
