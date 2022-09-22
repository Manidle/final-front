import { Grid, ListItem } from "@mui/material";
import React from "react";
import TextProperty from "./TextProperty";

const Post = ({ post, handlePostDetail }) => {
  return (
    <ListItem
      display="flex"
      justifyContent="space-between"
      width="40rem"
      key={post.postId}
      dense="true"
    >
      <Grid container>
        <Grid item xs={1}>
          <TextProperty
            onClick={() => {
              handlePostDetail(post.postId);
            }}
          >
            {post.postId}
          </TextProperty>
        </Grid>
        <Grid item xs={7}>
          <TextProperty
            onClick={() => {
              handlePostDetail(post.postId);
            }}
          >
            {post.title}
          </TextProperty>
        </Grid>
        <Grid item xs={2}>
          <TextProperty
            onClick={() => {
              handlePostDetail(post.postId);
            }}
          >
            {post.replyList.length}
          </TextProperty>
        </Grid>
        <Grid item xs={2}>
          <TextProperty
            onClick={() => {
              handlePostDetail(post.postId);
            }}
          >
            {post.likeCount}
          </TextProperty>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default Post;
