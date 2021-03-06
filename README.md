# Reactive Weather
![Alt Text](https://github.com/bobeta/reactive-weather/raw/master/showcase/reactive.png)
>Simple realtime weather widget, created with ReactJS and Bootstrap. Since there's really not much styling in place, it's fairly easy to replace it with a different CSS framework of choice. Made as a [**hacktoberfest**](https://hacktoberfest.digitalocean.com/) educational project that can be used as a intro to coding with React.

## Initial Version

![Alt Text](https://github.com/bobeta/reactive-weather/raw/master/showcase/reactive-weather-initial.gif)

## Updated version with the default theme

![Alt Text](https://github.com/bobeta/reactive-weather/raw/master/showcase/reactive-weather-default-theme.gif)

## Features

* Search weather in any city using Open Weather Maps API
* Neat display of todays weather and the upcoming week without page refresh
* Switching between Celsius and Fahrenheit

## Installation

Clone the package into directory of choice:

```
git clone https://github.com/Bobeta/reactive-weather.git
```

then run (required to have Node installed):

```
npm -g browserify && npm install
```

Create your free Open Weather Map API key by signing up on [**their website**](https://openweathermap.org/) (it can take up to an hour before the API key starts working).

## Method 1 - Play with the app, add it directly to your frontend
(**Add the API key in src/services/weatherservice.js:**)

```
// Add Your API Key
var apiKey = 'yourApiKey';
```

Run the following command to re-compile after adding API key (**ctrl + c to stop**):
```
npm start
```

## Method 2 - When you're ready to use it as environment variable
Export the API key under the `OPENWEATHER_API_KEY` environment variable.
```
export OPENWEATHER_API_KEY=your_key
```
or launch the app with the environment variable:
```
OPENWEATHER_API_KEY=your_key npm start
```

(**Uncomment the following section in src/services/weatherservice.js:**)
```
// Use this you're ready to use as environment variable
// var apiKey = process.env.OPENWEATHER_API_KEY;
```
And remove the same variable declaration above it.

## Usage and Changes

Just add a tag with id of reactive-weather to wherever you want to display the weather widget, example:
```
<div id="reactive-weather"></div>
```

Make sure that you have main.js added as script file. There's an example usage in public/index.html.

All the desired changes should be made to the content in the /src directory. After you make changes to JSX files, run the following command:
```
npm start
```

The changes you make to src/main.jsx files and components in src/components will then automatically compile to public/js/main.js. To stop the process, just do **ctrl + c**.

Bootstrap is already included in public/css/bootstrap.css. You can use included bower setup to add a different sass version and the following command to replace the current css with it:

```
npm run bootstrap
```

Browser-sync functionality is already included out of the box, just run the following command to see your changes being made live:
```
npm run browser-sync
```

You can run the following command to generate js files that excludes `react` & `react-dom` dependencies:
```
npm run dist
```

## Contributing

You are welcome to contribute to the project if you like, please read [**contributing guide**](CONTRIBUTING.md).

## Credits

[**Reactive Weather**](https://github.com/bobeta/reactive-weather) was created as a [**hacktoberfest**](https://hacktoberfest.digitalocean.com/) educational project by [**Moris Pasic**](https://github.com/bobeta).

Big thanks to our **contributors**:
[**Davoscript**](https://github.com/davoscript), [**LlinksRechts**](https://github.com/LlinksRechts), [**Chris911**](https://github.com/Chris911), [**nayangupta824**](https://github.com/nayangupta824), [**dimkosru**](https://github.com/dimkosru), [**kittyhawks**](https://github.com/kittyhawks), [**tina-trenkner**](https://github.com/tina-trenkner), 

## License
```
MIT License

Copyright (c) 2016 Moris Zen Pasic <moris.pasic@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
