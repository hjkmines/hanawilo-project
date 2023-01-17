## Ngram Language Models
The intuition of the n-gram model is instead of computing the probability of a word given the entire preceding sequence of words, we can approximate the probability by just the last few words. N is how many previous words you want to use for prediction.

Example: 

For bigram:

P(the|Walden Pond's water is so transparent that)  $\thickapprox$ P(the|that)

Trigram:

P(the|Walden Pond's water is so transparent that)  $\thickapprox$ P(the|transparent that)

Four-gram:

P(the|Walden Pond's water is so transparent that)  $\thickapprox$ P(the|so transparent that)

Use Maximum Likelihood Estimation(MLE) to estimate n-gram probabilities.
We get MLE estimate for parameters of an n-gram model by getting counts from a corpus.

Example:

Bigram:

P(the|that)= $\frac{Count(that,the)}{Count(that)}$

Trigram:

P(the|transparent that)= $\frac{Count(transparent,that,the)}{Count(transparent,that)}$

Four-gram:

P(the|so transparent that)= $\frac{Count(so,transparent,that,the)}{Count(so,transparent,that)}$

Based on words given, n-gram model should give the next predicted word which has the highest MLE as output. 
