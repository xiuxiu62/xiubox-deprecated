import { Grid, Checkbox, Box, Button } from '@material-ui/core';
import { CloseOutlined } from '@material-ui/icons';
import { useState } from 'react';

type item = {
	id: number;
	value: string;
	checked: boolean;
};

const TodoView = (props: { item: item; removeHandler: any }) => {
	const { item, removeHandler } = props;

	const [checked, setChecked] = useState(item.checked);
	const changeHandler = () => setChecked(!checked);

	return (
		<Grid
			container
			direction="row"
			justify="flex-start"
			alignItems="center"
			style={{ marginTop: '0.5rem' }}
		>
			<Checkbox checked={checked} onChange={changeHandler} />
			<Box>
				{item.value} : {item.id}
			</Box>
			<Button
				style={{ alignSelf: 'right' }}
				onClick={() => removeHandler(item.id)}
			>
				<CloseOutlined />
			</Button>
		</Grid>
	);
};
const TodoListView = (props: { items: Array<item>; removeHandler: any }) => {
	const { items, removeHandler } = props;

	return (
		<div>
			{items.map((item) => (
				<TodoView item={item} removeHandler={removeHandler} />
			))}
		</div>
	);
};

export type { item };
export { TodoListView };
