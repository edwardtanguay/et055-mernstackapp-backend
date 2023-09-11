import express from 'express';

const app = express();
const port = 4201;

app.get('/', (req, res) => {
	res.send('the backend works');
});

app.get('/employees', (req, res) => {
	res.send([
		{
			firstName: 'Hans'
		},
		{
			firstName: 'Alice'
		}
	]);
});

app.delete('/employee/:id', (req, res) => {
	const { id } = req.params;
	res.send(`Deleting employee #${id}`);
});

app.listen(port, () => {
	console.log(`listening on port http://localhost:${port}`);
})

