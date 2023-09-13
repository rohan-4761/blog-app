import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { blue, green, grey, pink, yellow } from "@mui/material/colors";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={500} color={green[500]}>
          Online Friends
        </Typography>
        <AvatarGroup max={10}>
          <Avatar alt="Remy Sharp" src="/images/avatar-1.jpg" />
          <Avatar alt="Travis Howard" src="/images/avatar-2.jpg" />
          <Avatar alt="Cindy Baker" src="/images/avatar-3.jpg" />
          <Avatar alt="Trevor Henderson" src="/images/avatar-4.jpg" />
          <Avatar alt="Trevor Henderson" src="/images/avatar-5.jpg" />
          <Avatar alt="Trevor Henderson" src="" sx={{ bgcolor: blue[500] }} />
          <Avatar alt="Trevor Henderson" src="/images/avatar-6.jpg" />
          <Avatar alt="Trevor Henderson" src="/images/avatar-7.jpg" />
          <Avatar alt="Trevor Henderson" src="" sx={{ bgcolor: green[500] }} />
          <Avatar alt="Trevor Henderson" src="" sx={{ bgcolor: yellow[500] }} />
          <Avatar alt="Trevor Henderson" src="" sx={{ bgcolor: pink[500] }} />
          <Avatar alt="Trevor Henderson" src="" sx={{ bgcolor: grey[500] }} />
        </AvatarGroup>
        <Typography
          variant="h6"
          fontWeight={500}
          marginTop={2}
          color={blue[500]}
        >
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="/images/latest-post-6.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/images/latest-post-2.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/images/latest-post-3.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/images/latest-post-4.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/images/latest-post-1.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/images/latest-post-5.jpg" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={500} marginTop={2}>
          Latest Coversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/images/avatar-7.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/images/avatar-2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/images/avatar-5.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
