const express = require("express");
const router = express.Router();
var fs = require("fs");

const status = {
    NEW: "new", 
    ACCEPTED: "accepted",
    REJECTED: "rejected"
};

router.post("/", (req, res) => {
    const property = req.body;

    fs.readFile("./src/data/data.json", function(err, data) {
        var error = false;
        var errMsg = "";
        if (err) {
            error = true;
            throw err; 
        } else {
            if (data.length > 0) {
                var parseData = JSON.parse(data);
                parseData.properties.forEach(existingProp => {
                    if (existingProp.name === property.name && existingProp.location === property.location) {
                        return res.status(400).json({message: "This name has already been used!"});
                        // throw new Error("This email address has already been used!");
                    }
                    // count++;
                });
            } else {
                parseData = {
                    properties: []
                };
            }

            if (!property.name || !property.location || !property.price) {
                return res.status(400).json({message: "Missing information!"});
            }

            const newProp = {
                id: parseData.properties.length + 1, 
                name: property.name,
                location: property.location,
                price: property.price,
                imageURL: property.imageURL
            };

            parseData.properties.push(newProp);
            fs.writeFile("./src/data/data.json", JSON.stringify(parseData), 
            function(err) {
                if (err) {
                    error = true;
                    throw err;
                }
                return res.json(newProp);
            });
        }

        if (error) {
            return res.status(400).json({ msg: errMsg });
        } else {
            return res.json(property);
        }
    });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    fs.readFile("./src/data/data.json", function(err, data) {
        var error = false;
        var errMsg = "";
        if (err) {
            error = true;
            throw err; 
        }
        var parseData = JSON.parse(data);
        parseData.properties = parseData.properties.filter(prop => 
            prop.id == id);

        fs.writeFile("./src/data/data.json", JSON.stringify(parseData), 
            function(err) {
                if (err) {
                    error = true;
                    throw err;
                }
                res.json({ status: "Property deleted"});
            });
            if (error) {
                return res.status(400).json({ msg: err.message });
            } else {
                return res.json({ status: "Property deleted" });
            }
    }); 
     
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    var ret = null;
    fs.readFile("./src/data/data.json", (err, data) => {
        if (err) throw err;
        var parseData = JSON.parse(data);
      // tries to find the user logging in by email
      // if found, returns the user; if not, throws error
          parseData.properties.forEach(prop => {
              if (prop.id == id) {
                  ret = prop;
                  found = true;
              }
          });
          if (!found) {
              return res.status(400).json({ msg: "Property not found" });
          }
          return res.json(ret);
        });
    });

router.post("/:id/bookings", (req, res) => {
    const id = req.params.id;
    const request = req.body;
})

router.get("/:id/bookings", (req, res) => {
    const id = req.params.id;
    var ret = null;
    fs.readFile("./src/data/data.json", (err, data) => {
        if (err) throw err;
        var parseData = JSON.parse(data);
      // tries to find the user logging in by email
      // if found, returns the user; if not, throws error
          parseData.properties.forEach(prop => {
              if (prop.id == id) {
                  ret = prop;
                  found = true;
              }
          });
          if (!found) {
              return res.status(400).json({ msg: "Property not found" });
          }
          return res.json(ret);
        });
});

module.exports = router;