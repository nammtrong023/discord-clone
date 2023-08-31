interface ServerSearchProps {
    data: {
        label: string;
        type: 'channel' | 'member';
        data: {
            icon: React.ReactNode;
        };
    };
}

const ServerSearch = () => {
    return <div></div>;
};

export default ServerSearch;
