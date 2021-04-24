import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import "../../universalStyles.css";

const useStyles = makeStyles({
  root: props => ( {
    
    width: props.cardWidth == undefined ? 776 : Number(props.cardWidth),
  }),
  textArea: props => ( {
    
    backgroundColor: props.backgroundColor == "dark" ? "#282C34" : "#FFFFFF",
    color: props.backgroundColor == "dark" ? "#FFFFFF" : "black",
  }),
});

export default function ImgMediaCard(props) {
  const classes = useStyles(props);
  console.log(classes.root);
  console.log(props.cardWidth);
  return (
    <Card className={classes.root  + " smallMargin"}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Card Image"
          height="476"
          image={props.img}
          title={props.imgTitle == undefined ? "" : props.imgTitle}
        />
        <CardContent className={classes.textArea}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.header}
          </Typography>
          <Typography variant="body2"  component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
