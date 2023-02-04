import React from 'react';
import { GridLoader } from 'react-spinners';


const Loading: React.FC<{className?: string}> = ({className}) => {
    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>
            <GridLoader color='#36d7b7' />
        </div>
    );
};

export default Loading;