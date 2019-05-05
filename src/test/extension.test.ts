import * as assert from 'assert';
import * as ssrs from '../extension';

suite("Extension Tests", function () {

  test("When 2 part file name ends with rdl then OK", function () {

    let fileName = 'test.rdl';
    let result = ssrs.isFileReport(fileName);
    assert.equal(result, true);
  });


  test("When 2 part file name ends not with rdl then NOT OK", function () {

    let fileName = 'test.rd';

    let result = ssrs.isFileReport(fileName);
    assert.equal(result, false);


  });

  test("When 3 part file name ends not with rdl then OK", function () {

    let fileName = 'test.test.rdl';

    let result = ssrs.isFileReport(fileName);
    assert.equal(result, true);
  });

  test("When file is named as rdl then NOT OK", function () {

    let fileName = 'rdl';
    let result = ssrs.isFileReport(fileName);
    assert.equal(result, false);
  });


});
