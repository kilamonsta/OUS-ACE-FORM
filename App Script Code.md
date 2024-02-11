// Replace 'SPREADSHEET_ID' with your actual spreadsheet ID
var SPREADSHEET_ID = '1WMOrjc6K_isw0uzSBSm8uAOvt2TxuaLCuE199QTvcps';

function doPost(e) {
  try {
    // Extract form fields from the request
    var program = e.parameter.program; 
    var semester = e.parameter.semester;
    var courseAction = e.parameter.courseAction;

    var yearSectionFrom = e.parameter.yearSectionFrom;
    var codeFrom = e.parameter.codeFrom;
    var courseTitleFrom = e.parameter.courseTitleFrom;
    var unitFrom = e.parameter.unitFrom;
// Extract values from text boxes in the "TO" section
    var yearSectionTo = e.parameter.yearSectionTo;
    var codeTo = e.parameter.codeTo;
    var courseTitleTo = e.parameter.courseTitleTo;
    var unitTo = e.parameter.unitTo;

    var yearSection = e.parameter.yearSection;
    var code = e.parameter.code;
    var courseTitle = e.parameter.courseTitle;
    var unit = e.parameter.unit;

    var yearSectionAdd = e.parameter.yearSectionAdd;
    var codeAdd = e.parameter.codeAdd;
    var courseTitleAdd = e.parameter.courseTitleAdd;
    var unitAdd = e.parameter.unitAdd;
    

    Logger.log('Program: ' + program);
    Logger.log('Semester: ' + semester);
    Logger.log('Course: ' + courseAction);
    Logger.log('Year & Section: ' + yearSectionFrom);
    Logger.log('Code: ' + codeFrom);
    Logger.log('Course Title: ' + courseTitleFrom);
    Logger.log('Unit: ' + unitTo);
    Logger.log('Year & Section: ' + yearSectionTo);
    Logger.log('Code: ' + codeTo);
    Logger.log('Course Title: ' + courseTitleTo);
    Logger.log('Unit: ' + unitTo);
    Logger.log('Year & Section: ' + yearSection);
    Logger.log('Code: ' + code);
    Logger.log('Course Title: ' + courseTitle);
    Logger.log('Unit: ' + unit);
    Logger.log('Year & Section: ' + yearSectionAdd);
    Logger.log('Code: ' + codeAdd);
    Logger.log('Course Title: ' + courseTitleAdd);
    Logger.log('Unit: ' + unitAdd);


    // Open the spreadsheet
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);

    var sheet = spreadsheet.getSheets()[0];
    sheet.appendRow([program, semester, courseAction, yearSectionFrom, codeFrom, courseTitleFrom, unitFrom, yearSectionTo, codeTo, courseTitleTo, unitTo,yearSection, code, courseTitle, unit,yearSectionAdd, codeAdd, courseTitleAdd, unitAdd]); 

  }
    catch (error) {
    // Log any errors
    Logger.log(error);
}
}

function doGet(e) {
  // Redirect to another page after form submission
  return HtmlService.createHtmlOutput('<script>window.location.href = "status.html";</script>');
}
