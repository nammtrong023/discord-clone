'use client';

import { FC } from "react";

interface FileUploadProps {
    endpoint: 'messageFile' | 'serverImage';
    value: string;
    onChange: (url?: string) => void;
}

const FileUpload: FC = () => {
    return <div></div>;
};

export default FileUpload;
