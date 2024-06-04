import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
} from "@mui/material";

const MUICard = () => {
  return (
    <Box width={"300px"}>
      <Card>
        <CardMedia
          component={"img"}
          height={"140px"}
          image="https://source.unsplash.com/random"
          alt="unsplash_image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={"div"}>
            React with TS
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            enim quae veritatis mollitia asperiores voluptates beatae
            consectetur quidem, explicabo laborum.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MUICard;
