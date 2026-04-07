import React from "react";
import kotlin from "../assets/kotlin.png";
import java from "../assets/java.png";
import android from "../assets/android.png";
import swift from "../assets/swift.png";
import git from "../assets/git.png";
import firebase from "../assets/firebase.png";

const techStack = [
    { name: "Kotlin", icon: kotlin },
    { name: "Java", icon: java },
    { name: "Android", icon: android },
    { name: "Swift", icon: swift },
    { name: "Git", icon: git },
    { name: "Firebase", icon: firebase },
];

const TechStack = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-3 gap-6 place-items-center">
                {techStack.map((tech) => (
                    <div
                        key={tech.name}
                        className="w-20 h-20 rounded-full bg-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                    >
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-10 h-10 object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;