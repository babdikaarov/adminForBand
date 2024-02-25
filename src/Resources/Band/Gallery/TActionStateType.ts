import { actionState } from "./actionState";

export type TActionStateType = (typeof actionState)[keyof typeof actionState];
