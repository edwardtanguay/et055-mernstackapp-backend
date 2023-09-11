import fs from 'fs';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 4201;

app.get('/', (req, res) => {
	res.send(`
<h1>MERN APP API</h1>

<ul>
	<li>/ = main site</li>
</ul>
	`);
});

app.get('/employees', (req, res) => {
	const jsonEmployees = fs.readFileSync('./src/data/employees.json', 'utf8');
	const employees = JSON.parse(jsonEmployees);
	res.send(employees);
});

// app.delete('/employee/:id', (req, res) => {
// 	const { id } = req.params;
// 	res.send(`Deleting employee #${id}`);
// });

app.listen(port, () => {
	console.log(`listening on port http://localhost:${port}`);
})

