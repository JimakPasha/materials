export default function randomColor(colors: Array<string>): string {
  return colors[Math.round(Math.random() * colors.length)]
}
