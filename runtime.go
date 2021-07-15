// Get average runtime of successful runs in seconds

func averageRuntimeInSeconds(runtimes []float64) float64 {
	var sum float64
	for _, runtime := range runtimes {
		sum += runtime
	}
	return sum / float64(len(runtimes))
}