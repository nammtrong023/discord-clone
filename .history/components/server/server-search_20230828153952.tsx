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
            className="group px-2 py-2 rounded-md flex items-center gap-x-2">
                <p>Search</p>
            </button>
        </>
    );
};

export default ServerSearch;
