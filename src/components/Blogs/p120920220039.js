import React from "react";
import ReactDOM from "react-dom/client";

var Latex = require("react-latex");

class P120920220039 extends React.Component {
    render() {
        return (
            <div>
                <article className="prose w-sm mx-[10%] py-[100px]">
                    <h1 className="text-5xl center-text">
                        <Latex> mod M </Latex>
                    </h1>
                    <p><span className="badge">Programming</span></p>
                    <h3> Preface </h3>
                    <p>
                        {" "}
                        <Latex>
                            I feel like my first blog would be something about
                            programming, for obvious reasons that I don't know
                            of.
                        </Latex>{" "}
                    </p>
                    <p>
                        {" "}
                        <Latex>
                            This is a problem I encountered prior to creating
                            this post (just a few hours off). I was
                            participating in ARC and found this problem. Being
                            rusty in competitive programming and all, I didn't
                            manage to find a solution at first glance, however
                            it didn't take me too long anyways. If you are
                            interested in the solution, you can read the
                            Official Editorial which is written in far more
                            detail with all the mathy stuffs you would expect.
                            In this unofficial editorial, I'll take a different
                            stance in explaining the problem which I hope
                            doesn't ruin the problem's quality.
                        </Latex>
                    </p>

                    <h3> Problem Statement </h3>
                    <p>
                        {" "}
                        <Latex>
                            The problem is this: Given an array $A$ of $N$
                            integers, and let $A'_i$ be $A_i \% k$ for all $1
                            \le i \le N$, find the minimum number of distinct
                            integers in $A'$ by choosing an optimal $k$.
                        </Latex>
                    </p>

                    <p>
                        {" "}
                        <Latex>
                            For example, $A = [1, 4, 8]$. By choosing $k = 3$,
                            we obtain $A' = [1, 1, 2]$ where $A'$ is the new
                            array. Hence, our answer is $2$ because there are
                            two distinct integers in $A'$.
                        </Latex>
                    </p>

                    <p>
                        {" "}
                        <Latex>
                            Another example, $A = [5, 10, 15]$. By choosing $k =
                            5$, we obtain $A' = [0, 0, 0]$ and our answer is
                            $1$.
                        </Latex>
                    </p>

                    <h3> Constraints </h3>
                    <ul>
                        <li>
                            <Latex>$1 \le N \le 2 \times 10^5$</Latex>
                        </li>
                        <li>
                            <Latex>$1 \le A_i \le 10^9$</Latex>
                        </li>
                        <li>
                            <Latex>All values in the input are integers</Latex>
                        </li>
                    </ul>

                    <h3> I/O Format </h3>
                    <div className="mockup-code">
                        <pre className="m-0 py-0">
                            <code>
                                <Latex>$N$</Latex>
                            </code>
                        </pre>
                        <pre className="m-0 py-0">
                            <code>
                                <Latex>$A_1$ $A_2$ $\cdots$ $A_N$</Latex>
                            </code>
                        </pre>
                    </div>

                    <h3> Analysis </h3>
                    <p>
                        {" "}
                        <Latex>
                            First of all, if you have any ideas of using brute
                            force to find the value of $k$, then let's scrap
                            that idea. It can be proven that the value of $k$
                            can be very large (up to $10^9$!). The constraints
                            also spoils that we aren't going to have a
                            complexity greater than (about) linear.
                        </Latex>
                    </p>
                    <p>
                        {" "}
                        <Latex>
                            An interesting observation you may find is that our
                            answer will not exceed $2$. It is not difficult to
                            see this as if we let $k = 2$, $A'_i$ will only be
                            either $0$ or $1$ depending on their parity (even or
                            odd respectively).
                        </Latex>
                    </p>
                    <p>
                        {" "}
                        <Latex>
                            Thanks to this observation, the problem becomes much
                            simpler! We can restate the problem to "Can we find
                            $k$ such that $A_i$ $mod$ $k$ is same for all $i$?".
                            We're using the fact that if our answer is not $1$,
                            it must be $2$.
                        </Latex>
                    </p>
                    <p>
                        {" "}
                        <Latex>
                            But here's the more difficult part: how do we do
                            this in linear-ish time? Let's solve a smaller
                            version of this problem: we'll only consider two
                            integers $a$ and $b$. We want to find $k$ such that
                            $a$ $mod$ $k = b$ $mod$ $k$. This basically means
                            that find $k$ such that $k$ divides $a - b$. A
                            simple proof can be as follows: $a - b$ $(mod$ $k) =
                            a$ $mod$ $k - b$ $mod$ $k$. Since $a$ $mod$ $k = b$
                            $mod$ $k$, then $a$ $mod$ $k - b$ $mod$ $k = 0$.
                            This shows that $a - b$ $(mod$ $k) = 0$ and thus
                            divisible by $k$.
                        </Latex>
                    </p>
                    <p>
                        <Latex>
                            If for two integers it works as follows, then for a
                            general case where there are $N$ integers, we must
                            find $k$ such that $k$ divides $A_i - A_j$ for all
                            pairs of $(i, j)$ and $A_i \gt A_j$. We can use GCD
                            (Greatest Common Divisor) to solve this. But
                            iterating through all pairs of $(i, j)$ is
                            time-consuming.
                        </Latex>
                    </p>
                    <p>
                        <Latex>
                            Instead, let $A$ be sorted. Due to the properties of
                            GCD, $gcd(gcd(a, b), gcd(a, c), gcd(b, c)) = gcd(a,
                            b, c)$. Now we can solve this in linear time. Our
                            total complexity is $O(N log N)$ with our $log N$
                            being sorting and GCD.
                        </Latex>
                    </p>
                    <h3> Final Remarks </h3>
                    <p>
                        Now it's done and I hope you do understand whatever I am talking about. It's nearly 2 AM I'll log out now. 
                    </p>
                    <h3> Links </h3>
                    <ul>
                        <li> <a href = "https://atcoder.jp/contests/arc148/tasks/arc148_a">Problem</a> </li>
                        <li> <a href = "https://atcoder.jp/contests/arc148/submissions/34787022">My Solution</a> </li>
                    </ul>
                </article>
            </div>
        );
    }
}

export default P120920220039;
