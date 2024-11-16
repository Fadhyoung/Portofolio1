import AutoScroll from "./AutoScroll";

function Banner2() {

    return (
        <>
            <div className="w-full m-auto flex flex-col gap-4 justify-center items-center
                            
            ">
                <h1 className="font-black text-2xl text-transparent text-center
                bg-gradient-to-r from-sky-500 to-red-500 bg-clip-text 
                " >Get to know for what i used to</h1>
                <p className="text-center">Here bunch of my get used to, so i am a well experienced boy that has a bit knowledge about certain technology</p>
                <AutoScroll />
            </div>
        </>
    );
    
}

export default Banner2;