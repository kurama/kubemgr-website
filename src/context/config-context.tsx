'use client'

import { useState, useEffect, createContext, useContext } from 'react'

interface ConfigContextType {
  leftConfig: string
  setLeftConfig: React.Dispatch<React.SetStateAction<string>>
  rightConfig: string
  setRightConfig: React.Dispatch<React.SetStateAction<string>>
  mergedConfig: string
  setMergedConfig: React.Dispatch<React.SetStateAction<string>>
  handleMerge: () => void
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined)

interface ConfigProviderProps {
  children: React.ReactNode
}

export const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
  const [leftConfig, setLeftConfig] = useState('')
  const [rightConfig, setRightConfig] = useState('')
  const [mergedConfig, setMergedConfig] = useState('')
  const [isWasmInitialized, setIsWasmInitialized] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [kubemgr, setKubemgr] = useState<any>(null)

  useEffect(() => {
    const initWasm = async () => {
      try {
        const wasmModule = await import('kubemgr')
        await wasmModule.default()
        setKubemgr(wasmModule)
        setIsWasmInitialized(true)
      } catch (error) {
        console.error('Error initializing WASM:', error)
      }
    }
    initWasm()
  }, [])

  const handleMerge = async () => {
    if (!isWasmInitialized || !kubemgr) {
      console.error('WASM module is not initialized')
      return
    }

    try {
      const result = await kubemgr.merge_configs([leftConfig, rightConfig])
      setMergedConfig(result)
    } catch (error) {
      setMergedConfig('Error merging configs: ' + error)
    }
  }

  return (
    <ConfigContext.Provider
      value={{
        leftConfig,
        setLeftConfig,
        rightConfig,
        setRightConfig,
        mergedConfig,
        setMergedConfig,
        handleMerge,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

export const useConfig = () => {
  const context = useContext(ConfigContext)
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider')
  }
  return context
}
