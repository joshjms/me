import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);
    }

    onSkillSelect(Skill) {
        this.setState({
            highlightSkill: Skill,
        });
    }

    render() {
        return (
            <div className="min-h-screen pt-[100px]" id="education">
                <article className="prose">
                    <h1 className="text-5xl text-center mt-3 mb-10">My Education</h1>
                </article>
                <div className="container mx-auto w-full h-full hidden lg:block">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                            </div>
                            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:shadow-2xl hover:cursor-pointer hover:-translate-y-3 ease-in-out duration-300">
                                <h3 className="mb-3 font-bold text-gray-800 text-2xl">Elementary</h3>
                                <p className="leading-snug tracking-wide text-gray-900 text-opacity-100 text-sm">Surabaya Cambridge School</p>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                            </div>
                            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:shadow-2xl hover:cursor-pointer hover:-translate-y-3 ease-in-out duration-300">
                                <h3 className="mb-3 font-bold text-white text-xl">Junior High School</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Surabaya Cambridge School</p>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                            </div>
                            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:shadow-2xl hover:cursor-pointer hover:-translate-y-3 ease-in-out duration-300">
                                <h3 className="mb-3 font-bold text-gray-800 text-xl">Senior High School</h3>
                                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Surabaya Cambridge School</p>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                            </div>
                            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:shadow-2xl hover:cursor-pointer hover:-translate-y-3 ease-in-out duration-300">
                                <h3 className="mb-3 font-bold text-white text-xl">Bachelors</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Nanyang Technological University</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto w-full h-full lg:hidden">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                            </div>
                            <div className="bg-gray-400 rounded-lg shadow-xl px-6 py-4 hover:shadow-2xl hover:cursor-pointer hover:-translate-y-3 ease-in-out duration-300">
                                <h3 className="mb-3 font-bold text-gray-800 text-2xl">Elementary</h3>
                                <p className="leading-snug tracking-wide text-gray-900 text-opacity-100 text-sm">Surabaya Cambridge School</p>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                            </div>
                            <div className="bg-red-400 rounded-lg shadow-xl px-6 py-4 hover:shadow-2xl hover:cursor-pointer hover:-translate-y-3 ease-in-out duration-300">
                                <h3 className="mb-3 font-bold text-white text-xl">Junior High School</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Surabaya Cambridge School</p>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                            </div>
                            <div className="order-1 bg-gray-400 rounded-lg shadow-xl px-6 py-4 hover:shadow-2xl hover:cursor-pointer hover:-translate-y-3 ease-in-out duration-300">
                                <h3 className="mb-3 font-bold text-gray-800 text-xl">Senior High School</h3>
                                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Surabaya Cambridge School</p>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
                            </div>
                            <div className="bg-red-400 rounded-lg shadow-xl px-6 py-4 hover:shadow-2xl hover:cursor-pointer hover:-translate-y-3 ease-in-out duration-300">
                                <h3 className="mb-3 font-bold text-white text-xl">Bachelors</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Nanyang Technological University</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;