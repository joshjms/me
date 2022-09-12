import React from 'react';

class Skillset extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: [
                {
                    id: 1,
                    name: 'Web Development',
                    desc: `Experienced in HTML, CSS, Javascript, and Python. I mainly use React - even for this website! Some of my projects are listed in the links below.`,
                    imgSrc: './images/neko.jpg',
                    links: [
                        {
                            id: 1,
                            name: 'TFC Official Website',
                            link: 'https://tfcfanclub.com',
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Competitive Programming',
                    desc: `Learnt Competitive Programming in High School. Reached Candidate Master in Codeforces and won a gold medal in Indonesia's National Olympiad in Informatics.`,
                    imgSrc: './images/neko.jpg',
                    links: [
                        {
                            id: 1,
                            name: 'Codeforces',
                            link: 'https://codeforces.com/profile/joshjms',
                        },
                        {
                            id: 2,
                            name: 'AtCoder',
                            link: 'https://atcoder.jp/users/tsukinousagi',
                        },
                        {
                            id: 3,
                            name: 'OSN',
                            link: 'https://osn.toki.id/statistik/peserta/1362',
                        },
                    ],
                },
                {
                    id: 3,
                    name: 'Shogi',
                    desc: `Not much but its something? Currently ranked 5-kyu in Shogi Wars and 6-kyu in 81Dojo.`,
                    imgSrc: './images/neko.jpg',
                    links: [
                        {
                            id: 1,
                            name: 'ShogiWars',
                            link: 'https://shogiwars.heroz.jp/users/mypage/joshjms?locale=en',
                        }
                    ],
                },
            ],

            highlightSkill: null,
        };
    }

    onSkillSelect(Skill) {
        this.setState({
            highlightSkill: Skill,
        });
        console.log(this.state.highlightSkill);
    }

    render() {
        return (
            <div className="min-h-screen m-5" id="skillset">
                <div className="py-10">
                    <article className="prose">
                        <h1 className="text-5xl text-center mt-3 mb-10">My Skills</h1>
                    </article>
                    <div className="justify-center items-center flex-wrap gap-x-10 w-full">
                        {
                            this.state.skills.map((Skill) =>
                                <>
                                <div className="flex flex-col border lg:w-1/3 bg-base-100 shadow-lg hover:shadow-2xl ease-in-out duration-300 cursor-pointer mx-auto items-center p-5">
                                    <h2 className="text-center text-3xl mt-3 mb-5">{Skill.name}</h2>
                                    <p className="text-center mb-5">{Skill.desc}</p>
                                </div>
                                <div className="flex flex-col border lg:w-1/3 bg-base-100 shadow-lg hover:shadow-2xl ease-in-out duration-300 cursor-pointer mx-auto items-center mb-3 p-3">
                                    <h2 className="text-center text-2xl mt-3 mb-5">Links</h2>
                                    <div className="btn-group mx-auto mb-3">
                                        {
                                            Skill.links.map((Link) => <button class="btn"><a href={Link.link} target="_blank">{Link.name}</a></button>)
                                        }
                                    </div>
                                </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div >
        );
    }
}

export default Skillset;