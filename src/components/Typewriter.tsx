import React, { useState, useEffect } from 'react';

interface TypewriterProps {
	jobs?: any[];
	className?: string;
}

const defaultWords = [
	'Full-Stack Developer',
	'Frontend Developer',
	'Product Owner',
	'Backend Developer',
	'Software Architect',
	'Scrum Master',
	'Test Engineer',
	'DevOps Engineer',
	'UI/UX Designer',
	'Security Engineer',
	'Business Analyst',
	'System Administrator',
	'Tech Lead'
];

const Typewriter: React.FC<TypewriterProps> = ({ jobs = defaultWords, className }) => {
	const words: string[] = jobs.map((job) => job.job_title);
	const [currentWord, setCurrentWord] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [loop, setLoop] = useState(0);
	const [speed, setSpeed] = useState(50);

	useEffect(() => {
		const handleTyping = () => {
			const current = words[loop % words.length];
			const updatedText = isDeleting
				? current.substring(0, currentWord.length - 1)
				: current.substring(0, currentWord.length + 1);

			setCurrentWord(updatedText);

			if (!isDeleting && updatedText === current) {
				setIsDeleting(true);
				setSpeed(800);
			} else if (isDeleting && updatedText === '') {
				setIsDeleting(false);
				setLoop(loop + 1);
				setSpeed(50);
			} else {
				setSpeed(isDeleting ? 30 : 50);
			}
		};

		const typingTimeout = setTimeout(handleTyping, speed);

		return () => clearTimeout(typingTimeout);
	}, [currentWord, isDeleting, loop, speed, words]);

	return (
		<span className={className}>{currentWord || '\u00A0'}</span>
	);
};

export default Typewriter;
