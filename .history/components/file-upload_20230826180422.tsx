'use client';

import { FC } from 'react';

interface FileUploadProps {
    endpoint: 'messageFile' | 'serverImage';
    value: string;
    onChange: (url?: string) => void;
}

const FileUpload: FC<FileUploadProps> = () => {
    return <div></div>;
};

export default FileUpload;
