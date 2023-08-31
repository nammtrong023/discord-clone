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
