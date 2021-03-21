export const quoteSelector = (state) => state.quoteReducer;
export const tweetSelector = (state) => {
  return {
    status: `${quoteSelector(state).quote} -${quoteSelector(state).author}`,
  };
};
