from flask import Flask
import dill as pickle
from random import randint
from ngram.model import generate_sent

app = Flask(__name__)

with open('ngram/ngram_model.pkl', 'rb') as fin:
    model = pickle.load(fin)
fin.close()

@app.route('/<seed>')
def autocomplete(seed):
    output=[]
    for i in range(5):
        output.append(generate_sent(model, 2, [seed], randint(1,100)))
        i+=1
    return str(output)