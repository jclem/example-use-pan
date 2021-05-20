import { CanvasNode, Point } from "./types";

// Types

export const NEW_NODE = "NEW_NODE";
export const DELETE_NODE = "DELETE_NODE";
export const RAISE_NODE = "RAISE_NODE";
export const MOVE_NODE = "MOVE_NODE";
export const UPDATE_NODE_FUNCTION = "UPDATE_NODE_FUNCTION";
export const CREATE_CONNECTION = "CREATE_CONNECTION";
export const FORCE_UPDATE = "FORCE_UPDATE";

// Action objects

export type NewNode = {
  type: typeof NEW_NODE;
  location: Point;
  rel?: ["from", CanvasNode, string] | ["to", CanvasNode, string];
};
export type DeleteNode = { type: typeof DELETE_NODE; node: CanvasNode };
export type MoveNode = {
  type: typeof MOVE_NODE;
  node: CanvasNode;
  delta: Point;
  align: boolean;
};
export type RaiseNode = {
  type: typeof RAISE_NODE;
  node: CanvasNode;
};
export type ForceUpdate = {
  type: typeof FORCE_UPDATE;
};
export type Action = NewNode | DeleteNode | MoveNode | RaiseNode | ForceUpdate;

// Action creators

/**
 * Create an action for adding a new node.
 *
 * @param location The location for the new node
 */
export function newNode(
  location: Point,
  rel?: ["from", CanvasNode, string] | ["to", CanvasNode, string]
): NewNode {
  return { type: NEW_NODE, location, rel };
}

/**
 * Create an action for deleting a node.
 *
 * @param node The node to delete
 */
export function deleteNode(node: CanvasNode): DeleteNode {
  return { type: DELETE_NODE, node };
}

/**
 * Create an action for moving a node.
 *
 * @param node The node to move
 * @param offset The delta to move the node by
 */
export function moveNode(
  node: CanvasNode,
  delta: Point,
  align: boolean
): MoveNode {
  return { type: MOVE_NODE, node, delta, align };
}

export function forceUpdate(): ForceUpdate {
  return { type: FORCE_UPDATE };
}

export function raiseNode(node: CanvasNode): RaiseNode {
  return { type: RAISE_NODE, node };
}
