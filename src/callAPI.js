const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

const cors = require('cors');
app.use(cors());

app.get('/data', (req, res) => {


    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, access-control-allow-methods');
    res.setHeader('Access-Control-Allow-Origin', '*');

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'api-key': 'Ubttr6diuDpcIBGUcuLPNkgR7wor6Ob3FcxFO5coNAFriIXo6Diw9hdGx7a0CLAk',
            'Accept':  'application/json',
            'Access-Control-Allow-Origin' : 'http://localhost:3000',
            'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers' :  'Origin, X-Requested-With, Content-Type, Accept, Authorization'

          }
        };

        console.log('Going to call a post');
        response = axios.get('https://us-east-2.aws.data.mongodb-api.com/app/data-ndyky/endpoint/searchText?arg1='+req.query.serachQuery,
                  config)

                 .then((response) => {
                     console.log(response.data.length);
                        if(response.data.length > 0){
                         res.send(response.data);
                        } else
                        res.send('No Record Found');
                   })
                   .catch((error) => {
                     console.error(error);
                   });

});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});