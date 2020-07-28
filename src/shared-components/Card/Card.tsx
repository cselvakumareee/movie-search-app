import React, { useState } from "react";
import "./Card.scss";
import { connect } from "react-redux";
import heartfilled from "../../Assets/heartfilled.svg";
import heartoutlined from "../../Assets/heartoutlined.svg";
import axios from "axios";
import * as actionCreator from "../../Store/ActionCreator";
import { Link } from "react-router-dom";

const Card = (props: any) => {
  const [isFav, setFav]: any = useState(false);
  const [detailData, setDetailData]: any = useState([]);
  const postDataToserver = (cardObj: any) => {
    setFav(true);
    props.cardData.isFav = true;
    props.cardData.key = Date.now();
    axios
      .post(
        "https://movie-search-app-afa7b.firebaseio.com/favourites.json",
        props.cardData
      )
      .then((res: any) => {
        console.log("data " + res);
      })
      .catch((err: any) => {
        console.log("data err " + err);
      });
  };
  const delDataInserver = () => {
    //setFav(false);
  };

  let favIcon: any = [];
  if (!isFav) {
    favIcon = (
      <img
        src={heartoutlined}
        onClick={() => postDataToserver(props.cardData)}
        width="30px"
        height="30px"
      />
    );
  } else {
    favIcon = (
      <img
        src={heartfilled}
        onClick={delDataInserver}
        width="30px"
        height="30px"
      />
    );
  }

  const gotoDetailView = (data: any) => {
    props.onAddCardData(data);
  };

  return (
    <div className="card">
      <div className="img-block">
        <img src={props.cardData.Poster} />
      </div>
      <div className="content-block">
        <div className="title">
          <Link
            to="/movie-details"
            onClick={() => gotoDetailView(props.cardData)}
          >
            {props.cardData.Title}
          </Link>
        </div>
        <div className="releaseData">{props.cardData.Released}</div>
        <div className="no-movie">{props.cardData.Error}</div>
      </div>
      <div className="footer-block">{favIcon}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddCardData: (userInput: any) =>
      dispatch(actionCreator.addCardData(userInput)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
