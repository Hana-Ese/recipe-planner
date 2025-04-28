function BackgroundPattern() {
	return (
		<div
			className="absolute top-0 left-0 w-full h-full bg-[url('/background-pattern.svg')] bg-cover bg-no-repeat opacity-10 z-0"
			aria-hidden="true"
		></div>
	);
}

export default BackgroundPattern;