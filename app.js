const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
	  res.status(200).send({
		      success: 'true',
		      message: 'Hello World API',
		      version: '1.0.0',
		    });
});
app.listen(port);
console.log('Acesso por', port);
