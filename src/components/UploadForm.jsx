"use client"

import axios from 'axios';
import React, { useState } from 'react'
import UploadIcon from './UploadIcon';

const UploadForm = () => {
    const [isUploading, setIsUploading] = useState(false);

    const upload = async(ev) => {
        ev.preventDefault();
        
        const files = ev.target.files;

        if (files.length > 0) {
            const file = files[0];
            setIsUploading(true);
            const res = await axios.postForm(`/api/upload`, {
                
                file, 
            });
            setIsUploading(false);
            console.log(res.data);
        }


    }


    return (
        <div>
            {
                isUploading && (
                    <div className='bg-black/90 text-white inset-0 flex'>
                        <div className='w-full text-center'>
                        <h2 className='text-4xl mb-4'>Uploading...</h2>
                        <h3 className='text-xl'>Please Wait</h3>
                        </div>
                    </div>
                )
            }
            <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer">
                <UploadIcon />
                Choose File
                <input onChange={upload} type="file" className="hidden" name="" id="" />
            </label>
        </div>
    )
}

export default UploadForm