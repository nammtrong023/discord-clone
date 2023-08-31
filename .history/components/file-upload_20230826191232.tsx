'use client';
import { FC } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { UploadDropzone } from '@/lib/uploadthing';
import '@uploadthing/react/styles.css';

interface FileUploadProps {
    endpoint: 'messageFile' | 'serverImage';
    value: string;
    onChange: (url?: string) => void;
}

const FileUpload: FC<FileUploadProps> = ({ endpoint, value, onChange }) => {
    const fileType = value?.split('.').pop();

    if (value && fileType !== 'pdf') {
        return (
            <div className='relative h-20 w-20'>
                <Image src={value} fill alt='Upload' className='objerounded-full' />
                <button
                    onClick={() => onChange('')}
                    className='bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm'
                    type='button'
                >
                    <X className='h-4 w-4' />
                </button>
            </div>
        );
    }

    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url);
            }}
            onUploadError={(error: Error) => {
                console.log(error);
            }}
        />
    );
};

export default FileUpload;