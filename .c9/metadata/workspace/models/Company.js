{"filter":false,"title":"Company.js","tooltip":"/models/Company.js","undoManager":{"mark":3,"position":3,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":8,"column":26},"action":"insert","lines":["          td= company.name","          th= company.website","          th= company.email","          th= company.description","          th= company.phone","          th= company.address","          th= company.logo"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":8,"column":26},"action":"remove","lines":["","","          td= company.name","          th= company.website","          th= company.email","          th= company.description","          th= company.phone","          th= company.address","          th= company.logo"]},{"start":{"row":0,"column":0},"end":{"row":13,"column":0},"action":"insert","lines":["var mongoose = require('mongoose');","","var companySchema = new mongoose.Schema({","    name: String,","    website: String,","    email: String,","    description: String,","    phone: String,","    address: String,","    logo: String","});","","module.exports = mongoose.model('company', companySchema);",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":0},"end":{"row":13,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":13,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1426158832082,"hash":"1f43a37d7407a0a3d0bd750983baa6c78ba4977b"}