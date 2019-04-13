import React, { useState } from 'react';
import './SearchInput.css';

export function SearchInput({ value, onUpdate, children, ...props }) {
	const [text, setText] = useState(value);
	// render
	return (
		<form onSubmit={onSubmit} className="Component ClearableInput">
			<span className="faux-input">
				<input
					className="input"
					value={text}
					onChange={onChange}
					{...props}
				/>
				<button
					className="clear"
					onClick={clear}
					style={{ visibility: value ? 'visible' : 'hidden' }}
				>
					&times;
				</button>
				<button role="img" className="submit">
					🔍
				</button>
			</span>
			{children}
		</form>
	);

	function onChange(event) {
		setText(event.target.value);
	}

	function onSubmit(event) {
		event.preventDefault();
		onUpdate(text);
	}

	function clear() {
		setText('');
		onUpdate('');
	}
}

// DataTable
// FileUpload / Draggable
