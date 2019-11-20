from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/plot1')
def Plot1():
    return render_template('Plot1.html')

@app.route('/table')
def table():
    return render_template('table.html')

@app.route('/plot2')
def Plot2():
    return render_template('Plot2.html')


if __name__ == '__main__': app.run(debug=True)
