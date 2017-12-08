var weather = (name) => {
//
  var address = {
      Street: "1106, Blackburn Road",
      City: "Apex",
      State: "NC",
      zip: "27502"
    };

  return (name + address.zip);
  }
module.exports = {
  weather
}
