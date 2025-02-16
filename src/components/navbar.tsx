import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from './shadcn/button'
import { BoxesIcon } from 'lucide-react'
import TooltipShortcut, { TooltipShortcutTrigger } from './tooltip-shortcut'
import { useKeyPress } from '@/hooks/use-key-press'

export default function Navbar() {
  const buttonRef = useRef(null)
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    gsap.fromTo(buttonRef.current, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 1 })
  }, [])

  const handleKeyPressCrate = (e: KeyboardEvent) => {
    e.preventDefault()
    if (linkRef.current) {
      window.open(linkRef.current.href, '_blank')
    }
  }

  useKeyPress('k', handleKeyPressCrate, ['ctrlKey'])

  return (
    <nav>
      <TooltipShortcut tooltip={'View the crate !'} shortcuts={['Ctrl', 'K']}>
        <TooltipShortcutTrigger>
          <Button ref={buttonRef} variant={'secondary'} className="text-base md:text-sm">
            <BoxesIcon size={24} />
            <a ref={linkRef} href="https://crates.io/crates/kubemgr" target="_blank">
              Crates.io
            </a>
          </Button>
        </TooltipShortcutTrigger>
      </TooltipShortcut>
    </nav>
  )
}
