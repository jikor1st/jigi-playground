import axiosController from "../axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";

interface ILikes {
  id: number;
  isLike: boolean;
}
const getLikes = (id: number) =>
  axiosController.get<ILikes>(`/likes/${id}`).then((res) => res.data);

const patchLikes = ({ id, isLike }: ILikes) =>
  axiosController
    .patch<ILikes>(`/likes/${id}`, {
      isLike: !isLike,
    })
    .then((res) => res.data);

export const useGetLikes = (id: number) => {
  return useQuery(["likes", id], () => getLikes(id), {
    refetchOnWindowFocus: false,
  });
};

export const usePatchLikes = () => {
  const queryClient = useQueryClient();

  return useMutation<ILikes, Error, ILikes, () => void>(
    (likesValue) => patchLikes(likesValue),
    {
      onMutate: async ({ id }) => {
        /** mutate시 query 무효화 */
        await queryClient.cancelQueries(["likes", id]);

        /** 이전 데이터 가져오기 */
        const previosLikes = queryClient.getQueryData<ILikes>(["likes", id]);

        /** 낙관적 업데이트 */
        queryClient.setQueryData<ILikes>(["likes", id], (oldLikesData) => {
          if (oldLikesData)
            return { ...oldLikesData, isLike: !oldLikesData.isLike };
        });

        /** 에러시 롤백할 함수 리턴 */
        return () =>
          queryClient.setQueryData(["likes", id], previosLikes?.isLike);
      },
      onSettled: (data, error, { id }) => {
        queryClient.invalidateQueries(["likes", id]);
      },
      onError: (error, _, rollback) => {
        /** 에러발생시 onMutate에서 넘긴 이전 데이터로 롤백 */
        if (rollback) rollback();
      },
    }
  );
};

export const prefetchLikes = async (id: number) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["likes", id]);
  return queryClient;
};
