import { connect } from "react-redux";
import { QuoteDisplay } from "./QuoteDisplay";

import { clearQuote } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    quote: state.quoteReducer.quote,
    author: state.quoteReducer.author,
    index: state.videoIndexReducer.index,
    isFetching: state.fetchReducer.isFetching,
  };
};
const mapDispatchToProps = { clearQuote };

export const QuoteDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteDisplay);
