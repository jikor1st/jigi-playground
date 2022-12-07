import { useEffect } from "react";
import styled from "@emotion/styled";

import ToggleFavorites from "../components/ToggleFavorites";

import { dehydrate } from "@tanstack/react-query";

import { useGetLikes, usePatchLikes, prefetchLikes } from "../api/likes";

const likeId = 1;

const LottiePage = () => {
  const { data: likesData } = useGetLikes(likeId);
  const { mutate: likesMutate } = usePatchLikes();

  const isLike = !!likesData?.isLike;

  return (
    <Container>
      <ToggleFavorites
        isLike={isLike}
        onClick={() =>
          likesMutate({
            id: likeId,
            isLike: isLike,
          })
        }
      />
    </Container>
  );
};

export default LottiePage;

export const getServerSideProps = async () => {
  const queryClient = await prefetchLikes(likeId);
  return {
    props: {
      deydratedState: dehydrate(queryClient),
    },
  };
};

const Container = styled.div`
  padding: 200px;
`;
