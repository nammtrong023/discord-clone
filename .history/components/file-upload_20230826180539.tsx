'use client';
import { FC } from 'react';
import { UploadDropzone } from 

interface FileUploadProps {
    endpoint: 'messageFile' | 'serverImage';
    value: string;
    onChange: (url?: string) => void;
}

const FileUpload: FC<FileUploadProps> = ({ endpoint, value, onChange }) => {
    return <div></div>;
};

export default FileUpload;