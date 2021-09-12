// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Canvas extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Canvas entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Canvas entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Canvas", id.toString(), this);
  }

  static load(id: string): Canvas | null {
    return store.get("Canvas", id) as Canvas | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get tiles(): Array<string> {
    let value = this.get("tiles");
    return value.toStringArray();
  }

  set tiles(value: Array<string>) {
    this.set("tiles", Value.fromStringArray(value));
  }

  get palette(): Array<string> {
    let value = this.get("palette");
    return value.toStringArray();
  }

  set palette(value: Array<string>) {
    this.set("palette", Value.fromStringArray(value));
  }
}

export class Tile extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Tile entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Tile entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Tile", id.toString(), this);
  }

  static load(id: string): Tile | null {
    return store.get("Tile", id) as Tile | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get canvas(): string | null {
    let value = this.get("canvas");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set canvas(value: string | null) {
    if (value === null) {
      this.unset("canvas");
    } else {
      this.set("canvas", Value.fromString(value as string));
    }
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get svg(): string | null {
    let value = this.get("svg");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set svg(value: string | null) {
    if (value === null) {
      this.unset("svg");
    } else {
      this.set("svg", Value.fromString(value as string));
    }
  }

  get x(): BigInt {
    let value = this.get("x");
    return value.toBigInt();
  }

  set x(value: BigInt) {
    this.set("x", Value.fromBigInt(value));
  }

  get y(): BigInt {
    let value = this.get("y");
    return value.toBigInt();
  }

  set y(value: BigInt) {
    this.set("y", Value.fromBigInt(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}

export class Player extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Player entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Player entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Player", id.toString(), this);
  }

  static load(id: string): Player | null {
    return store.get("Player", id) as Player | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get tiles(): Array<string> {
    let value = this.get("tiles");
    return value.toStringArray();
  }

  set tiles(value: Array<string>) {
    this.set("tiles", Value.fromStringArray(value));
  }
}
