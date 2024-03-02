import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

interface DnDContextProps {
  dragging: boolean;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DnDContext = createContext<DnDContextProps>({
  dragging: false,
  setDragging: () => void 0,
});

function useDnD() {
  const ctx = useContext(DnDContext);

  if (!ctx) {
    throw new Error("useDnD must be used within a DnDProvider");
  }

  return ctx;
}

function DnDProvider({ children }: PropsWithChildren) {
  const [dragging, setDragging] = useState(false);
  const value = useMemo(() => ({ dragging, setDragging }), [dragging]);

  return <DnDContext.Provider value={value}>{children}</DnDContext.Provider>;
}

export { DnDProvider, useDnD };
