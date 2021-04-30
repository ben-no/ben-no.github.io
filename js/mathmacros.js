MathJax.Hub.Config({
  "HTML-CSS": { preferredFont: "TeX", availableFonts: ["STIX","TeX"], linebreaks: { automatic:true }, EqnChunk: (MathJax.Hub.Browser.isMobile ? 10 : 50) },
  TeX: {
    Macros: {
      rv: ["{\\boldsymbol{\\mathrm #1}}",1],
      vec: ["{\\underline #1}",1],
      rvec: ["{\\boldsymbol{\\underline{\\mathrm #1}}}",1],
      mat: ["{\\mathbf #1}",1],
      mvec: ["{\\hat{\\rvec #1}}",1],
      cvec: ["{\\underline{\\hat #1}}",1],
      ervec: ["{\\tilde{\\rvec #1}}",1],
      ermat: ["{\\widetilde{\\mathbf #1}}",1],
      bmat: ["{\\bar{\\mathbf #1}}",1],
      ellip: "{\\mathcal E}",
      inv: "^{-1}",
      invT: "^{-T}",
      Gauss: "{\\mathcal N}",
      zero: "{\\vec{0}}",
      CI: "{\\mathrm{CI}}",
      ICI: "{\\mathrm{ICI}}",
      EI: "{\\mathrm{EI}}",
      sA: "{\\mathsf A}",
      sB: "{\\mathsf B}"
    }
  }
});

// MathJax.Ajax.loadComplete("[MathJax]/js/mathmacros.js");
MathJax.Ajax.loadComplete("/js/mathmacros.js");
