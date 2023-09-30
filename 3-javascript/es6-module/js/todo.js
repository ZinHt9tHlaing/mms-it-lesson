import { appTitle, counter, lists, saveBtn, textInput } from "./element.js";
import { saveBtnHandler } from "./handler.js";

export default class toDo {
  preRenderUi() {
    app.append(appTitle);
    app.append(textInput);
    app.append(saveBtn);
    app.append(lists);
    app.append(counter);
  }

  listener() {
    saveBtn.addEventListener("click", saveBtnHandler);
    }
    
  init() {
      console.log("Todo App start");
      this.preRenderUi();
      this.listener();
  }
}
