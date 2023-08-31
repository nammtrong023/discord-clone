interface ServerSearchProps {
    data: {
        label: string;
        type: 'channel' | 'member';
        data:
            | {
                  icon: React.ReactNode;
                  name: string;
                  id: string;
              }[]
            | undefined;
    }[];
}

const ServerSearch = ({ data }: ServerSearchProps) => {
    return (
        <>
            <button
            className="">
                <p>Search</p>
            </button>
        </>
    );
};

export default ServerSearch;
