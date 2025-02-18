import { useEffect, useRef, useState } from 'react'
import { CircleHelpIcon, CopyIcon, DownloadIcon, ExternalLink, FoldHorizontalIcon } from 'lucide-react'
import { Button } from './shadcn/button'
import { Input } from './shadcn/input'
import { gsap } from 'gsap'
import { useKeyPress } from '@/hooks/use-key-press'
import TooltipShortcut, { TooltipShortcutTrigger } from './tooltip-shortcut'
import { useConfig } from '@/context/config-context'
import { toast } from '@/hooks/use-toast'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'

export default function Footer() {
  const divRef = useRef(null)
  const buttonRef = useRef(null)
  const [filename, setFilename] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
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
    toast({
      title: 'Your config has been downloaded',
      description: 'Retrieve it in your downloads folder',
    })
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(mergedConfig)
    toast({
      title: 'Your config has been copied',
      description: 'Paste it wherever you want',
    })
  }

  const handleHelp = () => {
    setIsDialogOpen(true)
  }

  const handleKeyPressMerge = (e: KeyboardEvent) => {
    if (!isMergeDisabled) {
      e.preventDefault()
      handleMerge()
    }
  }

  const handleKeyPressDownload = (e: KeyboardEvent) => {
    if (!isDownloadCopyDisabled) {
      e.preventDefault()
      handleDownload()
    }
  }

  const handleKeyPressCopy = (e: KeyboardEvent) => {
    if (!isDownloadCopyDisabled) {
      e.preventDefault()
      handleCopy()
    }
  }

  const handleKeyPressHelp = (e: KeyboardEvent) => {
    e.preventDefault()
    handleHelp()
  }

  const isMergeDisabled = !leftConfig || !rightConfig
  const isDownloadCopyDisabled = !mergedConfig

  useKeyPress('s', handleKeyPressMerge, ['ctrlKey'])
  useKeyPress('d', handleKeyPressDownload, ['ctrlKey'])
  useKeyPress('c', handleKeyPressCopy, ['ctrlKey', 'shiftKey'])
  useKeyPress('h', handleKeyPressHelp, ['ctrlKey'])

  return (
    <footer className="flex flex-row justify-between rounded-b-md p-4 border-x border-b border-input gap-4">
      <div ref={divRef} className="flex flex-row gap-4">
        <Input value={filename} onChange={(e) => setFilename(e.target.value)} placeholder="Name your merged config" className="w-fit" />{' '}
        <TooltipShortcut tooltip={'Merge'} shortcuts={['Ctrl', 'S']}>
          <TooltipShortcutTrigger>
            <Button variant="secondary" size={'default-icon'} className="text-base md:text-sm" onClick={handleMerge} disabled={isMergeDisabled}>
              <FoldHorizontalIcon />
              <span className="hidden lg:flex">Merge</span>
            </Button>
          </TooltipShortcutTrigger>
        </TooltipShortcut>
        <TooltipShortcut tooltip={'Download'} shortcuts={['Ctrl', 'D']}>
          <TooltipShortcutTrigger>
            <Button variant="secondary" size={'default-icon'} className="text-base md:text-sm" onClick={handleDownload} disabled={isDownloadCopyDisabled}>
              <DownloadIcon />
              <span className="hidden lg:flex">Download</span>
            </Button>
          </TooltipShortcutTrigger>
        </TooltipShortcut>
        <TooltipShortcut tooltip={'Copy'} shortcuts={['Ctrl', 'Shft', 'C']}>
          <TooltipShortcutTrigger>
            <Button variant="secondary" size={'default-icon'} className="text-base md:text-sm" onClick={handleCopy} disabled={isDownloadCopyDisabled}>
              <CopyIcon />
              <span className="hidden lg:flex">Copy</span>
            </Button>
          </TooltipShortcutTrigger>
        </TooltipShortcut>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <TooltipShortcut tooltip={'Help'} shortcuts={['Ctrl', 'H']}>
          <TooltipShortcutTrigger>
            <DialogTrigger asChild>
              <Button ref={buttonRef} size={'default-icon'} variant="secondary">
                <CircleHelpIcon />
                <span className="hidden lg:flex">Help</span>
              </Button>
            </DialogTrigger>
          </TooltipShortcutTrigger>
        </TooltipShortcut>
        <DialogContent className="sm:max-w-[425px] gap-0">
          <DialogHeader className="space-y-2">
            <DialogTitle asChild>
              <h1 className="text-xl font-bold">Kubemgr</h1>
            </DialogTitle>
            <DialogDescription asChild>
              <h2 className="text-base">Merge Kubernetes configs securely in your browser, powered by WebAssembly</h2>
            </DialogDescription>
          </DialogHeader>

          <article className="space-y-4 pt-4">
            <section className="space-y-2">
              <h3 className="font-medium">What is Kubemgr?</h3>
              <p className="text-sm text-muted-foreground">
                Kubemgr is a powerful tool that brings the capabilities of the official Kubernetes configuration management tools directly to your browser. It enables seamless kubeconfig merging
                without any installation required.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-medium">Key Features</h3>
              <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                <li itemProp="featureList">100% client-side processing using WebAssembly technology</li>
                <li itemProp="featureList">Identical functionality to the CLI version</li>
                <li itemProp="featureList">Enhanced security: all operations performed locally in your browser</li>
              </ul>
            </section>

            <section className="pt-2">
              <a href="https://github.com/dorian-grst/kubemgr" target="_blank" className="inline-flex items-center text-sm text-orange-500 hover:text-orange-600 font-medium">
                ⭐ Support the project on GitHub <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </section>
          </article>
        </DialogContent>
      </Dialog>
    </footer>
  )
}
