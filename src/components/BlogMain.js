import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

class BlogMain extends React.Component {
    render() {
        return (
            <div>
                <article className="prose w-sm mx-[10%] py-[100px]">
                    <h1 className="text-5xl center-text">
                        {" "}
                        Some Things I Write{" "}
                    </h1>
                    <p>
                        Unfortunately, some of the things here are not
                        particularly of sufficient relevance. Hence, I'll
                        categorize these posts for you. Some of these posts are
                        going to be tagged{" "}
                        <span className="badge">Programming</span> - these are
                        filled with the most boring details in existence.
                        However, if you do find algorithms and data structures
                        your cup of tea, feel free to check it out. The second
                        category, is{" "}
                        <span className="badge">Non-programming</span>, which is
                        everything else <b>but</b> programming. I'll try to make
                        some posts every once in a while (no promises though).
                    </p>
                </article>

                <div class="border p-5 mx-[10%] w-[40%] bg-base-100 shadow-xl shadow-lg hover:shadow-2xl m-3 hover:-translate-y-3 ease-in-out duration-300 hover:cursor-pointer">
                    <Link to="/blog/p120920220039"><h1 class="text-xl hover:underline">mod M</h1></Link>
                    <p>12 September 2022</p>
                    <p><span className="badge">Programming</span></p>
                </div>
            </div>
        );
    }
}

export default BlogMain;
