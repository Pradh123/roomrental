import React, { useState, useEffect } from 'react';

const GoogleMap = () => {
    const [mapCode, setMapCode] = useState(null);
    const handleChange = (e) => {
        setMapCode(e.target.value);
    };


    return (
        <>
            {/* <div>Code Render</div> */}
            <div className='md:grid grid-cols-2 gap-5 items-center'>
                <div className=' mt-5'>
                    <textarea
                        value={mapCode}
                        onChange={handleChange}
                        className='p-2 w-full h-80 resize-none rounded-md'
                    ></textarea>
                    <div className='md:flex justify-between px-3'>
                        <p className='text-xs mb-2'>Confirm you Enter width=100% & height=100%</p>
                       
                    </div>
                </div>
                <div className='md:mt-0 mt-5'>
                    <p className='font-semibold text-xs'>Google Map show is here</p>
                    <div
                        className='border-black border w-full h-72 rounded-md overflow-hidden'
                        dangerouslySetInnerHTML={{ __html: mapCode }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default GoogleMap;
