import dill as pickle
from ngram.ngram import generate_sent
from random import randint


with open('ngram/ngram_model.pkl', 'rb') as fin:
    model = pickle.load(fin)
fin.close()

def autocomplete(seed):
    output=[]
    for i in range(5):
        output.append(generate_sent(model, 2, [seed], randint()))
        i +=1
    print(output)
    return str(output)

