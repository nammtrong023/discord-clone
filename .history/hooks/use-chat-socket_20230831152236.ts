type ChatSocketProps = {
    addKey: string;
    updateKey: string;
    queryKey: string;
};

export const useChatSocket = ({ addKey, queryKey, updateKey }: ChatSocketProps) => {
    const {socket} = useSoc

};
