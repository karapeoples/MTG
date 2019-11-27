import React from 'react';
import{Jumbotron, Container, Col} from 'reactstrap';
import s from 'styled-components';


const center = {
    margin: '0 auto',
    width: '100%',
};



const width = {
    width: '100%',
}

const InfoDiv= s.div`
 width:100%,
 
`


const center1= {
    textAlign: 'center',
    
}


function MTGCards ({ url, artist, name, desc, color1, color2, mana, num, type, set1, set2}) {
     

    return(
        <Col lg='4'>
     <div>
        
        <Jumbotron className='jumbo'>
           <Container style={center}>
                <img src={url} alt= 'Card' style={width} />
            </Container>
                <InfoDiv>
                    <h5 style={center1}>Artist: {artist}</h5>
                    <p style= {center1}>{set1} {set2} {num} </p>
                </InfoDiv>
          </Jumbotron>
        
           
        <div className='infodiv'>
            <h1 style= {center1}>{name}</h1>
            <p style= {center1}>{desc}</p>
            <h2 style= {center1}>Information</h2>
            <p style= {center1}>Color: {color1} ColorList: {color2}  Cost: {mana} Type: {type}</p>
        </div>
    
        
    </div>
    </Col>
    );
}


export default MTGCards

