import { connect } from "react-redux";
import { QuoteDisplay } from "./QuoteDisplay";

const mapStateToProps = (state) => {
  return { quote: state.quoteReducer.quote, author: state.quoteReducer.author };
};
const mapDispatchToProps = {};

export const QuoteDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteDisplay);
