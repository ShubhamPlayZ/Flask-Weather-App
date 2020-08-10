from flask import Flask, render_template, request, redirect, url_for
import json
import urllib.request

app = Flask(__name__)

@app.route("/", methods=["POST", "GET"])
def home():
    return render_template("index.html")

@app.route("/temp", methods=["POST", "GET"])
def temp():
    if request.method == "POST":
        try:
            city_name = request.form["city-input"]
            api_key = "" #Api key is a secret. Get your own from openweathermap
            data = json.load(urllib.request.urlopen(f"https://api.openweathermap.org/data/2.5/weather?q={city_name.capitalize()}&units=metric&appid={api_key}"))
            print(data)
            weather = data["weather"][0]["main"]
            temp = data["main"]["temp"]
            min_temp = data["main"]["temp_min"]
            max_temp = data["main"]["temp_max"]
            pressure = data["main"]["pressure"]
            humidity = data["main"]["humidity"]
            speed = data["wind"]["speed"]
            return render_template("temp.html", wtr=weather, temp=temp, min_temp=min_temp, max_temp=max_temp, pressure=pressure, humidity=humidity, speed=speed)
        except:
            return render_template("error.html")
    else:
        return render_template("temp.html", wtr=weather, temp=temp, min_temp=min_temp, max_temp=max_temp, pressure=pressure, humidity=humidity, speed=speed)

if __name__ == "__main__":
    app.run(debug=True)




