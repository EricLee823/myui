import { defineComponent, PropType } from "vue";
import "uno.css";
//定义颜色类型
export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export type ISize = "small" | "medium" | "large";

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue"
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium"
  },
  icon: {
    type: String,
    default: ""
  },
}
export default defineComponent({
  name: "SButton",
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };
    return () => <button
      class={`
      py-${size[props.size].y}
      px-${size[props.size].x}
      text-${size[props.size].text}
      shadow-md 
      ${props.plain ? "text-" + props.color + "-500" : 'text-white'} 
      bg-${props.color}-${props.plain ? 200 : 500}
      hover:bg-${props.color}-${props.plain ? 500 : 700}
      hover:text-white
      ${props.plain ? 'border-' + props.color : 'border-none'} 
      b-1
      cursor-pointer 
      m-1
      ${props.round ? 'rounded-full' : 'rounded-lg'} 
    `}
    >
      {props.icon ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ''}
      {slots.default ? slots.default() : ''}
    </button>
  }

})