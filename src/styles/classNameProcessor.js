export default {
  get: (className, fallback = "") =>
    typeof className === "string" ? className : fallback,

  default: (innerClassName, incomingClassName, fallback) => innerClassName + incomingClassName ? this.get(incomingClassName, fallback) : '',

  join: (...incomingClassNames) => incomingClassNames.map(this.get).join(" "),
  
  if: (condition, className, fallback) => condition && this.get(className, fallback),

  or: (condition, classNameTrue, classNameFalse) =>
    condition ? this.get(classNameTrue) : this.get(classNameFalse),
    
    switch: (...condAndClassNamesArr) => {
      for ([condition, className, fallback] of condAndClassNamesArr) {
    if (condition) return this.get(className, fallback)
      }
      return ''
    }
};
