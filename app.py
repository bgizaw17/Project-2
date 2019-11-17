from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    return render_template('/index2.html')

@app.route('/plot1')
def Plot1():
    return render_template('/Plot1.html')

@app.route('/table')
def table():
    return render_template('/table.html')


if __name__ == '__main__': app.run(debug=True)
