from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    holidays = None
    error = None

    if request.method == "POST":
        country_code = request.form.get("country_code")
        year = request.form.get("year")

        # Call Nager Date API to fetch public holidays
        try:
            response = requests.get(f"https://date.nager.at/Api/v2/PublicHolidays/{year}/{country_code}")
            if response.status_code == 200:
                holidays = response.json()
            else:
                error = "No holidays found for the specified country and year."
        except requests.RequestException as e:
            error = "Error fetching data from the API."

    return render_template("index.html", holidays=holidays, error=error)

if __name__ == "__main__":
    app.run(debug=True)
