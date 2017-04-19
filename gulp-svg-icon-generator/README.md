### Gulp SVG Icon Generator
* Install node.js
* Run `npm install`
* Copy all your svg icons to "icons" folder
* Use `gulp svg-icon-generator` command to generata icon set (icons.svg will be generated in root folder by default)

### How to insert svg
```
<svg class="svg-icon" xmlns=http://www.w3.org/2000/svg role="img" >
	<title>calendar</title>
	<use xlink:href="icons_folder_path/icons.svg#icon_name"></use>
</svg>
```
or just
```
<svg class="svg-icon" xmlns=http://www.w3.org/2000/svg role="img" >
	<use xlink:href="icons_folder_path/icons.svg#icon_name"></use>
</svg>
```