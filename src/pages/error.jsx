import Navbar from '../components/navbar';

function Error() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <div className="w-1/2 h-80vh">
                    <img src="/Not Found.png" alt="404" className="w-full h-full" />
                </div>
            </div>
        </>
    );
}

export default Error;
