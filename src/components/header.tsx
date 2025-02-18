import { TypingAnimation } from './magicui/typing-animation'

export default function Header() {
  return (
    <header className="flex items-start flex-col justify-between">
      <h1>
        <TypingAnimation duration={85} className="text-base md:text-sm">
          Kubemgr
        </TypingAnimation>
      </h1>
      <h2>
        <TypingAnimation duration={45} className="text-[10px] md:text-[12px] text-gray-500">
          The Kubernetes Configuration Merger
        </TypingAnimation>
      </h2>
    </header>
  )
}
