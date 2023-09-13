import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, pink } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Post = () => {
  return (
    <>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar alt="Yoon-ji Dong" src="/images/avatar-3.jpg" />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Yoon-ji Dong"
          subheader="September 13, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="/images/shrimp.jpg"
          alt="Yoon-ji Dong"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: pink[500] }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar alt="Alisha Pereira" src="/images/avatar-2.jpg" />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Alisha Pereira"
          subheader="September 13, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="/images/beach.jpg"
          alt="Alisha Pereira"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            "Sun, sea, and sandy dreams 🌞🌊✨" "Salt in the air, sand in my
            hair 🏖️🌊" "Paradise found at the water's edge 🏝️🌊" "Dreaming of
            endless summer days 🌴🌞🌊"
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: pink[500] }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar alt="Diljit Singh" src="/images/avatar-5.jpg" />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Diljit Singh"
          subheader="September 13, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="/images/hike.jpg"
          alt="Diljit Singh"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Hiking isn't just about reaching the summit; it's about conquering
            the doubts and limitations within ourselves. Today, we stand at the
            peak, not only in elevation but in our belief that with
            determination, we can conquer any mountain, both on the trail and in
            life. 🏞️💪🌄 #HikingAdventures #ChallengeYourself #NatureMotivation
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: pink[500] }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar alt="Meguri Sukimoto" src="/images/avatar-7.jpg" />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Meguri Sukimoto"
          subheader="September 13, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="/images/cafe.jpg"
          alt="Meguri Sukimoto"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            I recently visited a charming cafe tucked away on a quiet street.
            The warm aroma of freshly brewed coffee greeted me as I stepped
            inside, creating an inviting atmosphere. The cozy ambiance, adorned
            with rustic decor and soft jazz music, provided the perfect setting
            to savor a delicious latte and a slice of their homemade cake. It
            was a delightful escape, where each sip and bite felt like a moment
            of pure indulgence.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: pink[500] }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
