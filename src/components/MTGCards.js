import React from 'react';
import{Jumbotron,Container, Col} from 'reactstrap';
import s from 'styled-components';


const center = {
    margin: '0 auto',
    width: '50%',
};

const center2= {
    marginLeft: '18%'
}
 const center3 ={
     marginLeft: '15%'
 }




function MTGCards ({ url, artist, name, desc, color1, color2, mana, num, type, set1, set2}) {
     

    return(
        <Col lg='2'>
     <div>
        <section>
           
           <Container>
            <Jumbotron style={center}>
            <img src={url} alt= 'Card' style={center} />
            <h6 style={center2}>Artist: {artist}</h6>
            <p style={center3}>{set1} {set2} {num} </p>
            </Jumbotron>
            </Container>
          
            
           
        <div>
            <h1>{name}</h1>
            <p>{desc}</p>
        </div>
        <div>
            <h2>Information</h2>
            <p>Color: {color1} ColorList: {color2}  Cost: {mana} Type: {type}</p>
        </div>
    
        </section>
    </div>
    </Col>
    );
}


export default MTGCards

