import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { DEEP_YELLOW, SOFT_BEIGE } from "../../styles/colors";

const GetMyPosts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get("https://www.onesol.shop/v1/api/mypost", {
        headers: {
          Token: token,
        },
      })
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const onClickHandler = async () => {
    getPosts();
  };

  return (
    <DivMainMyPost>
      <DivMyPost>
        {posts.length > 0 ? (
          <div>작성하신 글이 존재합니다.(임시)</div>
        ) : (
          <div>작성하신 글이 없습니다</div>
        )}
        <ButtonMyPost onClick={onClickHandler}>
          내가 쓴 포스트 조회
        </ButtonMyPost>
      </DivMyPost>
    </DivMainMyPost>
  );
};

const DivMainMyPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivMyPost = styled.div`
  width: 450px;
  height: 700px;
  margin: 50px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${SOFT_BEIGE};
  border: 1px solid ${DEEP_YELLOW};
  border-radius: 8px;
`;

const ButtonMyPost = styled.button`
  margin-top: 30px;
  width: 120px;
  height: 40px;
`;

export default GetMyPosts;
