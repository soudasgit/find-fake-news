import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayNews(props) {

  console.log('props passed properly');
  console.log("Here is is passed props"+props.searchTerm);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

    const renderRows = (object) => {
        return object.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.author}</td>
              <td>{item.statement}</td>
              <td>{item.source}</td>
              <td>{item.date}</td>
            </tr>
          );
        });
      };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://164.152.23.144/data?serachQuery='+props.searchTerm);
//      console.log(response.data);
//      console.log(JSON.parse(JSON.stringify(response.data)));
        setData(JSON.parse(JSON.stringify(response.data)));
//        setData(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, []);

//  useEffect(() => {
//
//   const config = {
//        headers: {
//          'Content-Type': 'application/json',
//          'api-key': 'Ubttr6diuDpcIBGUcuLPNkgR7wor6Ob3FcxFO5coNAFriIXo6Diw9hdGx7a0CLAk',
//          'Accept':  'application/json',
//          'Access-Control-Allow-Origin' : 'http://localhost:3000',
//          'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS',
//          'Access-Control-Allow-Headers' :  'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//        }
//      };
//    const fetchData = async () => {
//      try {
//        const response = await axios.get('https://us-east-2.aws.data.mongodb-api.com/app/data-ndyky/endpoint/searchText?arg1=Trump',  config);
//        console.log(response.data);
//        setData(JSON.parse(JSON.stringify(response.data)));
//      } catch (error) {
//        console.log(error);
//        setError(error);
//      }
//    };
//    fetchData();
//  }, []);

  return (


    <div>
    <div>
      <table border="1" style={{border: '1px solid #fff'}}>
        <thead>
          <tr>
            <th>Author</th>
            <th>Statement</th>
            <th>Source</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
             {renderRows(data)}
        </tbody>
      </table>
    </div>
    <div>
           {error && <p>{error.message}</p>}
    </div>
    </div>
//
  );
}
//    {items.map((item) => (
//            <li key={item.id}>{item.name}</li>
//          ))}
export default DisplayNews;