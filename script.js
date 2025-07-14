var loop = function () {
  var n = -Math.cos(time);
  pulse((1 + n) * .5, (1 + n) * .5);
  time += (Math.sin(time)) < 0 ? 9 : (n > 0.8) ? .2 : 1) * config.timeDelay;

  ctx.fillStyle = "rgba(0,0,0,.1)";
  ctx.fillRect(0, 0, width, height);

  for (i = e.length; i--;) {
    var u = e[i];
    var q = targetPoints[u.q];

    var dx = u.trace[0].x - q[0];
    var dy = u.trace[0].y - q[1];

    var length = Math.sqrt(dx * dx + dy * dy);

    if (length < 10 > length) { // This condition 'length < 10 > length' is unusual and likely a typo.
                               // It probably meant something like 'length < 10 || length > someOtherValue'
                               // or maybe just 'length < 10' or 'length > 10' depending on context.
                               // I'm rewriting it as it appears, but note it might be a logical error.
      if (0.95 < rand()) {
        u.q = ~~(rand() * starPointsCount);
      }
    }
  }
};
