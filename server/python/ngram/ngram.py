# %%
""" !pip install -U pip
!pip install -U dill
!pip install -U nltk """

# %%
#from nltk.lm.preprocessing import pad_both_ends
#from nltk.lm.preprocessing import flatten
import pandas as pd 
from nltk.tokenize import word_tokenize
import nltk
nltk.download('punkt')

# %%
table = pd.read_csv('./output/udemy_courses_python_2023-01-11.csv')

# %%
table.drop(['Unnamed: 0'],axis=1)

# %%
text = table['Course Title']

# %%
table.loc[table['Course Title']  =='Python 3 For Beginners: Learn Data Science' ]

# %%
text[0]

# %%
from nltk.lm.preprocessing import padded_everygram_pipeline
#train, vocab = padded_everygram_pipeline(2, text)

# %%
text=text.tolist()

# %%
text

# %%
""" import string
text=text.translate(str.maketrans('', '', string.punctuation)) """

# %%
# Tokenize the text.
tokens=[word_tokenize(x.lower()) for x in text]

# %%
tokens

# %%
# Preprocess the tokenized text for 3-grams language modelling
n = 3
train_data, padded_sents = padded_everygram_pipeline(n, tokens)

# %%
from nltk.lm import MLE
model = MLE(n) # Lets train a 3-grams model, previously we set n=3

# %% [markdown]
# Initializing the MLE model, creates an empty vocabulary

# %%
len(model.vocab)

# %% [markdown]
# ... which gets filled as we fit the model.

# %%
model.fit(train_data, padded_sents)
print(model.vocab)

# %%
model.unmasked_score('Data')

# %%
len(model.vocab)

# %% [markdown]
# The vocabulary helps us handle words that have not occurred during training.

# %%
print(model.vocab.lookup(tokens[1]))

# %%
print(model.counts)

# %%
model.counts['language'] # i.e. Count('language')

# %%
model.counts[['language']]['is'] # i.e. Count('is'|'language')

# %%
model.score('language') # P('language')

# %%
model.score('is', 'language'.split())  # P('is'|'language')

# %%
print(model.generate(10, random_seed=7))

# %%
from nltk.tokenize.treebank import TreebankWordDetokenizer

detokenize = TreebankWordDetokenizer().detokenize

def generate_sent(model, num_words, text_seed,random_seed=42):
    """
    :param model: An ngram language model from `nltk.lm.model`.
    :param num_words: Max no. of words to generate.
    :param random_seed: Seed value for random.
    """
    content = text_seed
    for token in model.generate(num_words, text_seed = text_seed,random_seed=random_seed):
        if token == '<s>':
            continue
        if token == '</s>':
            break
        content.append(token)
    return detokenize(content)

# %%
generate_sent(model, 20, ['stuff','on'],random_seed=3)

# %%
import dill as pickle 

with open('ngram_model.pkl', 'wb') as fout:
    pickle.dump(model, fout)

# %%
""" with open('ngram_model.pkl', 'rb') as fin:
    model_loaded = pickle.load(fin) """


