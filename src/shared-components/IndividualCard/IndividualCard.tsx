import React, { useState } from "react";
import heartfilled from "../../Assets/heartfilled.svg";
import heartoutlined from "../../Assets/heartoutlined.svg";
import "./IndividualCard.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreator from "../../Store/ActionCreator";
import Button from "@material-ui/core/Button";

const IndividualCard = (props: any) => {
  const [isFav, setFav]: any = useState(true);
  const postDataToserver = () => {
    setFav(true);
  };
  const delDataInserver = (key: any) => {
    setFav(false);
    // axios
    //   .delete(
    //     "https://movie-search-app-afa7b.firebaseio.com/favourites.json",
    //     key
    //   )
    //   .then((res: any) => {
    //     console.log("data " + res);
    //   })
    //   .catch((err: any) => {
    //     console.log("data err " + err);
    //   });
  };

  let favIcon: any = [];
  if (!isFav) {
    favIcon = (
      <img
        src={heartoutlined}
        onClick={postDataToserver}
        width="30px"
        height="30px"
      />
    );
  } else {
    favIcon = (
      <img
        src={heartfilled}
        onClick={() => delDataInserver(props.key)}
        width="30px"
        height="30px"
      />
    );
  }

  const gotoDetailView = (data: any) => {
     props.onAddCardData(data);
  };

  return (
    <div className="individualcard">
      <div className="img-block">
        <img src={props.data.Poster} />
      </div>
      <div className="content-block">
        <div className="title">
          <Link to="/movie-details" onClick={() => gotoDetailView(props.data)}>
            {props.data.Title}
          </Link>
        </div>
        <div className="releaseData">{props.data.Released}</div>
        <div className="no-movie">{props.data.Error}</div>
      </div>
      <div className="footer-block"></div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddCardData: (userInput: any) =>
      dispatch(actionCreator.addCardData(userInput)),
  };
};

export default connect(null, mapDispatchToProps)(IndividualCard);
