# Node-Foxit-Reader-Printer

Just send pdf files to default printer

Only Windows support =(

## Install

```
npm i node-foxit-print --save
```

## Using

```
var print = require('node-foxit-print').print;

print('../myFile.pdf', 'C:/Program Files (x86)/Foxit Software/Foxit Reader/Foxit Reader.exe', function (err, res) {
    //Some stuff
});
```

You can use toPDF API to generate pdf files by [wkhtmltopdf](http://wkhtmltopdf.org/)

```
var print = require('node-foxit-print').toPDF;

print('http://wkhtmltopdf.org/', 'C:/Print/wkhtmltopdf/bin/wkhtmltopdf.exe', '../myFile.pdf', function (err, res) {
    //Some stuff
});
```
