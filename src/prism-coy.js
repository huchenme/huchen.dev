import { injectGlobal } from 'emotion'

injectGlobal`
.token.regex,
.token.important {
  color: #d88489;
}

.language-css .token.string,
.style .token.string {
  color: #a2466c;
}

.token.important {
  font-weight: normal;
}

.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.namespace {
  opacity: 0.7;
}

/* Plugin styles */
.token.tab:not(:empty):before,
.token.cr:before,
.token.lf:before {
  color: #e0d7d1;
}
`
