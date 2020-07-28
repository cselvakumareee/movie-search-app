import React, { useRef, useState, useEffect, Component } from "react";
import axios from "axios";
import Card from "../../shared-components/Card/Card";
import { connect } from "react-redux";
import * as actionCreator from "../../Store/ActionCreator";
import "./SearchComp.scss";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';

class SearchComp extends Component {
  constructor(props: any) {
    super(props);
    //  this.inputName = React.createRef();
  }
  state: any = {
    fullName: null,
    cardData: [],
    error: null
  };

  handleChange = (event: any) => {
    event.preventDefault();
    this.setState({
      fullName: event.target.value,
    });
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    const data = this.state.fullName;
    
    axios
      .get(`http://www.omdbapi.com/?t=${data}&apikey=e06d72f3`)
      .then((res: any) => {
        console.log(res);
        this.setState({
          cardData: res.data,
        });
      })
      .catch((err: any) => {
        console.log("error"+err.data.Error);
        this.setState({
          error: err.data.Error
        });
      });
  };

  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    })
  );
  render() {
    const { fullName } = this.state;
    const classes: any = [];
    if (this.state.cardData.length == 0) {
      classes.push("hidded");
    } else {
      classes.push("showed");
    }
    return (
      <div className="searchComp">
        <form onSubmit={(el: any) => this.onSubmit(el)}>
          <div className="Input">
            <input
              className="InputElement"
              value={fullName}
              onChange={this.handleChange}
              placeholder="Enter Movie Name"
            />
            
          </div>
          <div className="dropdown">
          <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>Movies</MenuItem>
                <MenuItem value={20}>Series</MenuItem>
                <MenuItem value={30}>Episodes</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='search'>
          <Button type="submit">search</Button>
          </div>
          
        </form>
        <div className={classes.join(" ")}>
          <Card cardData={this.state.cardData} />
        </div>
      </div>
    );
  }
}

export default SearchComp;
