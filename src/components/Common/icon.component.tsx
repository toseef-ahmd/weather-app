import React from "react"

type IconProps = {
  icon: string
  alt: string
  width: number
  height: number
  direction?: number
}

const Icon: React.FC<IconProps> = ({ icon, alt, width, height, direction }) => {
  const icons = import.meta.env.VITE_ICONS_URL
  const rotationStyle = {
    transform: `rotate(${direction}deg)`,
  }
  return (
    <div className={`w-${width} h-${height}`} style={rotationStyle}>
      <img src={`${icons}${icon}`} alt={alt} className={`w-full h-full`} />
    </div>
  )
}

export default Icon
