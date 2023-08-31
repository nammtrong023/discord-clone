'use client';
import { FC } from 'react';
import { UploadDropzone } from '@/lib/uploadthing';
import '@uploadthing/react/styles.css';
import { error } from 'console';

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
            onUploadError={(error) => {}}
        />
    );
};

export default FileUpload;
