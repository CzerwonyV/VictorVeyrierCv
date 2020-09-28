import React from "react";
import { Button } from "reactstrap";
import './Btn.css';

const BtnActu = () => {
  return (
    <div className="BtnActuContent">
      <div className="CercleBtn">
        <Button color="link" className="BtnWild">
          <a
            href="https://www.trott-app.com/"
            target="_blank"
            rel="noopener noreferrer" 
            className=""
          >
            <img src="https://user-images.githubusercontent.com/57908921/94474687-4821d680-01ce-11eb-8790-2bc5b74484ba.png" alt="BtnWild" className="ImgWild" />
          </a>
        </Button>
      </div>
      <div className="TitleActuContent">
        <h4 className="TitleActu">Mon actu :</h4>
      </div>
    </div>
  );
};

export default BtnActu;
