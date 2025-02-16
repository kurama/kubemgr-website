export default function BackgroundBlur() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="h-[600px] w-[600px] bg-orange-500 opacity-30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[300px]" />
    </div>
  )
}
