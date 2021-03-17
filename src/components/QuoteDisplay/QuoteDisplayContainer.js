import { connect } from "react-redux";
import { QuoteDisplay } from "./QuoteDisplay";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export const QuoteDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteDisplay);
