import {
  type PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

interface DnDContextProps {
  dragging: number;
  setDragging: React.Dispatch<React.SetStateAction<number>>;
  data: object | null;
  setData: React.Dispatch<React.SetStateAction<object | null>>;
  dropIndicator: { index: number; position: "before" | "after" } | undefined;
  setDropIndicator: React.Dispatch<
    React.SetStateAction<
      { index: number; position: "before" | "after" } | undefined
    >
  >;
}

export const DnDContext = createContext<DnDContextProps>({
  dragging: -1,
  setDragging: () => void 0,
  data: null,
  setData: () => void 0,
  dropIndicator: undefined,
  setDropIndicator: () => void 0,
});

function useDnD() {
  const ctx = useContext(DnDContext);

  if (!ctx) {
    throw new Error("useDnD must be used within a DnDProvider");
  }

  return ctx;
}

function DnDProvider({ children }: PropsWithChildren) {
  const [dragging, setDragging] = useState(-1);
  const [data, setData] = useState<object | null>(null);
  const [dropIndicator, setDropIndicator] = useState<
    { index: number; position: "before" | "after" } | undefined
  >();

  const value = useMemo(
    () => ({
      dragging,
      setDragging,
      data,
      setData,
      dropIndicator,
      setDropIndicator,
    }),
    [dragging, dropIndicator, data]
  );

  return <DnDContext.Provider value={value}>{children}</DnDContext.Provider>;
}

export { DnDProvider, useDnD };
