import React, { ReactNode } from 'react'
import Shortcut from './shortcut'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './shadcn/tooltip'

interface TooltipShortcutProps {
  children: ReactNode
  tooltip: string
  shortcuts: string[]
}

interface TooltipShortcutTriggerProps {
  children: ReactNode
}

export function TooltipShortcutTrigger({ children }: TooltipShortcutTriggerProps) {
  return <TooltipTrigger asChild>{children}</TooltipTrigger>
}

export default function TooltipShortcut({ children, tooltip, shortcuts }: TooltipShortcutProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        {children}
        <TooltipContent>
          <div className="flex flex-row gap-2 justify-center items-center">
            <p>{tooltip}</p>
            {shortcuts.map((shortcut, index) => (
              <React.Fragment key={`${shortcut}-${index}`}>
                <Shortcut letter={shortcut} />
                {index < shortcuts.length - 1 && <p>+</p>}
              </React.Fragment>
            ))}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
