const parent = React.createElement("div",{id:"arent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"React World!!")
)
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);