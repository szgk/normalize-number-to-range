export default (v, min, max) => {
  const mx = Math.max(min, max)
  const mn = Math.min(min, max)
  const range = max - min  

  // in range
  if(v >= mn && v <= mx) {
    return v
  }

  // greater than range
  if(v > mx) {
    const sub = Math.sign(v) ? v - mx : Math.abs(mx) - Math.abs(v)
    return mn + (sub > range ? sub % range : sub)
  }

  // less than range
  if(v < mn) {
    let sub = mn - v

    if(!Math.sign(v)) {
      if(v > mx) {
        sub = Math.abs(mx) - Math.abs(v)
      }
      if(v < mn) {
        sub = Math.sign(mn) ? mn - v : v - mn
      }
    }

    return mx - (sub > range ? sub % range : sub)
  }
}