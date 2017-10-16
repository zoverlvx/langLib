import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "../dev/js/components/routes";

const app = express();

app.use(express.static("public")); //what is this doing?

app.get("*", (req, res) => {
    res.send(`
        <!DOCTYPE html>
	<head>
	    <link rel="stylesheet" href="src/style.css">
	    <script src="/bundle.js"></script>
	</head>

	<body>
	    <div id="root">${renderToString(<Routes />)}</div>
	</body>
    `);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening"); 
});


