import { useState } from 'react';
import {
	Button,
	Card,
	CardContent,
	FormControl,
	Grid,
	Input,
	Typography,
} from '@material-ui/core';
import { item, TodoListView } from './view';

const TodoPage = () => {
	const [items, setItems]: [Array<item>, any] = useState([]);
	const [value, setValue]: [string, any] = useState('');

	/**
	 * Takes a list of items to replace the current items
	 * @param items - List of items to replace items with
	 */
	const update = (items: Array<item>) => setItems(items);

	/**
	 * Takes an item value and creates a new item, appending it the items
	 * @param val - Value to create a new item with
	 */
	const add = (val: string) => {
		let copy: Array<item> = items;
		const len: number = items.length;
		const id: number = len > 0 ? items[len].id + 1 : 1;
		const newItem: item = {
			id: id,
			value: val,
			checked: false,
		};
		copy.push(newItem);
		update(copy);
	};

	/**
	 * Take an item and removes it from items, if it exists
	 * @param id - Id of the item to be removed
	 */
	const remove = (id: number) => {
		let updated: Array<item> = items.filter((item) => item.id !== id);
		update(updated);
	};

	// Event handlers
	const changeHandler = (i: string) => setValue(i);

	const removeHandler = (id: number) => remove(id);

	const submissionHandler = (i: string) => {
		if (i !== '') {
			add(i);
		}
		setValue('');
	};

	return (
		<Grid
			container
			direction="column"
			justify="flex-start"
			alignItems="center"
			style={{
				marginTop: '1rem',
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		>
			<Card style={{ backgroundColor: '#e6e6e6', padding: '1rem' }}>
				<CardContent>
					<FormControl>
						<Typography
							variant="h5"
							component="h2"
							align="center"
							style={{
								borderBottom: '0.5px solid rgba(0, 0, 0, .2)',
							}}
						>
							Todo List
						</Typography>
						<TodoListView
							items={items}
							removeHandler={removeHandler}
						/>
						<Input
							id="todo-input"
							type="text"
							style={{ paddingTop: '1.5rem' }}
							placeholder="Enter item..."
							value={value}
							onChange={(e) => changeHandler(e.target.value)}
						/>
						<Button
							style={{
								marginTop: '1rem',
								backgroundColor: '#dddddd',
							}}
							onClick={() => submissionHandler(value)}
						>
							Submit
						</Button>
					</FormControl>
				</CardContent>
			</Card>
		</Grid>
	);
};

export { TodoPage };
