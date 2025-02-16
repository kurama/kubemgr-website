import { cn } from '@/lib/utils'

interface ShortcutProps {
  letter: string
  className?: string
}

export default function Shortcut({ letter, className }: ShortcutProps) {
  return (
    <div
      className={cn(
        'text-[10px] h-4 min-w-4 text- border border-b-2 border-orange-700 bg-orange-800 p-1 flex justify-center items-center rounded',
        className
      )}
    >
      {letter}
    </div>
  )
}
