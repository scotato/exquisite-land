import create from "zustand";

type UniverseState = {
  canvases: CanvasState[];
  activeCanvas: number;
};

type CanvasState = {
  id: number;
  name?: string; // TBD in the future
  pallete: string[];
  tiles: Record<string, TileState>;
};

export enum TileStatus {
  BLANK = "BLANK",
  INVITE = "INVITE",
  DRAWABLE = "DRAWABLE",
  DRAWN = "DRAWN",
}

export enum TileType {
  SOLO = "SOLO",
  COMMONS = "COMMONS",
}

type TileState = {
  status: TileStatus;
  type: TileType;
  svg?: string;
};

const useStore = create<UniverseState>((set) => ({
  canvases: [
    {
      id: 0,
      tiles: {},
      pallete: ["#000", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"],
    },
    {
      id: 1,
      tiles: {},
      pallete: ["#000", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"],
    },
  ],
  activeCanvas: 0,
}));

export default useStore;
