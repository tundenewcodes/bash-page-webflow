import {Col, Row } from "react-bootstrap";
// import { linksData } from "../../../assets/data/what-i-do/whatIDo";
// import LinkCard from "../LinkCard";

type Props = {};

const BioCards = (props: Props) => {


  return (
    
      <Row >
        {/* {linksData.map((linksdata) => (
          <Col xs={12} sm={12} md={6} lg={4} key={linksdata.id}>
            <LinkCard {...linksdata} />
          </Col>
        ))} */}
      </Row>
    
  );
};

export default BioCards;
