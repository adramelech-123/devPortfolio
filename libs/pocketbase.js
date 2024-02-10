import PocketBase from "pocketbase";

const POCKET_URL = "https://realtakuportfoli.pockethost.io/";

export const pb = new PocketBase(POCKET_URL);
pb.autoCancellation(false)