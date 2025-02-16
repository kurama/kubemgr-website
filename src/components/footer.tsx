import { useEffect, useRef, useState } from 'react'
import { CircleHelpIcon, CopyIcon, DownloadIcon, FoldHorizontalIcon } from 'lucide-react'
import { Button } from './shadcn/button'
import { Input } from './shadcn/input'
// import { toast } from '@/hooks/use-toast';
// import { cn } from '@/lib/utils';
import { gsap } from 'gsap'
import { useKeyPress } from '@/hooks/use-key-press'
import TooltipShortcut, { TooltipShortcutTrigger } from './tooltip-shortcut'
import { useConfig } from '@/context/config-context'

export default function Footer() {
  const divRef = useRef(null)
  const buttonRef = useRef(null)
  const [filename, setFilename] = useState('')
  const { handleMerge, mergedConfig, leftConfig, rightConfig } = useConfig()

  useEffect(() => {
    gsap.fromTo(divRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1 })
    gsap.fromTo(buttonRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1 })
  }, [])

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([mergedConfig], { type: 'application/octet-stream' }) // Type binaire générique
    element.href = URL.createObjectURL(file)
    element.download = filename || 'config.merged'
    document.body.appendChild(element)
    element.click()
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(mergedConfig)
  }

  const handleHelp = () => {
    console.log('Help')
  }

  const handleKeyPressMerge = (e: KeyboardEvent) => {
    e.preventDefault()
    handleMerge()
    
  }

  const handleKeyPressDownload = (e: KeyboardEvent) => {
    e.preventDefault()
    handleDownload()
  }

  const handleKeyPressCopy = (e: KeyboardEvent) => {
    e.preventDefault()
    handleCopy()
  }

  const handleKeyPressHelp = (e: KeyboardEvent) => {
    e.preventDefault()
    handleHelp()
  }

  useKeyPress('s', handleKeyPressMerge, ['ctrlKey'])
  useKeyPress('d', handleKeyPressDownload, ['ctrlKey'])
  useKeyPress('c', handleKeyPressCopy, ['ctrlKey', 'shiftKey'])
  useKeyPress('h', handleKeyPressHelp, ['ctrlKey'])

  const isMergeDisabled = !leftConfig || !rightConfig
  const isDownloadCopyDisabled = !mergedConfig

  return (
    <footer className="flex flex-row justify-between rounded-b-md p-4 border-x border-b border-input gap-4">
      <div ref={divRef} className="flex flex-row gap-4">
        <Input value={filename} onChange={(e) => setFilename(e.target.value)} placeholder="Name your merged config" className="w-fit" />{' '}
        <TooltipShortcut tooltip={'Merge'} shortcuts={['Ctrl', 'S']}>
          <TooltipShortcutTrigger>
            <Button variant="secondary" size="icon" className="text-base md:text-sm" onClick={handleMerge} disabled={isMergeDisabled}>
              <FoldHorizontalIcon />
            </Button>
          </TooltipShortcutTrigger>
        </TooltipShortcut>
        <TooltipShortcut tooltip={'Download'} shortcuts={['Ctrl', 'D']}>
          <TooltipShortcutTrigger>
            <Button variant="secondary" size="icon" className="text-base md:text-sm" onClick={handleDownload} disabled={isDownloadCopyDisabled}>
              <DownloadIcon />
            </Button>
          </TooltipShortcutTrigger>
        </TooltipShortcut>
        <TooltipShortcut tooltip={'Copy'} shortcuts={['Ctrl', 'Shft', 'C']}>
          <TooltipShortcutTrigger>
            <Button variant="secondary" size="icon" className="text-base md:text-sm" onClick={handleCopy} disabled={isDownloadCopyDisabled}>
              <CopyIcon />
            </Button>
          </TooltipShortcutTrigger>
        </TooltipShortcut>
      </div>
      <TooltipShortcut tooltip={'Help'} shortcuts={['Ctrl', 'H']}>
        <TooltipShortcutTrigger>
          <Button ref={buttonRef} variant="secondary" size="icon">
            <CircleHelpIcon />
          </Button>
        </TooltipShortcutTrigger>
      </TooltipShortcut>
    </footer>
  )
}
