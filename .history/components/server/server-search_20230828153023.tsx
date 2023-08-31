interface ServerSearchProps {
    data: {
        label: string;
        type: 'channel' | 'member';
        data: {
            icon: React.ReactNode;
            name: string;
        };
    };
}

const ServerSearch = () => {
    return <div></div>;
};

export default ServerSearch;
