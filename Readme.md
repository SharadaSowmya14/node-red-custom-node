Steps to install the custom node:
- Install `node-red` npm package globally using `npm i -g node-red`
- Download the code for `get-thing-property` node
- Run `npm i` inside the folder to install the `request` dependency
- Navigate to your `$HOME/.node-red` folder and run `npm i {path where 'get-thing-property' code is present}` (this should install the 'get-thing-property' node)
- Run `node-red` to start node-red
- Open `http://localhost:1880` and search for the `get-thing-property` node in your list of nodes
- Connect that with an `input` node and an `output` debug node
- Set the `baseurl`, `thingid` and `propertyid` in the `get-thing-property` node
- Run the flow to view the output

Folder Structure:
```
- `GetThingProperty.html` - the html code corresponding to the custom node
- `GetThingProperty.js` - the js code to access the template variables and make the request and send the response
- `package.json` - app details and dependencies
```