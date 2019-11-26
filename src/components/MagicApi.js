import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MTGCards from './MTGCards';
import {Container, Row} from 'reactstrap';

function MagicApi() {
	// Add your function name here
	const [info, setInfo] = useState([]);
	useEffect(() => {
		axios
			.get('https://api.magicthegathering.io/v1/cards') 
			.then(data => {
				console.log('API Info Here', data.data); 
				setInfo(data.data.cards);
			})
			.catch(error => {
				console.log('Whoops go back, thats an error!', error);
			});
	}, []);
	console.log(info);

	


	return (
    <Container> 
        <Row>
	{info.map(list => {
	return <MTGCards   url={list.imageUrl} artist={list.artist} name={list.name} desc={list.text} color1={list.colorIdentity} color2={list.colors} mana={list.manaCost} num={list.number} type={list.type} set1={list.set} set2={list.setName} />;
  })}
  </Row>
</Container>
    );
}
export default MagicApi;