function limit(f1, f2, fade_frames=20) {
	fadeIn = clamp((timeToFrames() - f1) / fade_frames, 0, 1);
	fadeOut = 1 - clamp((timeToFrames() - f2 + fade_frames) / fade_frames, 0, 1);
	fade = Math.min(fadeIn, fadeOut);
	fade = 0.5 * (1 + Math.sin((fade - 0.5) * Math.PI)); // optional easeInOut
	return fade;
}


// Example usage:
apply = limit(30, 100); // start applying expression values at frame 30 and end at frame 100
[transform.anchorPoint[0] + apply * 10 * Math.sin(time * 5), transform.anchorPoint[1]];
