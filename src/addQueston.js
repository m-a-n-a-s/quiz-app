import { addDoc, collection } from 'firebase/firestore';
import {db} from './firebase'
function Addquest() {
    var quest = [
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In any programming language, what is the most common way to iterate through an array?",
            "correct_answer": "&#039;For&#039; loops",
            "incorrect_answers": [
                "&#039;If&#039; Statements",
                "&#039;Do-while&#039; loops",
                "&#039;While&#039; loops"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "When Gmail first launched, how much storage did it provide for your email?",
            "correct_answer": "1GB",
            "incorrect_answers": [
                "512MB",
                "5GB",
                "Unlimited"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What does GHz stand for?",
            "correct_answer": "Gigahertz",
            "incorrect_answers": [
                "Gigahotz",
                "Gigahetz",
                "Gigahatz"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "The programming language &#039;Swift&#039; was created to replace what other programming language?",
            "correct_answer": "Objective-C",
            "incorrect_answers": [
                "C#",
                "Ruby",
                "C++"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "HTML is what type of language?",
            "correct_answer": "Markup Language",
            "incorrect_answers": [
                "Macro Language",
                "Programming Language",
                "Scripting Language"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What amount of bits commonly equals one byte?",
            "correct_answer": "8",
            "incorrect_answers": [
                "1",
                "2",
                "64"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which computer hardware device provides an interface for all other connected devices to communicate?",
            "correct_answer": "Motherboard",
            "incorrect_answers": [
                "Central Processing Unit",
                "Hard Disk Drive",
                "Random Access Memory"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
            "correct_answer": "Binary",
            "incorrect_answers": [
                "JavaScript",
                "C++",
                "Python"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What does the Prt Sc button do?",
            "correct_answer": "Captures what&#039;s on the screen and copies it to your clipboard",
            "incorrect_answers": [
                "Nothing",
                "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
                "Closes all windows"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
            "correct_answer": "HD Graphics 500",
            "incorrect_answers": [
                "HD Graphics 700 ",
                "HD Graphics 600",
                "HD Graphics 7000"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In web design, what does CSS stand for?",
            "correct_answer": "Cascading Style Sheet",
            "incorrect_answers": [
                "Counter Strike: Source",
                "Corrective Style Sheet",
                "Computer Style Sheet"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the code name for the mobile operating system Android 7.0?",
            "correct_answer": "Nougat",
            "incorrect_answers": [
                "Ice Cream Sandwich",
                "Jelly Bean",
                "Marshmallow"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "How many kilobytes in one gigabyte (in decimal)?",
            "correct_answer": "1000000",
            "incorrect_answers": [
                "1024",
                "1000",
                "1048576"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
            "correct_answer": "Green",
            "incorrect_answers": [
                "Red",
                "Blue",
                "Yellow"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which computer language would you associate Django framework with?",
            "correct_answer": "Python",
            "incorrect_answers": [
                "C#",
                "C++",
                "Java"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "This mobile OS held the largest market share in 2012.",
            "correct_answer": "iOS",
            "incorrect_answers": [
                "Android",
                "BlackBerry",
                "Symbian"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "How many values can a single byte represent?",
            "correct_answer": "256",
            "incorrect_answers": [
                "8",
                "1",
                "1024"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which programming language shares its name with an island in Indonesia?",
            "correct_answer": "Java",
            "incorrect_answers": [
                "Python",
                "C",
                "Jakarta"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In computing, what does MIDI stand for?",
            "correct_answer": "Musical Instrument Digital Interface",
            "incorrect_answers": [
                "Musical Interface of Digital Instruments",
                "Modular Interface of Digital Instruments",
                "Musical Instrument Data Interface"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What language does Node.js use?",
            "correct_answer": "JavaScript",
            "incorrect_answers": [
                "Java",
                "Java Source",
                "Joomla Source Code"
            ]
        }
    ]

    // quest.forEach(function (obj) {
    //     var idx = 1;
    //     db.collection("questions").add({
    //         id: idx,
    //         question: obj.question,
    //         correct_answer: obj.correct_answer,
    //         incorrect_answers: obj.incorrect_answers,
    //     });
    //     idx = idx + 1;
    //     console.log("question:", idx - 1);
    //     alert("question:", idx - 1);
    // });

    for (let i=0;i<quest.length;i++){
        addDoc(collection(db,"questions"),{
            qid:i+1,
            question: quest[i].question,
            correct_answer: quest[i].correct_answer,
            incorrect_answers: quest[i].incorrect_answers,
        });
        console.log("added Question:",i+1);
    }
    return null;
}
export default Addquest;