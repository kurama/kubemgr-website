'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from './shadcn/button'
import { BoxesIcon, GithubIcon } from 'lucide-react'
import TooltipShortcut, { TooltipShortcutTrigger } from './tooltip-shortcut'
import { useKeyPress } from '@/hooks/use-key-press'

export default function Navbar() {
  const crateButtonRef = useRef(null)
  const githubButtonRef = useRef(null)
  const crateLinkRef = useRef<HTMLAnchorElement>(null)
  const githubLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    gsap.fromTo(crateButtonRef.current, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 1 })
    gsap.fromTo(githubButtonRef.current, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 1 })
  }, [])

  const handleCrate = () => {
    if (crateLinkRef.current) {
      window.open(crateLinkRef.current.href, '_blank')
    }
  }

  const handleGithub = () => {
    if (githubLinkRef.current) {
      window.open(githubLinkRef.current.href, '_blank')
    }
  }

  const handleKeyPressCrate = (e: KeyboardEvent) => {
    e.preventDefault()
    handleCrate()
  }

  const handleKeyPressGithub = (e: KeyboardEvent) => {
    e.preventDefault()
    handleGithub()
  }

  useKeyPress('k', handleKeyPressCrate, ['ctrlKey'])
  useKeyPress('g', handleKeyPressGithub, ['ctrlKey'])

  return (
    <nav className="flex flex-row gap-4">
      <TooltipShortcut tooltip={'View the crate'} shortcuts={['Ctrl', 'K']}>
        <TooltipShortcutTrigger>
          <Button ref={crateButtonRef} variant={'secondary'} size={'default-icon'} className="text-base md:text-sm" onClick={handleCrate}>
            <BoxesIcon size={24} />
            <a ref={crateLinkRef} rel="noopener" href="https://crates.io/crates/kubemgr" target="_blank" className="hidden lg:flex">
              <h2>Crates.io</h2>
            </a>
          </Button>
        </TooltipShortcutTrigger>
      </TooltipShortcut>
      <TooltipShortcut tooltip={'See the code'} shortcuts={['Ctrl', 'G']}>
        <TooltipShortcutTrigger>
          <Button ref={githubButtonRef} variant={'secondary'} size={'default-icon'} className="text-base md:text-sm" onClick={handleGithub}>
            <GithubIcon size={24} />
            <a ref={githubLinkRef} rel="noopener" href="https://github.com/kurama/kubemgr" target="_blank" className="hidden lg:flex">
              <h2>Github</h2>
            </a>
          </Button>
        </TooltipShortcutTrigger>
      </TooltipShortcut>
    </nav>
  )
}
