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
import { v4 as uuid } from 'uuid';

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
		const newItem: item = {
			id: uuid(),
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
	const remove = (id: string) => {
		let updated: Array<item> = items.filter((item) => item.id !== id);
		update(updated);
	};

	/**
	 * Updates text form field
	 * @param val - Value to update the local state
	 */
	const changeHandler = (val: string) => setValue(val);

	/**
	 * Removes an item by id
	 * @param id - Item id
	 */
	const removeHandler = (id: string) => remove(id);

	/**
	 * Appends a new item to items
	 * @param val - Value to of the item being created
	 */
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
