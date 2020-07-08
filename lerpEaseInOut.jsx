// https://www.desmos.com/calculator/ztylrxgbfz <- visualization

function lerp_easeInOut(x, power=2, center=0.5) {
	c = power;
	s = center;
	p1 = 1 + c * (1 - x/s);
	p2 = 1 - c * (1 - x/s);
	y = 0.5 * (Math.sin((x - 0.5) * Math.PI) + 1);
	if (x < 0) {
		return 0;
	} else if (x < center) {
		return Math.pow(y, p1);
	} else if (x < 1) {
		return 1 - Math.pow(1 - y, p2);
	} else {
		return 1;
	}
}
