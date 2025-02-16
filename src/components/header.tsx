import { TypingAnimation } from './magicui/typing-animation'

export default function Header() {
  return (
    <header className="flex items-center">
      <h1>
        <TypingAnimation duration={85} className="text-base md:text-sm">
          Kubemgr
        </TypingAnimation>
      </h1>
    </header>
  )
}
