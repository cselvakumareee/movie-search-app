import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import "./MovieDetailComp.scss";

const MovieDetailComp = (props: any) => {
  const [pageLoad, setPageLoad]: any = useState(false);
  useEffect(() => {
    onPageLoad();
  }, []);

  const onPageLoad = () => {
    setPageLoad(true);
  };
  const goBackHandler = () => {
    props.history.goBack();
  };
  let pageContent: any = [];
  if (pageLoad) {
    pageContent = (
      <div className="movie-inner-container">
        <div className="image-block">
          <img src={props.detailData.Poster} />
        </div>
        <div className="content-block1">
          <h3>{props.detailData.Title}</h3>
          <div>
            <span className="heading">Year: </span>
            {props.detailData.Year}
          </div>
          <div>
            <span className="heading">Duration: </span>
            {props.detailData.Runtime}
          </div>
        </div>
        <div className="contents">
          <span className="heading">Language: </span>
          {props.detailData.Language}
        </div>

        <div className="contents">
          <span className="heading">Actor cast: </span>
          {props.detailData.Actors}
        </div>
        <div className="contents">
          <span className="heading">Synapsis: </span>
          {props.detailData.Plot}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="movie-container">
        <Button variant="outlined" onClick={goBackHandler}>
          Back
        </Button>
        {pageContent}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    detailData: state.cardItems,
  };
};

const MovieDetailCompConnect = withRouter(
  connect(mapStateToProps)(MovieDetailComp)
);

export default MovieDetailCompConnect;
