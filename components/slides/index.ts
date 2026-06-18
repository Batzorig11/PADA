// Chrome + layout primitives
export {
  Brandbar,
  Footer,
  Eyebrow,
  Slide,
  Frame,
  Cursor,
  type FooterProps,
} from "./chrome";

// Code window + syntax tokens
export {
  CodeWindow,
  CodeCaption,
  Line,
  T,
  TrafficDots,
} from "./CodeWindow";

// Slide-type blocks
export {
  TitleSlide,
  SectionDivider,
  ConceptList,
  KeyTerm,
  StatSlide,
  Break,
  CompareTable,
  DosDonts,
  Exercise,
  Callout,
  Remember,
  Recap,
  Terminal,
  TermComment,
  TermCmd,
  TermOut,
  Diagram,
  Node,
  Arrow,
  ResultPane,
  type ConceptItem,
  type RecapCard,
} from "./blocks";

// Exercise solution files (copy-to-clipboard, code hidden)
export { ExerciseFiles, type SolutionFile } from "./ExerciseFiles";

// Live break countdown (MM:SS)
export { BreakCountdown } from "./BreakCountdown";
