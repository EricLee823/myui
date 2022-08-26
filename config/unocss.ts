import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const allList = [
  ...colors.map((v) => {
    return [
      `bg-${v}-500`,
      `bg-${v}-200`,
      `hover:bg-${v}-700`,
      `hover:bg-${v}-500`,
      `border-${v}`,
      `text-${v}-500`
    ]
  })

];

let safelist = []
allList.map(v => {
  safelist = [
    ...safelist,
    ...v,
    ...[
      `py-1`,
      `py-1.5`,
      `py-2`,
      `px-2`,
      `px-3`,
      `px-4`,
      `text-sm`,
      `text-base`,
      `text-lg`,
    ],
    ...[
      "search",
      "edit",
      "check",
      "message",
      "star-off",
      "delete",
      "add",
      "share",
    ].map((icon) => `i-ic-baseline-${icon}`),
  ]
})
export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });