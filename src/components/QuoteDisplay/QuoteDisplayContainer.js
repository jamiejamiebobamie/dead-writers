import { connect } from "react-redux";
import { QuoteDisplay } from "./QuoteDisplay";
import {
  quoteSelector,
  indexSelector,
  fetchStatusSelector,
} from "../../redux/selectors";
import { clearQuote } from "../../redux/actions";

const mapStateToProps = (state) =>
  Object.assign({}, quoteSelector(state), fetchStatusSelector(state));

const mapDispatchToProps = { clearQuote };

export const QuoteDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteDisplay);
