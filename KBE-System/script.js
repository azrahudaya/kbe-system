const models = [
  {
    name: "CPDR Standardized chemical pump in plastic",
    specs: {
      flowOrientation: "Radial",
      position: "Horizontal",
      materialCasing: "Plastic",
      materialImpeller: "Plastic",
      flowRate: { min: 100, max: 300 },
      pressure: { min: 0, max: 16 },
      head: { min: 10, max: 100 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 50, max: 300 },
      numberImpeller: "Single",
      designType: "Open",
      volute: "Single",
      motorRPM: { min: 1000, max: 3500 },
      ambientTemp: [-20, 60],
      internalTemp: [-40, 190],
      fluidType: "Single Phase",
      frequency: { min: 50, max: 60 },
    },
    regulation: "ISO 5199, ISO 2858, EN 22858",
    imagePath: "./assets/img/CPDR Standardized chemical pump in plastic.png",
  },
  {
    name: "FNC Standardized chemical pump in ceramic",
    specs: {
      flowOrientation: "Radial",
      position: "Horizontal",
      materialCasing: "Ceramic",
      materialImpeller: "Ceramic",
      flowRate: { min: 100, max: 600 },
      pressure: { min: 0, max: 8.83 },
      head: { min: 10, max: 90 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 160, max: 400 },
      numberImpeller: "Single",
      designType: "Closed",
      volute: "Single",
      motorRPM: { min: 1450, max: 2900 },
      ambientTemp: [-20, 60],
      internalTemp: [-40, 120],
      fluidType: "Single Phase",
      frequency: { min: 50, max: 60 },
    },
    regulation: "ISO 5199, ISO 2858, EN 22858",
    imagePath: "./assets/img/FNC Standardized chemical pump in ceramic.png",
  },
  {
    name: "FNP Standardized chemical pump with PFA-Lining",
    specs: {
      flowOrientation: "Radial",
      position: "Horizontal",
      materialCasing: "Plastic",
      materialImpeller: "Plastic",
      flowRate: { min: 10, max: 70 },
      pressure: { min: 0, max: 16 },
      head: { min: 10, max: 95 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 160, max: 250 },
      numberImpeller: "Single",
      designType: "Closed",
      volute: "Single",
      motorRPM: { min: 1450, max: 3500 },
      ambientTemp: [-20, 60],
      internalTemp: [-30, 190],
      fluidType: "Single Phase",
      frequency: { min: 50, max: 60 },
    },
    regulation: "ISO 5199, ISO 2858, EN 22859",
    imagePath:
      "./assets/img/FNP Standardized chemical pump with PFA-Lining.png",
  },
  {
    name: "FNPM Magnetic drive pump in plastic",
    specs: {
      flowOrientation: "Radial",
      position: "Horizontal",
      materialCasing: "Plastic",
      materialImpeller: "Plastic",
      flowRate: { min: 50, max: 350 },
      pressure: { min: 0, max: 16 },
      head: { min: 10, max: 100 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 25, max: 125 },
      numberImpeller: "Single",
      designType: "Closed",
      volute: "Single",
      motorRPM: { min: 1450, max: 3500 },
      ambientTemp: [-20, 60],
      internalTemp: [-40, 190],
      fluidType: "Single Phase",
      frequency: { min: 50, max: 60 },
    },
    regulation: "ISO 5199, ISO 2858, EN 22860",
    imagePath: "./assets/img/FNPM Magnetic drive pump in plastic.png",
  },
  {
    name: "RCE Chemical centrifugal pump in metal",
    specs: {
      flowOrientation: "Radial",
      position: "Horizontal",
      materialCasing: "Metal",
      materialImpeller: "Metal",
      flowRate: { min: 100, max: 1200 },
      pressure: { min: 0, max: 16 },
      head: { min: 10, max: 180 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 32, max: 200 },
      numberImpeller: "Single",
      designType: "Open or Closed",
      volute: "Single or Double",
      motorRPM: { min: 1450, max: 3500 },
      ambientTemp: [-20, 60],
      internalTemp: [-40, 450],
      fluidType: "Single Phase",
      frequency: { min: 50, max: 60 },
    },
    regulation: "ISO 5199",
    imagePath: "./assets/img/RCE Chemical centrifugal pump in metal.png",
  },
  {
    name: "GVRN Vertical chemical centrifugal pump in metal",
    specs: {
      flowOrientation: "Radial",
      position: "Vertical",
      materialCasing: "Metal",
      materialImpeller: "Metal",
      flowRate: { min: 1000, max: 4000 },
      pressure: { min: 0, max: 10 },
      head: { min: 10, max: 85 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 100, max: 450 },
      numberImpeller: "Single",
      designType: "Closed",
      volute: "Double",
      motorRPM: { min: 1450, max: 1750 },
      ambientTemp: [-20, 60],
      internalTemp: [-40, 250],
      fluidType: "Single Phase",
      frequency: { min: 50, max: 60 },
    },
    regulation: "ISO 5199",
    imagePath:
      "./assets/img/GVRN Vertical chemical centrifugal pump in metal.png",
  },
  {
    name: "RPROP Axial flow centrifugal pump in metal",
    specs: {
      flowOrientation: "Axial or Mixed",
      position: "Horizontal",
      materialCasing: "Metal",
      materialImpeller: "Metal",
      flowRate: { min: 1000, max: 8500 },
      pressure: { min: 0, max: 6 },
      head: { min: 5, max: 7 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 200, max: 700 },
      numberImpeller: "Single",
      designType: "Adjustable propeller blades or inducer",
      volute: "Cast tube bend, welded tube bend",
      motorRPM: { min: 400, max: 1500 },
      ambientTemp: [-20, 60],
      internalTemp: [-20, 150],
      fluidType: "Single Phase",
      frequency: { min: 50, max: 60 },
    },
    regulation: "ISO 5199",
    imagePath: "./assets/img/RPROP Axial flow centrifugal pump in metal.png",
  },
  {
    name: "RSU Axial flow centrifugal pump in metal",
    specs: {
      flowOrientation: "Axial",
      position: "Horizontal",
      materialCasing: "Metal",
      materialImpeller: "Metal",
      flowRate: { min: 1000, max: 3400 },
      pressure: { min: 0, max: 6 },
      head: { min: 5, max: 6 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 400, max: 500 },
      numberImpeller: "Single",
      designType: "Open",
      volute: "Cast pipe elbow",
      motorRPM: { min: 400, max: 1500 },
      ambientTemp: [-40, 60],
      internalTemp: [-40, 150],
      fluidType: "Single Phase",
      frequency: { min: 50, max: 60 },
    },
    regulation: "ISO 5199",
    imagePath: "./assets/img/RSU Axial flow centrifugal pump in metal.png",
  },
  {
    name: "Little Giant 558255, LGDR1S05-CP",
    specs: {
      flowOrientation: "Radial",
      position: "Horizontal",
      materialCasing: "Thermoplastic",
      materialImpeller: "Cast Iron",
      flowRate: { min: 14.76, max: 14.76 },
      pressure: { min: 2.54, max: 2.54 },
      head: { min: 25.91, max: 25.91 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 31.75, max: 31.75 },
      numberImpeller: "Single",
      designType: "Closed",
      volute: "Single",
      motorRPM: { min: 3600, max: 3600 },
      ambientTemp: [40, 40],
      internalTemp: [82, 82],
      fluidType: "Water, Cairan Kimia Non Korosif",
      frequency: { min: 60, max: 60 },
    },
    regulation: "",
    imagePath: "./assets/img/Little Giant 558255, LGDR1S05-CP.png",
  },
  {
    name: "Myers 12925E000 Centri-Thrift Series Model 150M 2-1",
    specs: {
      flowOrientation: "Radial",
      position: "Horizontal",
      materialCasing: "Gray Cast Iron",
      materialImpeller: "Brass",
      flowRate: { min: 28.18, max: 28.18 },
      pressure: { min: 2.24, max: 2.24 },
      head: { min: 22.86, max: 22.86 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 50.8, max: 50.8 },
      numberImpeller: "Single",
      designType: "Closed",
      volute: "Spiral Volute",
      motorRPM: { min: 3600, max: 3600 },
      ambientTemp: [40, 40],
      internalTemp: [60, 60],
      fluidType: "Water, Cairan Kimia Non Korosif",
      frequency: { min: 60, max: 60 },
    },
    regulation: "ISO 5199",
    imagePath:
      "./assets/img/Myers 12925E000 Centri-Thrift Series Model 150M 2-1.png",
  },
  {
    name: "Myers Centri-Thrift Series Model 150M-3-1",
    specs: {
      flowOrientation: "Radial",
      position: "Horizontal",
      materialCasing: "Gray Cast Iron",
      materialImpeller: "Brass",
      flowRate: { min: 34.065, max: 34.065 },
      pressure: { min: 2.93, max: 2.93 },
      head: { min: 29.89, max: 29.89 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 50.8, max: 50.8 },
      numberImpeller: "Single",
      designType: "Closed",
      volute: "Radial",
      motorRPM: { min: 3600, max: 3600 },
      ambientTemp: [40, 40],
      internalTemp: [60, 60],
      fluidType: "Water, Cairan Kimia Non Korosif",
      frequency: { min: 60, max: 60 },
    },
    regulation: "",
    imagePath: "./assets/img/Myers Centri-Thrift Series Model 150M-3-1.png",
  },
  {
    name: "Myers 11704E002 Centri-Thrift Series",
    specs: {
      flowOrientation: "Radial",
      position: "Horizontal",
      materialCasing: "Gray Cast Iron",
      materialImpeller: "Brass",
      flowRate: { min: 19.3, max: 19.3 },
      pressure: { min: 3.6, max: 3.6 },
      head: { min: 35.97, max: 35.97 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 38.1, max: 38.1 },
      numberImpeller: "Single",
      designType: "Closed",
      volute: "Radial",
      motorRPM: { min: 3600, max: 3600 },
      ambientTemp: [40, 40],
      internalTemp: [60, 60],
      fluidType: "Water, Cairan Kimia Non Korosif",
      frequency: { min: 60, max: 60 },
    },
    regulation: "",
    imagePath: "./assets/img/Myers 11704E002 Centri-Thrift Series.png",
  },
  {
    name: "Myers CTJ05 dari Seri CTJ",
    specs: {
      flowOrientation: "Radial",
      position: "Vertical atau Horizontal",
      materialCasing: "Cast Iron",
      materialImpeller: "Composite",
      flowRate: { min: 7.945, max: 7.945 },
      pressure: { min: 8.618, max: 8.618 },
      head: { min: 24.38, max: 24.38 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 31.75, max: 31.75 },
      numberImpeller: "Single",
      designType: "Closed",
      volute: "Radial",
      motorRPM: { min: 3600, max: 3600 },
      ambientTemp: [40, 40],
      internalTemp: [60, 60],
      fluidType: "Water, Cairan Kimia Non Korosif",
      frequency: { min: 60, max: 60 },
    },
    regulation: "",
    imagePath: "./assets/img/Myers CTJ05 dari Seri CTJ.png",
  },
  {
    name: "Myers I2C Two-Stage Centrifugal Pump",
    specs: {
      flowOrientation: "Radial",
      position: "Horizontal",
      materialCasing: "Gray Iron Casting",
      materialImpeller: "Bronze Fitted",
      flowRate: { min: 45.42, max: 45.42 },
      pressure: { min: 7.96, max: 7.96 },
      head: { min: 45.72, max: 45.72 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 360.3, max: 360.3 },
      numberImpeller: "Double",
      designType: "Closed",
      volute: "Radial",
      motorRPM: { min: 3450, max: 3450 },
      ambientTemp: [-10, 40],
      internalTemp: [107.2, 107.2],
      fluidType: "Water, Cairan Kimia Non Korosif",
      frequency: { min: 60, max: 60 },
    },
    regulation: "",
    imagePath: "./assets/img/Myers I2C Two-Stage Centrifugal Pump.png",
  },
  {
    name: "ACO VL Series Model 25709",
    specs: {
      flowOrientation: "Axial",
      position: "Vertical",
      materialCasing: "Cast Iron",
      materialImpeller: "Bronze",
      flowRate: { min: 10, max: 50 },
      pressure: { min: 2, max: 5 },
      head: { min: 10, max: 30 },
      npsh: { min: 1, max: 10 },
      impellerSize: { min: 63.5, max: 63.5 },
      numberImpeller: "Single",
      designType: "Francis Vane Impeller (Closed)",
      volute: "Double",
      motorRPM: { min: 1750, max: 1750 },
      ambientTemp: [0, 40],
      internalTemp: [60, 70],
      fluidType: "Water",
      frequency: { min: 60, max: 60 },
    },
    regulation: "ASTM A48, ISO 1940, NSF61/50 1:2003",
    imagePath: "./assets/img/ACO VL Series Model 25709.png",
  },
];

function isValidInput(value, range) {
  if (!isNaN(value)) {
    if (typeof range === "object") {
      return value >= range.min && value <= range.max;
    } else {
      return range.includes(value);
    }
  }
  return false;
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    flowOrientation: document.getElementById("flowOrientation").value,
    position: document.getElementById("position").value,
    suctionDischarge: parseFloat(
      document.getElementById("suctionDischarge").value
    ),
    materialCasing: document.getElementById("materialCasing").value,
    materialImpeller: document.getElementById("materialImpeller").value,
    flowRate: parseFloat(document.getElementById("flowRate").value),
    pressure: parseFloat(document.getElementById("pressure").value),
    head: parseFloat(document.getElementById("head").value),
    npsh: parseFloat(document.getElementById("npsh").value),
    impellerSize: parseFloat(document.getElementById("impellerSize").value),
    numberImpeller: document.getElementById("numberImpeller").value,
    designType: document.getElementById("designType").value,
    volute: document.getElementById("volute").value,
    motorRPM: parseFloat(document.getElementById("motorRPM").value),
    ambientTemp: parseFloat(document.getElementById("ambientTemp").value),
    internalTemp: parseFloat(document.getElementById("internalTemp").value),
    fluidType: document.getElementById("fluidType").value,
    frequency: parseFloat(document.getElementById("frequency").value),
  };

  if (!validateFormData(formData)) {
    return; // Stop processing if form data is not valid
  }

  localStorage.setItem("pumpFormData", JSON.stringify(formData));
  window.location.href = "result.html";
}

function validateFormData(formData) {
  let isValid = true;
  let errorMessages = "";

  if (!formData.flowOrientation) {
    isValid = false;
    errorMessages += "Orientasi Flow harus diisi.\n";
  }
  if (!formData.position) {
    isValid = false;
    errorMessages += "Position harus diisi.\n";
  }
  if (!formData.materialCasing) {
    isValid = false;
    errorMessages += "Material Casing harus diisi.\n";
  }
  if (!formData.materialImpeller) {
    isValid = false;
    errorMessages += "Material Impeller harus diisi.\n";
  }
  if (isNaN(formData.flowRate) || formData.flowRate === "") {
    isValid = false;
    errorMessages += "Flow Rate harus diisi.\n";
  }
  if (isNaN(formData.pressure) || formData.pressure === "") {
    isValid = false;
    errorMessages += "Pressure harus diisi.\n";
  }
  if (isNaN(formData.head) || formData.head === "") {
    isValid = false;
    errorMessages += "Head harus diisi.\n";
  }
  if (!formData.numberImpeller) {
    isValid = false;
    errorMessages += "Jumlah Impeller harus diisi.\n";
  }
  if (!formData.fluidType) {
    isValid = false;
    errorMessages += "Jenis Fluida harus diisi.\n";
  }
  if (isNaN(formData.frequency) || formData.frequency === "") {
    isValid = false;
    errorMessages += "Frekuensi harus diisi.\n";
  }

  document.getElementById("errorMessages").innerText = errorMessages;
  return isValid;
}
