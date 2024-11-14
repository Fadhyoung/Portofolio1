import React from "react";
import Content from "../Content.json"
import Card1 from "../components/Card1";

function ContentGallery() {

    return (
        <>
            <div className="w-full p-6 relative bg-radial-pattern">

            <div className='w-full h-full absolute top-0 right-0 flex xs:flex-col items-center bg-gradient-to-t from-white via-transparent to-white'></div>

                <div className="lg:w-3/4 xs:w-11/12 m-auto flex flex-row flex-wrap gap-6 xs:flex-col justify-center">
                    {Content.Projcet.map((item, index) => (
                        <div className="lg:basis-[31%] md:basis-[100%] xs:basis-[100%] flex-shrink-0">
                            <Card1
                            key={index}
                            img={item.Img}
                            title={item.Title}
                            description={item.Description}
                            link={item.Link}
                            technology={item.Technology}
                            attribute={item.Attribute}
                            />
                        </div>
                    ))}  
                </div>           
            </div>
        </>
    );
    
}

export default ContentGallery