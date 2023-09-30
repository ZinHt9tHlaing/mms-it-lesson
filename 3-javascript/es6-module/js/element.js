import { createSaveButton } from "./ui/button.js";
import { createInput } from "./ui/input-create.js";
import { createUl } from "./ui/ul-create.js";
import { createTitle } from "./ui/title-create.js";
import { createCounter } from "./ui/count-create.js";

export const appTitle = createTitle("Todo App");
export const textInput = createInput();
export const saveBtn = createSaveButton("Save");
export const lists = createUl("");
export const counter = createCounter(0,"Total List");

