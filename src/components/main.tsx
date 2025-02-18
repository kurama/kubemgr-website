'use client'

import { Textarea } from './shadcn/textarea'
import { useConfig } from '@/context/config-context'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Main() {
  const leftTextareaRef = useRef(null)
  const rightTextareaRef = useRef(null)
  const resultTextareaRef = useRef(null)
  const { leftConfig, setLeftConfig, rightConfig, setRightConfig, mergedConfig, setMergedConfig } = useConfig()

  useEffect(() => {
    gsap.from(leftTextareaRef.current, { x: -50, opacity: 0, duration: 1 })
    gsap.from(rightTextareaRef.current, { scale: 0.95, opacity: 0, duration: 1 })
    gsap.from(resultTextareaRef.current, { x: 50, opacity: 0, duration: 1 })
  }, [])

  useEffect(() => {
    const savedLeftConfig = localStorage.getItem('leftConfig')
    const savedRightConfig = localStorage.getItem('rightConfig')
    if (savedLeftConfig) setLeftConfig(savedLeftConfig)
    if (savedRightConfig) setRightConfig(savedRightConfig)
  }, [setLeftConfig, setRightConfig])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLeftConfigChange = (e: { target: { value: any } }) => {
    const value = e.target.value
    setLeftConfig(value)
    localStorage.setItem('leftConfig', value)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRightConfigChange = (e: { target: { value: any } }) => {
    const value = e.target.value
    setRightConfig(value)
    localStorage.setItem('rightConfig', value)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleResultChange = (e: { target: { value: any } }) => {
    setMergedConfig(e.target.value)
  }

  return (
    <main className="flex flex-col md:flex-row gap-4 h-full p-4 border border-input">
      <Textarea ref={leftTextareaRef} spellCheck={false} className="h-full custom-scrollbar" placeholder="Put here your first config" value={leftConfig} onChange={handleLeftConfigChange} />
      <Textarea ref={rightTextareaRef} spellCheck={false} className="h-full custom-scrollbar" placeholder="And here your second config" value={rightConfig} onChange={handleRightConfigChange} />
      <Textarea ref={resultTextareaRef} spellCheck={false} className="h-full custom-scrollbar" placeholder="Merged config will appear here" value={mergedConfig} onChange={handleResultChange} />
    </main>
  )
}
