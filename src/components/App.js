import React from 'react';

const App = () => (
	<div className="flex justify-center items-center text-center h-screen">
		<div>
			<h1 className="text-5xl">
				<span role="img" aria-label="Bolt">
					⚡
				</span>{' '}
				React Bolt + Tailwind
			</h1>
			<p className="text-2xl">
				Light version of{' '}
				<a
					className="text-blue-400"
					href="https://github.com/leonardomso/react-bolt"
					target="_blank"
				>
					the most simple and robust React
					boilerplate.
				</a>
			</p>
			<p className="text-xl">
				Read the article{' '}
				<a
					className="text-blue-400"
					href="https://medium.freecodecamp.org/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a"
					target="_blank"
				>
					here.
				</a>
			</p>
		</div>
	</div>
);

export default App;
