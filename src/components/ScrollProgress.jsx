const ScrollProgress = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gray-200/30 dark:bg-gray-700/30">
            <div
                className="scroll-progress h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 origin-left scale-x-0"
            />
        </div>
    );
};

export default ScrollProgress;
