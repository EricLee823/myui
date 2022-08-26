import { App } from "vue"
import SButton from "./button/index"

export { SButton }
export default {
  install(app:App):void{
    app.component(SButton.name,SButton)
  }
}