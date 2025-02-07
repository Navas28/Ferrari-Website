import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
    let heroData = [
        { text1: "Experience", text2: "The F80 Thrill" },
        { text1: "Unleash", text2: "Pure Power" },
        { text1: "Drive Into", text2: "The Future" },
        { text1: "Master", text2: "The Speed" },
        { text1: "Conquer", text2: "With Style" },
    ];

    const [heroCount, setHeroCount] = useState(4);
    const [playStatus, setPlayStatus] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setHeroCount((count) => {
                return count === 4 ? 0 : count + 1;
            });
        }, 3000);
    }, []);

    return (
        <div>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Navbar />
            <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
            />
        </div>
    );
};

export default App;
