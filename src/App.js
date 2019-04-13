import React, { useState } from 'react';
import { SearchInput } from './components/SearchInput.js';
import { WhatIsThis } from './components/WhatIsThis.js';

export function App() {
	const [text, setText] = useState('');
	const [includeArchived, setIncludeArchived] = useState(false);
	return (
		<section>
			<WhatIsThis />
			<p>
				Type a search then press enter or click on the magnifying glass
			</p>
			<SearchInput
				type="text"
				size="40"
				value={text}
				onUpdate={setText}
				placeholder="Type something"
			>
				&nbsp; &nbsp;{' '}
				<input
					type="checkbox"
					value={includeArchived}
					onChange={setIncludeArchived}
				/>{' '}
				Include archived items
			</SearchInput>
			{text ? (
				<p>
					Showing results for "{text}"{' '}
					{includeArchived ? 'including' : 'excluding'} archived items
				</p>
			) : (
				<p>No search yet</p>
			)}
		</section>
	);
}
