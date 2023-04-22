import React, {useRef} from 'react';
const Blob = () => {
    const mesh = useRef();
    return (
        <mesh ref={mesh} scale={1.5} position={[0, 0, 0]}>
            
        </mesh>
    );
};

export default Blob;