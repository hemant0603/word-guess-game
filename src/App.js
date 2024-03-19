import React, { useState, useEffect } from "react"; 
import Logo from "./WordGuessGame.png";
import "./App.css"; 

const sampleWords = [
 
  { word: "PYTHON", description: "A high-level programming language known for its simplicity and readability." },
  { word: "COMPUTER", description: "An electronic device that processes data and performs tasks according to instructions." },
  { word: "INTERNET", description: "A global network that connects millions of computers worldwide." },
  { word: "DATABASE", description: "A structured collection of data organized for efficient retrieval." },
  { word: "ALGORITHM", description: "A set of step-by-step instructions for solving a problem or completing a task." },
  { word: "NETWORK", description: "A group of interconnected computers or devices that can communicate with each other." },
  { word: "ANALYSIS", description: "The process of examining data and extracting useful information from it." },
  { word: "DEVELOPER", description: "A person who designs, creates, and maintains software applications or systems." },
  { word: "DEBUGGING", description: "The process of identifying and fixing errors or defects in software code." },
  { word: "FRAMEWORK", description: "A pre-built structure or set of tools used to facilitate software development." },
  { word: "OPERATING", description: "The system software that manages computer hardware and software resources." },
  { word: "SECURITY", description: "The protection of computer systems and data from unauthorized access or damage." },
  { word: "FUNCTION", description: "A named block of code that performs a specific task and can be reused." },
  { word: "PERFORMANCE", description: "The speed and efficiency with which a system or software operates." },
  { word: "VERSION", description: "A specific release or iteration of software, usually identified by a version number." },
  { word: "DOCUMENTATION", description: "Written information about a software product, including instructions, guides, and reference materials." },
  { word: "INTERFACE", description: "A point of interaction between components, devices, or systems." },
  { word: "PARADIGM", description: "A fundamental concept or approach used in software design and development." },
  { word: "MOBILE", description: "Relating to or designed for use with mobile devices such as smartphones and tablets." },
  { word: "COMPILER", description: "A software tool that translates source code written in a programming language into machine code." },
  { word: "OPTIMIZATION", description: "The process of making software or systems perform better in terms of speed, efficiency, or resource usage." },
  { word: "INTERFACE", description: "A point of interaction between components, devices, or systems." },
  { word: "DEPLOYMENT", description: "The process of making software available for use in a production environment." },
  { word: "FRAMEWORK", description: "A pre-built structure or set of tools used to facilitate software development." },
  { word: "METHOD", description: "A procedure or function associated with an object or class in object-oriented programming." },
  { word: "ALGORITHM", description: "A set of step-by-step instructions for solving a problem or completing a task." },
  { word: "FRAMEWORK", description: "A pre-built structure or set of tools used to facilitate software development." },
  { word: "LIBRARY", description: "A collection of reusable code and routines that can be used by software developers to simplify programming tasks." },
  { word: "DEBUGGING", description: "The process of identifying and fixing errors or defects in software code." },
  { word: "DATABASE", description: "A structured collection of data organized for efficient retrieval." },
  { word: "CONCURRENCY", description: "The ability of a system to execute multiple tasks or processes simultaneously." },
  { word: "BACKEND", description: "The part of a software system or application that handles data processing and storage." },
  { word: "FRONTEND", description: "The part of a software system or application that interacts with users and presents data." },
  { word: "DATA", description: "Information processed or stored by a computer system, often in the form of numbers, text, or multimedia." },
  { word: "SERVER", description: "A computer or device that provides resources, data, or services to other computers or devices on a network." },
  { word: "CLIENT", description: "A computer or device that requests resources, data, or services from a server on a network." },
  { word: "CACHE", description: "A temporary storage area used to store frequently accessed or recently used data." },
  { word: "DATABASE", description: "A structured collection of data organized for efficient retrieval." },
  { word: "AGILE", description: "A software development methodology that emphasizes iterative and incremental development, collaboration, and flexibility." },
  { word: "SCRUM", description: "A specific agile framework for managing software development projects." },
  { word: "WATERFALL", description: "A traditional software development methodology characterized by sequential phases and a linear approach." },
  { word: "SOLID", description: "An acronym representing five principles of object-oriented programming and design." },
  { word: "PRINCIPLES", description: "Fundamental concepts or rules governing a particular domain or field." },
  { word: "INTERFACE", description: "A point of interaction between components, devices, or systems." },
  { word: "COMPONENT", description: "A modular, reusable building block of software that performs a specific function." },
  { word: "REFACTORING", description: "The process of restructuring existing code without changing its external behavior to improve readability, maintainability, or performance." },
  { word: "ENCRYPTION", description: "The process of converting data into a format that is unreadable without a decryption key, used for secure communication and storage." },
  { word: "DECRYPTION", description: "The process of converting encrypted data back into its original, readable format using a decryption key." },
  { word: "FUNCTIONAL", description: "A programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data." },
  { word: "PARADIGM", description: "A fundamental concept or approach used in software design and development." },
  { word: "DESIGN", description: "The process of creating the structure and organization of a software system or application." },
  { word: "PATTERN", description: "A recurring solution or design that addresses a specific problem or challenge in software development." },
  { word: "VERSION", description: "A specific release or iteration of software, usually identified by a version number." },
  { word: "LOGGING", description: "The practice of recording events, actions, or messages in a software system for analysis, debugging, or auditing purposes." },
  { word: "PERMISSION", description: "Authorization or access rights granted to users or systems to perform specific actions or tasks." },
  { word: "SECURITY", description: "The protection of computer systems and data from unauthorized access or damage." },
  { word: "AUTHENTICATION", description: "The process of verifying the identity of a user, system, or device." },
  { word: "AUTHORIZATION", description: "The process of granting or denying access to specific resources or actions based on authentication and permissions." },
  { word: "RESPONSIVE", description: "Designing software or websites to adapt and provide optimal user experience across different devices and screen sizes." },
  { word: "UI/UX", description: "User Interface/User Experience, focusing on the design and usability of software or websites." },
  { word: "ANIMATION", description: "The technique of creating the illusion of motion through a sequence of images or frames." },
  { word: "PERFORMANCE", description: "The speed and efficiency with which a system or software operates." },
  { word: "COMPATIBILITY", description: "The ability of software or hardware to function correctly with other systems or components." },
  { word: "DEPENDENCY", description: "A relationship between two components where changes in one may affect the other." },
  { word: "FRAMEWORK", description: "A pre-built structure or set of tools used to facilitate software development." },
  { word: "REPOSITORY", description: "A storage location where version-controlled files and data are kept, often used in collaboration with version control systems." },
  { word: "MERGE", description: "Combining changes from different branches in a version control system." },
  { word: "COMMIT", description: "A specific revision or snapshot of changes made to a codebase in version control." },
  { word: "PULL REQUEST", description: "A proposed set of changes submitted by a developer for review and integration into a codebase." },
  { word: "BUG", description: "An error, flaw, or unintended behavior in software that prevents it from functioning as intended." },
  { word: "DEBUGGING", description: "The process of identifying and fixing errors or defects in software code." },
  { word: "TESTING", description: "The process of evaluating software to ensure it behaves as expected and meets specified requirements." },
  { word: "UNIT TEST", description: "A type of testing where individual components or functions of a software system are tested in isolation." },
  { word: "INTEGRATION", description: "Testing the combination of individual components or systems to verify their interaction and compatibility." },
  { word: "END-TO-END", description: "Testing the entire software system to ensure all components work together as expected." },
];


const getRandomWord = () => { 
	const randomPlace = Math.floor(Math.random() * sampleWords.length); 
	return sampleWords[randomPlace]; 
}; 

const WordGame = () => { 
	const [wordData, setWordData] = useState(getRandomWord()); 
	const [msg, setMsg] = useState(""); 
	const [chosenLetters, setChosenLetters] = useState([]); 
	const [hints, setHints] = useState(3); 
	const [displayWord, setDisplayWord] = useState(false); 
	const [wrongGuesses, setWrongGuesses] = useState(0); 

	useEffect(() => { 
		if (wrongGuesses >= 3) { 

			window.alert("Game Over! You made too many wrong guesses."); 
			restartGameFunction(); 
		} 
	}, [wrongGuesses]); 

	const letterSelectFunction = (letter) => { 
		if (!chosenLetters.includes(letter)) { 
			setChosenLetters([...chosenLetters, letter]); 
			if (!wordData.word.includes(letter)) { 
				setWrongGuesses(wrongGuesses + 1); 
			} 
		} 
	}; 

	const hintFunction = () => { 
		if (hints > 0) { 
			const hiddenLetterIndex = wordData.word 
				.split("") 
				.findIndex((letter) => !chosenLetters.includes(letter)); 
			setChosenLetters([...chosenLetters, wordData.word[hiddenLetterIndex]]); 
			setHints(hints - 1); 
		} 
	}; 

	const removeCharacterFunction = () => { 
		setChosenLetters(chosenLetters.slice(0, -1)); 
	}; 

	const displayLettersFunction = () => { 
		const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

		return Array.from(letters).map((letter, index) => ( 
			<button 
				key={index} 
				onClick={() => letterSelectFunction(letter)} 
				disabled={chosenLetters.includes(letter)} 
				className={`letter-button ${ 
					chosenLetters.includes(letter) ? "selected" : ""
				}`} 
			> 
				{letter} 
			</button> 
		)); 
	}; 

	const checkWordGuessedFunction = () => { 
		return wordData.word.split("").every((letter) => chosenLetters.includes(letter)); 
	}; 

	const guessFunction = () => { 
		if (checkWordGuessedFunction()) { 
			setMsg("Congratulations!!! You have guessed the word correctly!"); 
		} else { 
			setMsg("You made a Wrong Guess!. Try again!"); 
			setDisplayWord(true); 
		} 
	}; 

	const restartGameFunction = () => { 
		setWordData(getRandomWord()); 
		setMsg(""); 
		setChosenLetters([]); 
		setHints(3); 
		setDisplayWord(false); 
		
		setWrongGuesses(0); 
	}; 

	return ( 
		<div className="container"> 
         <img src = {Logo} alt="logo"/>
			 
			<div className="word-container"> 
				{Array.from(wordData.word).map((letter, index) => ( 
					<div 
						key={index} 
						className={`letter ${ 
							chosenLetters.includes(letter) ? "visible" : ""
						}`} 
					> 
						{chosenLetters.includes(letter) ? letter : ""} 
					</div> 
				))} 
			</div> 
			<p className="word-description">Hint: {wordData.description}</p> 
			{msg && ( 
				<div className="message"> 
					<p>{msg}</p> 
					{displayWord && <p>Correct word was: {wordData.word}</p>} 
				</div> 
			)} 
			<div className="button-section"> 
				<div className="guess-section"> 
					<button 
						onClick={restartGameFunction} 
						className="restart-button"
					> 
						Restart 
					</button> 
					<button 
						onClick={removeCharacterFunction} 
						disabled={!chosenLetters.length} 
						className="remove-button"
					> 
						Remove Letter 
					</button> 
				</div> 
				<div className="letter-selection"> 
					{displayLettersFunction()} 
				</div> 
				<div className="hints"> 
					Hints Remaining: {hints}{" "} 
					<button 
						onClick={hintFunction} 
						disabled={hints === 0} 
						className="hint-button"
					> 
						Get Hint 
					</button> 
				</div> 
				{!msg && ( 
					<button 
						onClick={guessFunction} 
						disabled={!chosenLetters.length} 
						className="guess-button"
					> 
						Guess 
					</button> 
				)} 
			</div> 
		</div> 
	); 
}; 

export default WordGame; 
