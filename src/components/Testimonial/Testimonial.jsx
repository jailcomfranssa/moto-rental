import React from 'react';
import Img01 from '../../assets/3x4-1.jpg';
import Img02 from '../../assets/3x4-2.jpg';
import Img03 from '../../assets/3x4-3.jpg';

const testimonialData = [
    {
        name: 'Dilshad',
        image: Img01,
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi suscipit ratione',
        aosDelay: '0',
    },
    {
        name: 'Satya',
        image: Img02,
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi suscipit ratione',
        aosDelay: '300',
    },
    {
        name: 'Sabir',
        image: Img03,
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi suscipit ratione',
        aosDelay: '1000',
    },
];

const Testimonial = () => {
    return (
        <div className="dark:bg-black dark:text-white py-14 ms:pb-24">
            <div className="container">
                {/**Header */}
                <div className="space-y-4 pb-12">
                    <p
                        data-aos="fade-up"
                        className="text-3xl font-semibold text-center sm:text-4xl font-serif"
                    >
                        O que nossos clientes dizem sobre nós
                    </p>
                    <p data-aos="fade-up" className="text-center sm:px-44">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                {/**Card section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
                    {testimonialData.map((data) => {
                        return (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                key={data.name}
                                className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg"
                            >
                                <div className="grid place-items-center">
                                    <img
                                        className="h-20 w-20 rounded-full"
                                        src={data.image}
                                        alt={data.name}
                                    />
                                </div>
                                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                                <p>{data.description}</p>
                                <p className="font-semibold text-center">
                                    {data.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
