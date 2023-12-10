import React from 'react';

type IconProps = {
    icon: string;
    alt : string;
    width: number;
    height: number;
};

const Icon: React.FC<IconProps> = ({icon, alt, width, height}) => {
    const icons = import.meta.env.VITE_ICONS_URL;
    return (
        <div className={`w-${width} h-${height}`}>
            <img src={`${icons}${icon}`} alt={alt} className={`w-full h-full`}/>
        </div>
        
    
    );
};

export default Icon;
